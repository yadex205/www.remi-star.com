import React from 'react';
import { Link } from 'gatsby';

import { Icon } from 'components/atoms/icon';

export interface LiveSummaryLink {
  to: string;
  date?: string;
  venue?: string;
}

export const LiveSummaryLink: React.FC<LiveSummaryLink> = ({ to, date, venue, children }) => (
  <Link className="a-live-summary-link" to={to}>
    {date && <div className="a-live-summary-link__date">{date}</div>}
    <div className="a-live-summary-link__title">{children}</div>
    {venue && <div className="a-live-summary-link__venue">{venue}</div>}
    <Icon name="caret-right" />
  </Link>
);
