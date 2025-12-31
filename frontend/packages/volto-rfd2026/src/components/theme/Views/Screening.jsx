/**
 * Screening view component.
 * @module components/theme/View/Screening
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import ScreeningRenderBlocks from './ScreeningRenderBlocks';
import ScreeningDetails from '../ScreeningDetails/ScreeningDetails';

/**
 * Screening view component class.
 * @function Screening
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Screening = (props) => {
  const { content } = props;

  return (
    <div id="page-document" className="ui container viewwrapper event-view">
      <div className="screening-header-container">
        <div className="title-description-container">
          <h1 className="documentFirstHeading">{content.title}</h1>
          <p className="documentDescription">{content.description}</p>
        </div>
        {content.preview_image_link && (
          <Image
            className="document-image"
            src={content.preview_image_link['@id'] + '/@@images/image/film'}
          />
        )}
      </div>
      <ScreeningDetails content={content} />
      <ScreeningRenderBlocks {...props} />
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Screening.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    contact_email: PropTypes.string,
    contact_name: PropTypes.string,
    contact_phone: PropTypes.string,
    event_url: PropTypes.string,
    location: PropTypes.string,
    open_end: PropTypes.bool,
    recurrence: PropTypes.any,
    start: PropTypes.string.isRequired,
    whole_day: PropTypes.bool,
  }).isRequired,
};

export default Screening;
