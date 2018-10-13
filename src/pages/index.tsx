import React from 'react';
import Helmet from 'react-helmet';

import General from 'components/templates/general';
import MainVisual from 'components/molecules/main-visual';
import HomeSection, { HomeSectionColumn } from 'components/molecules/home-section';

export default function Index() {
  return (
    <General>
      <Helmet>
        <body className="p-home" />
      </Helmet>

      <MainVisual />

      <HomeSection>
        <HomeSectionColumn title="live schedule">

        </HomeSectionColumn>
        <HomeSectionColumn title="twitter">

        </HomeSectionColumn>
      </HomeSection>

      <HomeSection>
        <HomeSectionColumn title="news">

        </HomeSectionColumn>
      </HomeSection>
    </General>
  );
}
