import React, { ReactNode } from 'react';

import Header from 'components/organisms/header';
import Main from 'components/organisms/main';
import Footer from 'components/organisms/footer';

interface Props {
  children: ReactNode;
}

export default function General(props: Props) {
  return (
    <div className="t-general">
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
}
