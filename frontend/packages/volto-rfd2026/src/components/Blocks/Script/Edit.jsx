import React, { useState } from 'react';
import { defineMessages } from 'react-intl';
import { Icon, SidebarPortal } from '@plone/volto/components';
import clearSVG from '@plone/volto/icons/clear.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import applicationSVG from '@plone/volto/icons/application.svg';
import ScriptView from './View';
import ScriptSidebar from './Data';

const messages = defineMessages({
  InputPlaceholder: {
    id: 'https://example.org/script.js',
    defaultMessage: 'https://example.org/script.js',
  },
});

const ScriptEdit = (props) => {
  const { data, intl } = props;
  const [url, setUrl] = useState('');

  const onChangeUrl = ({ target }) => {
    setUrl(target.value);
  };

  const resetSubmitUrl = () => {
    setUrl('');
  };

  const onSubmitUrl = () => {
    props.onChangeBlock(props.block, {
      ...props.data,
      src: url,
    });
    return;
  };

  const onKeyDownVariantMenuForm = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmitUrl();
    }
  };

  return (
    <div>
      {data.src ? (
        <ScriptView {...props} />
      ) : (
        <div>
          <center>
            <Icon name={applicationSVG} size="120px" />
            <div className="toolbar-inner">
              <input
                onKeyDown={onKeyDownVariantMenuForm}
                onChange={onChangeUrl}
                placeholder={intl.formatMessage(messages.InputPlaceholder)}
                value={url}
              />
              <div>
                {url && (
                  <div>
                    <button
                      className="cancel"
                      onClick={(e) => {
                        e.stopPropagation();
                        resetSubmitUrl();
                      }}
                    >
                      <Icon name={clearSVG} size="30px" />
                    </button>
                  </div>
                )}
                <div>
                  <button
                    disabled={!url}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubmitUrl();
                    }}
                  >
                    <Icon
                      name={aheadSVG}
                      size="30px"
                      color={!url ? '#007fb1b3' : '#007eb1'}
                    />
                  </button>
                </div>
              </div>
            </div>
          </center>
        </div>
      )}

      <SidebarPortal selected={props.selected}>
        <ScriptSidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default ScriptEdit;
