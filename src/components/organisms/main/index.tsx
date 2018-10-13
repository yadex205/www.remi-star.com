import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Main(props: Props) {
  return (
    <main className="o-main">{props.children}</main>
  );
}
