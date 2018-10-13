import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Section(props: Props) {
  return (
    <section className="m-section">{props.children}</section>
  );
}

interface ColumnProps {
  title?: string;
  children: ReactNode;
}

export function SectionColumn(props: ColumnProps) {
  return (
    <div className="m-section__column">
      <header className="m-section__column-title">{props.title}</header>
      <main className="m-section__column-body">
        {props.children}
      </main>
    </div>
  );
}
