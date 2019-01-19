import React from 'react';

interface Props {
  opened: boolean;
  onClick: () => void;
}

export default function(props: Props) {
  const classNames = ['a-hamburger-button'];
  if (props.opened) {
    classNames.push('a-hamburger-button--opened');
  }

  return (
    <button className={classNames.join(' ')} onClick={props.onClick}>
      <ul className="a-hamburger-button__icons-wrapper">
        <li className="a-hamburger-button__icon a-hamburger-button__icon--close">
          <div/><div/><div/>
        </li>
        <li className="a-hamburger-button__icon a-hamburger-button__icon--open">
          <div/><div/>
        </li>
      </ul>
    </button>
  );
}
