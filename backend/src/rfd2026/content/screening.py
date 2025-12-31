from plone.dexterity.content import Container
from plone.supermodel.model import Schema
from rfd2026 import _
from zope import schema
from zope.interface import implementer


class IScreening(Schema):
    """Screening content type interface"""

    director = schema.TextLine(title=_("Director"), required=False)
    running_time = schema.TextLine(title=_("Running Time"), required=False)
    country = schema.TextLine(title=_("Country"), required=False)
    year = schema.TextLine(title=_("Year"), required=False)
    film_language = schema.TextLine(title=_("Language"), required=False)
    subtitles = schema.TextLine(title=_("Subtitles"), required=False)
    screening_type = schema.Choice(
        title=_("Type"),
        required=True,
        vocabulary="rfd2026.vocabularies.screening_types",
        missing_value="",
        default="Feature",
    )
    ticket_link = schema.URI(
        title=_("Tickets"),
        description=_("Enter the Link to the Ticketshop of this screening"),
        required=False,
    )


@implementer(IScreening)
class Screening(Container):
    """Screening content type"""
