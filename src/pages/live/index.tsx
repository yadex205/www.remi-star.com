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

      <article className="t-live-index">
        <h2>live</h2>

        <section>
          <Grid gutterPC={{ h: 40, v: 60 }} gutterSP={{ v: 40 }}>
            <Cell colPC={6} colSP={12}>
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
            <Cell colPC={6} colSP={12}>
              <h3>サポートライブ　</h3>
            </Cell>
            <Cell colPC={12} colSP={12}>
              <p className="a-caption">
                過去のライブ履歴はこちら（準備中）
              </p>
            </Cell>
          </Grid>
        </section>
      </article>
    </Layout>
  );
}
