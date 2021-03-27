import React from 'react';

import { Icon } from 'components/atoms/icon';

type GlobalMenuOpenButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export const GlobalMenuOpenButton: React.FC<GlobalMenuOpenButtonProps> = props => (
  <button {...props} className="a-global-menu-open-button">
    <Icon name="list" />
  </button>
);
