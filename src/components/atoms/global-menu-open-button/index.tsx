import React from 'react';

import { Icon } from 'components/atoms/icon';

type GlobalMenuOpenButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export const GlobalMenuOpenButton: React.FC<GlobalMenuOpenButtonProps> = props => (
  <button {...props} className="a-global-menu-open-button" aria-label="メニューを開く">
    <Icon name="list" />
  </button>
);
