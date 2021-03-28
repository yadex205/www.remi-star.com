import React, { useCallback, useMemo } from 'react';

import { Icon } from 'components/atoms/icon';

export interface PaginationProps {
  length: number;
  current: number;
  onPageRequested: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ length, current, onPageRequested }) => {
  return (
    <div className="m-pagination">
      <div className="m-pagination__inner">
        <button
          type="button"
          className="m-pagination__prev-button"
          disabled={current === 1}
          onClick={() => onPageRequested(current - 1)}
        >
          <Icon name="caret-left" />
          <span className="m-pagination__prev-button-text">前へ</span>
        </button>
        <button
          type="button"
          className="m-pagination__next-button"
          disabled={current === length}
          onClick={() => onPageRequested(current + 1)}
        >
          <span className="m-pagination__next-button-text">次へ</span>
          <Icon name="caret-right" />
        </button>
      </div>
    </div>
  );
};
