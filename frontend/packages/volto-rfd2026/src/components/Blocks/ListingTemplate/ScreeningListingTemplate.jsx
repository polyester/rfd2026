import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink, FormattedDate } from '@plone/volto/components';

const ScreeningListingTemplate = ({
  items,
  linkTitle,
  linkHref,
  isEditMode,
}) => {
  return (
    <>
      <div className="items screening-listing">
        {items.map((item) => (
          <div className="listing-item" key={item['@id']}>
            <ConditionalLink item={item} condition={!isEditMode}>
              {item?.image_scales?.preview_image_link ? (
                /*eslint-disable */
                <img
                  className="preview-image"
                  src={
                    item?.image_scales?.preview_image_link[0]?.base_path +
                    '/' +
                    item?.image_scales?.preview_image_link[0]?.scales?.preview
                      ?.download
                  }
                  alt={item?.preview_alt_tag}
                />
              ) : (
                /*eslint-enable */
                <div className="preview-image-dummy" />
              )}
              <div className="headline">
                {item.screening_type === 'Feature' ||
                item.screening_type === 'Special' ? (
                  <h2>{item.title ? item.title : item.id}</h2>
                ) : (
                  <h2>
                    {item.screening_type} - {item.title ? item.title : item.id}
                  </h2>
                )}
              </div>
              <div className="listing-body">
                <FormattedDate
                  className="date"
                  locale={'nl'}
                  date={item.start}
                  includeTime
                />
                <p>{item.description}</p>
              </div>
            </ConditionalLink>
          </div>
        ))}
      </div>
    </>
  );
};
ScreeningListingTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};
export default ScreeningListingTemplate;
