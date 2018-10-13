import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export default function General(props: Props) {
  return (
    <div className="t-general">
      {props.children}
    </div>
  );
}
