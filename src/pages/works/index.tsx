import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';
import DetailedLink from 'components/molecules/detailed-link';
import Discography from 'components/molecules/discography';

export default function WorksIndex() {
  return (
    <Layout>
      <Helmet>
        <title>works | れーみ official website</title>
      </Helmet>

      <h2>works</h2>
    </Layout>
  );
}
