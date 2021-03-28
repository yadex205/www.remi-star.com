import React from 'react';

export interface SectionHeadingProps {
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <h2 className="a-section-heading">
    <span className="a-section-heading__text">{children}</span>
  </h2>
);
