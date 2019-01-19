import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';
import DetailedLink from 'components/molecules/detailed-link';

export default function NewsIndex() {
  return (
    <Layout>
      <Helmet>
        <title>news | れーみ official website</title>
      </Helmet>

      <article className="t-news-index">
        <h2>news</h2>

        <section>
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
        </section>
      </article>
    </Layout>
  );
}
