import React from 'react';
import Helmet from 'react-helmet';

import General from 'components/templates/general';
import MainVisual from 'components/molecules/main-visual';
import HomeSection, { HomeSectionColumn } from 'components/molecules/home-section';
import DetailedLink from 'components/molecules/detailed-link';

export default function Index() {
  return (
    <General>
      <Helmet>
        <body className="p-home" />
      </Helmet>

      <MainVisual />

      <HomeSection>
        <HomeSectionColumn title="live schedule">
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavinaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaag "
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <footer>サポートでの出演もあります。<br />全ての出演予定は live ページをご覧ください！</footer>
        </HomeSectionColumn>
        <HomeSectionColumn title="twitter">

        </HomeSectionColumn>
      </HomeSection>

      <HomeSection>
        <HomeSectionColumn title="news">
          <DetailedLink to="/newss"
                        date="2015.06.20"
                        day="sat"
                        title="サイトを開設しました！" />
        </HomeSectionColumn>
      </HomeSection>
    </General>
  );
}
