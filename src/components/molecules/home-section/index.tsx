import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HomeSection(props: Props) {
  return (
    <section className="m-home-section">{props.children}</section>
  );
}

interface ColumnProps {
  title: string;
  children: ReactNode;
}

export function HomeSectionColumn(props: ColumnProps) {
  return (
    <div className="m-home-section__column">
      <header className="m-home-section__column-title">{props.title}</header>
      <main className="m-home-section__column-body">
        {props.children}
      </main>
    </div>
  );
}
