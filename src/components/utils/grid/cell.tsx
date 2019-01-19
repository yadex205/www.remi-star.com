import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode | string;
  colPC?: number | undefined;
  colTablet?: number | undefined;
  colSP?: number | undefined;
}

export default function Cell(props: Props) {
  const { colPC, colTablet, colSP, children } = props;
  const className = ['u-grid__cell'];

  className.push(`u-grid__cell--col-pc-${colPC && colPC > 0 ? colPC : 12}`);

  if (colTablet && colTablet > 0) {
    className.push(`u-grid__cell--col-tablet-${colTablet}`);
  }

  if (colSP && colSP > 0) {
    className.push(`u-grid__cell--col-sp-${colSP}`);
  }

  return (
    <div className={className.join(' ')}>
      {children}
    </div>
  );
}
