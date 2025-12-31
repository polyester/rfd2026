from plone import api

MONTHS = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "jul",
    8: "aug",
    9: "sep",
    10: "oct",
    11: "nov",
    12: "dec",
}


def format_date(date: str, languages: list[str]) -> str:
    """Format date."""
    year, month, day = [int(i) for i in date.split("-")]
    month = f"month_{MONTHS.get(month)}"
    month_translations = []
    for lang in languages:
        month_translations.append(
            api.portal.translate(msgid=month, domain="plonelocales", lang=lang)
        )
    month_text = "/".join(month_translations)
    return f"{day:02d} {month_text} {year:04d}"
