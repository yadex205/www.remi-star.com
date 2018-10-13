import React, { ReactNode } from 'react';

import Header from 'components/organisms/header';

interface Props {
  children: ReactNode
}

export default function General(props: Props) {
  return (
    <div className="t-general">
      <Header />
      {props.children}
    </div>
  );
}
