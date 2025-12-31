from plone import api
from rfd2026.utils.date import format_date
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


@provider(IVocabularyFactory)
def screening_dates_vocabulary(context) -> SimpleVocabulary:
    """Vocabulary of available Screening Dates."""
    catalog = api.portal.get_tool("portal_catalog")
    all_dates = sorted(catalog.uniqueValuesFor("screening_date"))
    terms = []
    for item in all_dates:
        title = format_date(item, languages=["nl", "en"])
        terms.append(SimpleTerm(item, item, title))
    return SimpleVocabulary(terms)
