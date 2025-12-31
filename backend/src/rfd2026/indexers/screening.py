from plone.indexer import indexer
from rfd2026.content.screening import IScreening
from rfd2026.content.screening import Screening


@indexer(IScreening)
def date_indexer(obj: Screening) -> str:
    """Index a screening date."""
    date = obj.start.date() if obj.start else ""
    return f"{date:%Y-%m-%d}" if date else ""
