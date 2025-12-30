import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

const ScriptView = (props) => {
  const { data, className } = props;
  const scriptContainerRef = useRef(null);

  useEffect(() => {
    if (data.src) {
      const script = document.createElement('script');
      script.src = data.src;
      script.async = true;

      const currentContainer = scriptContainerRef.current;

      if (currentContainer) {
        const originalAlert = window.alert;
        window.alert = () => {};
        currentContainer.appendChild(script);

        script.onload = () => {
          window.alert = originalAlert;
        };

        script.onerror = () => {
          window.alert = originalAlert;
        };
      }

      return () => {
        if (currentContainer) {
          while (currentContainer.firstChild) {
            currentContainer.removeChild(currentContainer.firstChild);
          }
        }
      };
    }
  }, [data.src]);

  return (
    <div className={cx('block script', className)} ref={scriptContainerRef} />
  );
};

export default ScriptView;
