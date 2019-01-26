import React from 'react';
import { Link } from 'gatsby';

interface Props {
  to: string;
  date: Date | string;
  title: string;
  place?: string;
  large?: boolean;
}

export default function DetailedLink(props: Props) {
  const date = typeof props.date === 'string' ? new Date(props.date) : props.date;

  return (
    <Link className={`m-detailed-link ${props.large ? 'm-detailed-link--large' : ''}`}
          to={props.to}>
      <div className="m-detailed-link__date">
        <div>{date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}</div>
        <div>{['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()]}</div>
      </div>
      <div className="m-detailed-link__separator"></div>
      <main className="m-detailed-link__main">
        <div className="m-detailed-link__title">{props.title}</div>
        <div className="m-detailed-link__place">{props.place}</div>
      </main>
    </Link>
  );
}
