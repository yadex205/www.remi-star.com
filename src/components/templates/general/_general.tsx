import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => (
  <div className="t-general">{children}</div>
);
