import React, { useCallback, useRef, useState } from 'react';

import { useAllocWindowHeight } from 'components/utils/use-alloc-window-height';
import { GlobalMenuOpenButton } from 'components/atoms/global-menu-open-button';
import { GlobalFooter } from 'components/organisms/global-footer';
import { GlobalHeader } from 'components/organisms/global-header';
import { GlobalMenu } from 'components/organisms/global-menu';

export const General: React.FC = ({ children }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpened, setMenuOpened] = useState(false);

  useAllocWindowHeight({ ref: rootRef });

  const onOpenRequested = useCallback(() => {
    console.log('aoeip');
    setMenuOpened(true);
  }, []);
  const onCloseRequested = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <div className="t-general" ref={rootRef}>
      <GlobalHeader />
      <main className="t-general__main">{children}</main>
      <GlobalFooter />
      <GlobalMenuOpenButton onClick={onOpenRequested} />
      <GlobalMenu opened={menuOpened} onCloseRequested={onCloseRequested} />
    </div>
  );
};
