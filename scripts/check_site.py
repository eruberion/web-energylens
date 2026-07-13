#!/usr/bin/env python3
"""Deterministische Pre-Launch-Pruefung fuer die statische EnergyLens-Seite."""

from __future__ import annotations

import argparse
import struct
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs: list[tuple[str, str]] = []
        self.ids: set[str] = set()
        self.meta: dict[str, str] = {}
        self.canonical = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if values.get("id"):
            self.ids.add(values["id"])
        for attribute in ("href", "src"):
            if values.get(attribute):
                self.refs.append((attribute, values[attribute]))
        if tag == "meta":
            key = values.get("property") or values.get("name")
            if key:
                self.meta[key] = values.get("content", "")
        if tag == "link" and "canonical" in values.get("rel", "").split():
            self.canonical = values.get("href", "")


def png_size(path: Path) -> tuple[int, int]:
    data = path.read_bytes()[:24]
    if len(data) != 24 or data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("kein gueltiger PNG-Header")
    return struct.unpack(">II", data[16:24])


def local_target(page: Path, ref: str) -> Path | None:
    parsed = urlparse(ref)
    if parsed.scheme in {"http", "https", "mailto", "tel"} or ref.startswith("//"):
        return None
    path = unquote(parsed.path)
    if not path:
        return page
    return SITE / path.lstrip("/") if path.startswith("/") else (page.parent / path).resolve()


def main() -> int:
    argument_parser = argparse.ArgumentParser()
    argument_parser.add_argument("--production-origin", default="")
    args = argument_parser.parse_args()
    errors: list[str] = []
    pages: dict[Path, PageParser] = {}
    for page in sorted(SITE.rglob("*.html")):
        parser = PageParser()
        parser.feed(page.read_text(encoding="utf-8"))
        pages[page.resolve()] = parser

    for page, parser in pages.items():
        for attribute, ref in parser.refs:
            if ref == "#":
                errors.append(f"{page.relative_to(ROOT)}: leeres {attribute}=\"#\"")
                continue
            target = local_target(page, ref)
            if target is not None and SITE.resolve() not in target.resolve().parents and target.resolve() != SITE.resolve():
                errors.append(f"{page.relative_to(ROOT)}: Referenz verlaesst site/: {ref}")
                continue
            if target is not None and not target.exists():
                errors.append(f"{page.relative_to(ROOT)}: fehlt: {ref}")
            fragment = urlparse(ref).fragment
            target_parser = pages.get(target.resolve()) if target and target.exists() and target.suffix == ".html" else None
            if fragment and (target_parser or parser).ids and fragment not in (target_parser or parser).ids:
                errors.append(f"{page.relative_to(ROOT)}: unbekannter Anker #{fragment}")

    index = (SITE / "index.html").read_text(encoding="utf-8")
    version = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
    if not version:
        errors.append("VERSION ist leer")
    for page_name in ("index.html", "support.html"):
        page_text = (SITE / page_name).read_text(encoding="utf-8")
        if f"Version {version}" not in page_text:
            errors.append(f"site/{page_name}: sichtbare Version {version} fehlt")
    for forbidden in ("diegobulach.com", "Startbonus", "Laden im", "href=\"#\""):
        if forbidden.lower() in index.lower():
            errors.append(f"site/index.html: verbotener oder irrefuehrender Inhalt: {forbidden}")

    index_meta = pages[(SITE / "index.html").resolve()].meta
    social_image = (
        f"{args.production_origin.rstrip('/')}/assets/images/energylens-social-preview.png"
        if args.production_origin
        else "./assets/images/energylens-social-preview.png"
    )
    required_meta = {
        "og:image": social_image,
        "og:image:width": "1200",
        "og:image:height": "630",
        "twitter:card": "summary_large_image",
        "twitter:image": social_image,
    }
    for key, expected in required_meta.items():
        if index_meta.get(key) != expected:
            errors.append(f"site/index.html: {key} muss {expected!r} sein")

    if args.production_origin:
        origin = args.production_origin.rstrip("/")
        if urlparse(origin).scheme != "https" or not urlparse(origin).hostname:
            errors.append("--production-origin muss eine absolute HTTPS-Origin sein")
        expected_image = f"{origin}/assets/images/energylens-social-preview.png"
        if index_meta.get("og:image") != expected_image or index_meta.get("twitter:image") != expected_image:
            errors.append("Produktions-OG-/Twitter-Bilder muessen absolute URLs der bestaetigten Origin verwenden")
        if index_meta.get("og:url") != f"{origin}/":
            errors.append("og:url fehlt oder passt nicht zur bestaetigten Produktions-Origin")
        if pages[(SITE / "index.html").resolve()].canonical != f"{origin}/":
            errors.append("Canonical fehlt oder passt nicht zur bestaetigten Produktions-Origin")

    preview = SITE / "assets/images/energylens-social-preview.png"
    try:
        if png_size(preview) != (1200, 630):
            errors.append("Social Preview muss exakt 1200x630 Pixel gross sein")
    except (OSError, ValueError) as error:
        errors.append(f"Social Preview ungueltig: {error}")

    for required in (SITE / "support.html", SITE / "robots.txt", SITE / "sitemap.xml"):
        if not required.exists():
            errors.append(f"Pflichtdatei fehlt: {required.relative_to(ROOT)}")

    if errors:
        print("EnergyLens Site-Check fehlgeschlagen:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print(f"EnergyLens Site-Check erfolgreich: {len(pages)} HTML-Seiten, lokale Links und Launch-Claims geprueft.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
