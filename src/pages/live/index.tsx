import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';
import Grid, { GridCell as Cell } from 'components/utils/grid';
import DetailedLink from 'components/molecules/detailed-link';

export default function LiveIndex() {
  return (
    <Layout>
      <Helmet>
        <title>live | れーみ official website</title>
      </Helmet>

      <h2>live</h2>

      <section>
        <Grid>
          <Cell colPC={6}>
            <h3>れーみ ライブ (ソロ・バンド)</h3>
            <DetailedLink to="/aiueo"
                          date="2018.04.23"
                          day="sun"
                          title="サイト開設" />
            <DetailedLink to="/aiueo"
                          date="2018.04.23"
                          day="sun"
                          title="サイト開設" />
          </Cell>
          <Cell colPC={6}>
            <h3>サポートライブ　</h3>
          </Cell>
        </Grid>
      </section>

      <section>
        {/* 過去のライブ履歴は */}
      </section>
    </Layout>
  );
}
