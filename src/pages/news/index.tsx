import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';
import Section, { SectionColumn } from 'components/molecules/section';
import DetailedLink from 'components/molecules/detailed-link';

export default function NewsIndex() {
  return (
    <Layout>
      <Helmet>
        <title>news | れーみ official website</title>
      </Helmet>

      <h2>news</h2>

      <Section>
        <SectionColumn>
          <DetailedLink large={true}
                        to="/aiueo"
                        date="2018.04.23"
                        day="sun"
                        title="サイト開設" />
          <DetailedLink large={true}
                        to="/aiueo"
                        date="2018.04.23"
                        day="sun"
                        title="サイト開設" />
        </SectionColumn>
      </Section>
    </Layout>
  );
}
