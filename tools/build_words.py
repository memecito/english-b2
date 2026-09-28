#!/usr/bin/env python3
"""Genera words.js a partir de data/translations.txt
(formato: ingles|es1,es2,...  o  ingles|es1,es2,...|categoria;
las líneas que empiezan por # son comentarios).

Copia B2 de ingles-ari (ver CLAUDE.md) — el vocabulario sale de
~/claude/English/theory/vocabulary.txt y del plan de estudio propio,
no de un PDF de editorial. Palabras puramente gramaticales o
ambiguas se excluyen (SKIP). La categoría (3er campo) es opcional:
solo algunas palabras la tienen, sirve para el filtro "por temática"
del juego.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP = {"would", "shall", "might", "could", "of", "to", "the", "it", "its", "itself",
        "a.m.", "p.m.", "per", "as", "such", "than", "off", "yet", "else", "ms", "at", "out of", "over"}
ORDER = {}  # variantes con orden a medida, p. ej. {"lots / a lot": ["a lot", "lots"]}

words, seen = [], set()
for line in (ROOT / "data/translations.txt").read_text(encoding="utf8").splitlines():
    if "|" not in line or line.lstrip().startswith("#"):  # comentarios y líneas vacías
        continue
    parts = line.split("|")
    raw, es = parts[0], parts[1]
    cat = parts[2].strip() if len(parts) > 2 and parts[2].strip() else None
    key = raw.strip().lower()
    if key in SKIP or key in seen:
        continue
    seen.add(key)
    en = ORDER.get(key) or [v.strip() for v in raw.split("/") if v.strip()]
    entry = {"en": en, "es": [v.strip() for v in es.split(",") if v.strip()]}
    if cat:
        entry["cat"] = cat
    words.append(entry)

words.sort(key=lambda w: w["en"][0].lower())
out = ROOT / "words.js"
out.write_text("// Generado por tools/build_words.py — no editar a mano\nconst WORDS = "
               + json.dumps(words, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf8")
print(len(words), "palabras ->", out)
