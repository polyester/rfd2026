import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FormattedDate } from '@plone/volto/components';
import infoSVG from '@plone/volto/icons/info.svg';
import calendarSVG from '@plone/volto/icons/calendar.svg';
import volumeSVG from '@plone/volto/icons/volume.svg';
import subtextSVG from '@plone/volto/icons/subtext.svg';
import trolleySVG from '@plone/volto/icons/trolley.svg';
import tagSVG from '@plone/volto/icons/tag.svg';
import { Icon } from '@plone/volto/components';

const messages = defineMessages({
  tags: {
    id: 'tags',
    defaultMessage: 'Tags',
  },
  when: {
    id: 'event_when',
    defaultMessage: 'When',
  },
  date: {
    id: 'event_date',
    defaultMessage: 'Date',
  },
  allDates: {
    id: 'event_alldates',
    defaultMessage: 'All dates',
  },
  downloadEvent: {
    id: 'Download Event',
    defaultMessage: 'Download Event',
  },
  where: {
    id: 'event_where',
    defaultMessage: 'Where',
  },
  contactName: {
    id: 'event_contactname',
    defaultMessage: 'Contact Name',
  },
  contactPhone: {
    id: 'event_contactphone',
    defaultMessage: 'Contact Phone',
  },
  attendees: {
    id: 'event_attendees',
    defaultMessage: 'Attendees',
  },
  website: {
    id: 'event_website',
    defaultMessage: 'Website',
  },
  visitWebsite: {
    id: 'visit_external_website',
    defaultMessage: 'Visit external website',
  },
  Director: {
    id: 'Director',
    defaultMessage: 'Director',
  },
  RunningTime: {
    id: 'RunningTime',
    defaultMessage: 'Running Time',
  },
  Country: {
    id: 'Country',
    defaultMessage: 'Country',
  },
  Year: {
    id: 'Year',
    defaultMessage: 'Year',
  },
  Language: {
    id: 'Language',
    defaultMessage: 'Language',
  },
  Subtitles: {
    id: 'Subtitles',
    defaultMessage: 'Subtitles',
  },
  Tickets: {
    id: 'Tickets',
    defaultMessage: 'Buy Ticket',
  },
  Type: {
    id: 'Type',
    defaultMessage: 'Type',
  },
});

const ScreeningDetails = ({ content, display_as = 'aside' }) => {
  const intl = useIntl();

  return (
    <>
      <div className="screening details">
        <div className="row">
          <div className="detail">
            <div className="title">
              <Icon name={infoSVG} size="48px" />
              &nbsp;
              {content.screening_type.title},&nbsp;{content.director} ,&nbsp;
              {content.running_time},&nbsp;{content.country},&nbsp;
              {content.year}
            </div>
          </div>
          <div className="detail">
            <div className="title">
              <Icon name={calendarSVG} size="48px" />
              &nbsp;
              <FormattedDate
                className="date"
                locale={'nl'}
                date={content.start}
                includeTime
              />
              ,&nbsp;{content.location}
              <span class="ticketlink">
                <a
                  href={content.ticket_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={trolleySVG} size="48px" />
                  &nbsp;
                  {intl.formatMessage(messages.Tickets)}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {content.film_language && (
            <span className="detail">
              <span className="title">
                <Icon name={volumeSVG} size="48px" />
                &nbsp;{content.film_language}
              </span>
            </span>
          )}
          {content.subtitles && (
            <span className="detail">
              <span className="title">
                <Icon name={subtextSVG} size="48px" />
                &nbsp; {content.subtitles}
              </span>
            </span>
          )}
        </div>
        {content.subjects?.length > 0 && (
          <div className="row tags">
            <div className="detail">
              <p className="title">
                {' '}
                <Icon name={tagSVG} size="48px" />
                &nbsp;
                {content.subjects.map((subject, index) => {
                  return (
                    <span key={index.toString()} className="subject">
                      {subject}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ScreeningDetails;
