import React, { ReactNode } from 'react';
import { LocationContext } from '@reach/router';
import {
  TransitionGroup,
  Transition as ReactTransition,
  CSSTransition
} from 'react-transition-group';

interface Props extends LocationContext {
  children: ReactNode;
}

export default function Transition(props: Props) {
  const timeout = { enter: 1000, exit: 1000 };

  return (
    <TransitionGroup component={null}>
      <ReactTransition key={props.location.pathname}
                       timeout={timeout}
                       onEntering={() => {
                           window.setTimeout(() => window.scrollTo(0, 0), 1000);
                       }}>
        {status => (
          <div className={`u-content u-content--${status}`}>
            <div className="u-content__animation">
              <div /><div /><div /><div /><div /><div /><div /><div />
            </div>
            <div className="u-content__main">
              {props.children}
            </div>
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
}
