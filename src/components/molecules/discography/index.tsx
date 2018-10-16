import React from 'react';

interface Props {
  thumbnailUrl: string;
  name: string;
  genre: string;
  date: string;
  price: number;
}

export default function Discography(props: Props) {
  return (
    <div className="m-discography">
      <div className="m-discography__thumbnail-wrapper">
        <img className="m-discography__thumbnail" alt={props.name} src={props.thumbnailUrl} />
      </div>
      <div className="m-discography__text-wrapper">
        <div className="m-discography__name">{props.name}</div>
        <div className="m-discography__genre">{props.genre}</div>
        <div className="m-discography__release-info">
          {props.date} / &yen;{props.price}
        </div>
      </div>
    </div>
  );
}
