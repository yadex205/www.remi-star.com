import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props {
  children?: ReactNode;
}

export default ({ children }: Props) => (
  <Helmet>
    <title>Website</title>
    {children}
  </Helmet>
);
