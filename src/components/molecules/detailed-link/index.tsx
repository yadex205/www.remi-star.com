import React from 'react';
import { Link } from 'gatsby';

interface Props {
  to: string;
  date: string;
  day: string;
  title: string;
  place?: string;
  large?: boolean;
}

export default function DetailedLink(props: Props) {
  return (
    <Link className={`m-detailed-link ${props.large ? 'm-detailed-link--large' : ''}`}
          to={props.to}>
      <div className="m-detailed-link__date">
        <div>{props.date}</div>
        <div>{props.day}</div>
      </div>
      <div className="m-detailed-link__separator"></div>
      <main className="m-detailed-link__main">
        <div className="m-detailed-link__title">{props.title}</div>
        <div className="m-detailed-link__place">{props.place}</div>
      </main>
    </Link>
  );
}
