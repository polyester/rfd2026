import React from 'react';
import cx from 'classnames';

const IframeView = (props) => {
  const { className, data } = props;

  return (
    <div className={cx('block iframe align', data.width, className)}>
      <center>
        {data.src && (
          <iframe src={data.src} title={data.title} height={data.height} />
        )}
      </center>
    </div>
  );
};

export default IframeView;
