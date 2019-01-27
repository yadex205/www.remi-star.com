import React from 'react';
import Transition from 'transition';

import './src/assets/css/app.scss';

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}

export const shouldUpdateScroll = () => false;
