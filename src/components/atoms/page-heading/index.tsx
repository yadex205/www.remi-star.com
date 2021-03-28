import React from 'react';

export type PageHeadingProps = Omit<React.HTMLAttributes<HTMLHeadingElement>, 'className'>;

export const PageHeading: React.FC<PageHeadingProps> = ({ children, ...props }) => (
  <h1 {...props} className="a-page-heading">
    <span className="a-page-heading__text">{children}</span>
  </h1>
);
