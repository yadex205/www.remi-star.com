import React from 'react';
import { mapModifiers } from 'libs/component';

type IconName =
  | 'caret-up'
  | 'caret-right'
  | 'caret-down'
  | 'caret-left'
  | 'external-link'
  | 'heart'
  | 'home'
  | 'list'
  | 'mail'
  | 'musical-note'
  | 'shopping-bag'
  | 'star'
  | 'times';

export interface IconProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name }) => <i className={mapModifiers('a-icon', name)} />;
