import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import Grid, { GridCell as Cell } from 'components/utils/grid';
import DetailedLink from 'components/molecules/detailed-link';

export const pageQuery = graphql`
query {
  main: allContentfulLive(
    sort: { order: ASC, fields: [date] },
    filter: { form: { ne: "support" } }
  ) {
    edges {
      node { title, slug, date, venue }
    }
  }

  support: allContentfulLive(
    sort: { order: ASC, fields: [date] },
    filter: { form: { eq: "support" } }
  ) {
    edges {
      node { title, slug, date, venue }
    }
  }
}
`;

interface Post {
  node: {
    title: string;
    slug: string;
    date: string;
    venue: string;
  };
}

interface Props {
  data: {
    main?: {
      edges: Post[];
    };
    support?: {
      edges: Post[];
    };
  };
}

export default function LiveIndex(props: Props) {
  const mainLives = (props.data.main || { edges: [] }).edges;
  const supportLives = (props.data.support || { edges: [] }).edges;
  const now = new Date();
  now.setHours(0, 0, 0, 0);

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

              {mainLives.map(({ node }) => {
                 const { title, slug, venue } = node;
                 const date = new Date(node.date);
                 if (date < now) { return null; }

                 return <DetailedLink to={`/live/${slug}`}
                                      date={date}
                                      title={title}
                                      place={venue}
                                      key={slug} />;
              })}
            </Cell>
            <Cell colPC={6} colSP={12}>
              <h3>サポートライブ</h3>

              {supportLives.map(({ node }) => {
                 const { title, slug, venue } = node;
                 const date = new Date(node.date);
                 if (date < now) { return null; }

                 return <DetailedLink to={`/live/${slug}`}
                                      date={date}
                                      title={title}
                                      place={venue}
                                      key={slug} />;
              })}
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
