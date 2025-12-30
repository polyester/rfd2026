import React from 'react';
import { BlockDataForm, Icon } from '@plone/volto/components';
import { defineMessages } from 'react-intl';
import { ScriptBlockSchema } from './schema';

import applicationSVG from '@plone/volto/icons/application.svg';
import trashSVG from '@plone/volto/icons/delete.svg';

const messages = defineMessages({
  Script: {
    id: 'Script',
    defaultMessage: 'Script',
  },
  NoScript: {
    id: 'No Script source selected',
    defaultMessage: 'No Script source selected',
  },
});

const ScriptSidebar = (props) => {
  const { intl, data, block, onChangeBlock } = props;
  const schema = ScriptBlockSchema({ ...props, intl });

  const resetBlock = () => {
    onChangeBlock(block, {
      ...data,
      src: '',
    });
  };

  return (
    <>
      {!data.src ? (
        <div className="sidebar-metadata-container" secondary>
          {intl.formatMessage(messages.NoScript)}
          <Icon name={applicationSVG} size="100px" color="#b8c6c8" />
        </div>
      ) : (
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.Script)}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
          headerActions={
            <button onClick={resetBlock}>
              <Icon name={trashSVG} size="24px" color="red" />
            </button>
          }
        />
      )}
    </>
  );
};

export default ScriptSidebar;
