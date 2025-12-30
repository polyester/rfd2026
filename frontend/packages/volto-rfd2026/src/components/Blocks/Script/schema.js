import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Script: {
    id: 'Script',
    defaultMessage: 'Script',
  },
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
});

export const ScriptBlockSchema = (props) => ({
  title: props.intl.formatMessage(messages.Script),
  block: 'Script',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['src'],
    },
  ],

  properties: {
    src: {
      title: props.intl.formatMessage(messages.Source),
      widget: 'url',
    },
  },
  required: [],
});
