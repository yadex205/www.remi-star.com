import React from 'react';

export interface LiveEntryHeadingProps {
  children?: React.ReactNode;
  venue?: React.ReactNode;
  date?: React.ReactNode;
}

export const LiveEntryHeading: React.FC<LiveEntryHeadingProps> = ({ children, venue, date }) => (
  <h2 className="a-live-entry-heading">
    <div className="a-live-entry-heading__title">{children}</div>
    <div className="a-live-entry-heading__summary">
      <span className="a-live-entry-heading__date">{date}</span>
      <span className="a-live-entry-heading__summary-delimiter">/</span>
      <span className="a-live-entry-heading__venue">at {venue}</span>
    </div>
  </h2>
);
