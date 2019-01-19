import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';
import MainVisual from 'components/molecules/main-visual';
import DetailedLink from 'components/molecules/detailed-link';

import Grid, { GridCell as Cell } from 'components/utils/grid';

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <body className="p-home" />
        <title>れーみ official website</title>
        <script async defer src="https://platform.twitter.com/widgets.js"></script>
      </Helmet>

      <article className="t-home">
        <MainVisual />

        <section className="t-home__section">
          <Grid>
            <Cell colPC={6}>
              <h3>live schedule</h3>
              <DetailedLink to="/kiji" date="2018.10.13" day="sat" title="Three for Flavin" place="銀座 Miiya Cafe" />
              <p className="a-caption">サポートでの出演もあります。<br />全ての出演予定は live ページをご覧ください！</p>
            </Cell>
            <Cell colPC={6}>
              <h3>twitter</h3>
              <a className="twitter-timeline"
                 href="https://twitter.com/remiriya27"
                 data-widget-id="607049707467120641"
                 data-link-color="#d55"
                 data-chrome="noheader nofooter noborders transparent"
                 data-border-color="#ffc6d1"
                 data-tweet-limit="3"
                 data-dnt="true">Tweets from @remiriya27</a>
            </Cell>
          </Grid>
        </section>

        <section className="t-home__section">
          <h3>news</h3>
          <DetailedLink to="/newss" date="2015.06.20" day="sat" title="サイトを開設しました！" />
        </section>
      </article>
    </Layout>
  );
}
