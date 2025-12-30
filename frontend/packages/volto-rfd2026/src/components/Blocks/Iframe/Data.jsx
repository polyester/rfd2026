import React from 'react';
import { BlockDataForm, Icon } from '@plone/volto/components';
import { defineMessages } from 'react-intl';
import { IframeBlockSchema } from './schema';

import applicationSVG from '@plone/volto/icons/application.svg';
import trashSVG from '@plone/volto/icons/delete.svg';

const messages = defineMessages({
  Iframe: {
    id: 'Iframe',
    defaultMessage: 'Iframe',
  },
  NoIframe: {
    id: 'No Iframe source selected',
    defaultMessage: 'No Iframe source selected',
  },
});

const IframeSidebar = (props) => {
  const { intl, data, block, onChangeBlock } = props;
  const schema = IframeBlockSchema({ ...props, intl });

  const resetBlock = () => {
    onChangeBlock(block, {
      ...data,
      src: '',
      title: '',
      align: '',
    });
  };

  return (
    <>
      {!data.src ? (
        <div className="sidebar-metadata-container" secondary>
          {intl.formatMessage(messages.NoIframe)}
          <Icon name={applicationSVG} size="100px" color="#b8c6c8" />
        </div>
      ) : (
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.Iframe)}
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

export default IframeSidebar;
