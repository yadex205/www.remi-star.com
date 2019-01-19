import React, { ReactNode } from 'react';
import Cell from './cell';

interface Props {
  children: ReactNode;
  gutterPC?: { v?: number; h?: number };
  gutterTablet?: { v?: number, h?: number };
  gutterSP?: { v?: number, h?: number };
}

export default function Grid(props: Props) {
  const { gutterPC, gutterTablet, gutterSP } = props;
  const classNames = ['u-grid'];

  if (gutterPC && gutterPC.v) { classNames.push(`u-grid--gutter-pc-v-${gutterPC.v}`); }
  if (gutterPC && gutterPC.h) { classNames.push(`u-grid--gutter-pc-h-${gutterPC.h}`); }
  if (gutterTablet && gutterTablet.v) { classNames.push(`u-grid--gutter-tablet-v-${gutterTablet.v}`); }
  if (gutterTablet && gutterTablet.h) { classNames.push(`u-grid--gutter-tablet-h-${gutterTablet.h}`); }
  if (gutterSP && gutterSP.v) { classNames.push(`u-grid--gutter-sp-v-${gutterSP.v}`); }
  if (gutterSP && gutterSP.h) { classNames.push(`u-grid--gutter-sp-h-${gutterSP.h}`); }

  return (
    <div className={classNames.join(' ')}>
      <div className="u-grid__body">
        {props.children}
      </div>
    </div>
  );
}

export const GridCell = Cell;
