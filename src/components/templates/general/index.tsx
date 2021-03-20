import React, { useRef } from 'react';

import { useAllocWindowHeight } from 'components/utils/use-alloc-window-height';
import { GlobalHeader } from 'components/organisms/global-header';

export const General: React.FC = ({ children }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useAllocWindowHeight({ ref: rootRef });

  return (
    <div className="t-general" ref={rootRef}>
      <GlobalHeader />
      <main className="t-general__main">{children}</main>
    </div>
  );
};
