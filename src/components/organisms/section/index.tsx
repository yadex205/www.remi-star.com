import React from 'react';
import { mapModifiers } from 'libs/component';

export type SectionProps = Omit<React.HTMLAttributes<HTMLElement>, 'className'>;

export const Section: React.FC<SectionProps> = ({ children, ...props }) => (
  <section {...props} className={mapModifiers('o-section', props.dangerouslySetInnerHTML && 'with-inner-html')}>
    {children}
  </section>
);
