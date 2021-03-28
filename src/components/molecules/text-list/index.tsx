import React from 'react';

interface TextListItemProps {
  children?: React.ReactNode;
}

export const TextListItem: React.FC<TextListItemProps> = ({ children }) => (
  <li className="m-text-list__item">{children}</li>
);

export interface TextListProps {
  children?: React.ReactNode;
}

export const TextList: React.FC<TextListProps> = ({ children }) => <ul className="m-text-list">{children}</ul>;
