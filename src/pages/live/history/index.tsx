import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import Grid, { GridCell as Cell } from 'components/utils/grid';
import DetailedLink from 'components/molecules/detailed-link';

export const pageQuery = graphql`
  query {
    posts: allContentfulLive(sort: { order: DESC, fields: [date] }) {
      edges {
        node { title, slug, date, venue }
      }
    }
  }
`;

interface Props {
  data: {
    posts: {
      edges: {
        node: {
          title: string;
          slug: string;
          date: string;
          venue?: string;
        }
      }[];
    };
  };
}

export default function LiveHistroy(props: Props) {
  return (
    <Layout>
      <Helmet>
        <title>history | live | れーみ official website</title>
      </Helmet>

      <article className="t-live-history">
        <h2>live history</h2>

        <Grid gutterPC={{ h: 20, v: 0 }} gutterTablet={{ h: 20, v: 0 }} gutterSP={{ v: 0 }}>
          {props.data.posts.edges.map(({ node }) => {
             const { title, slug, date } = node;
             const venue = node.venue || '(未定)';

            return (
              <Cell colPC={4} colTablet={6} colSP={12}>
                <DetailedLink to={`/live/${slug}`}
                              date={date}
                              title={title}
                              place={venue}
                              key={slug} />
              </Cell>
            );
          })}
        </Grid>
      </article>
    </Layout>
  );
}
