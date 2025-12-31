from rfd2026 import _
from zope.interface import provider
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


EVENT_TYPES = ("Feature", "Short", "Docu", "Special")


@provider(IVocabularyFactory)
def screening_types_vocabulary(context) -> SimpleVocabulary:
    """Vocabulary of available Event Types."""
    terms = [SimpleTerm(term, term, _(term)) for term in EVENT_TYPES]
    return SimpleVocabulary(terms)
