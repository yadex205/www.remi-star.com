import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { makePermalink } from 'assets/js/utils';

import Layout from 'layout';
import Grid, { GridCell as Cell } from 'components/utils/grid';
import DetailedLink from 'components/molecules/detailed-link';

export const pageQuery = graphql`
query {
  normal: allMarkdownRemark(
    sort: { order: ASC, fields: [frontmatter___date] },
    filter: { frontmatter: { category: { eq: "live" }, live_form: { ne: "support" } } }
  ) {
    edges {
      node {
        frontmatter {
          date
          title
          slug
          liveForm: live_form
          liveVenue: live_venue
        }
      }
    }
  }

  support: allMarkdownRemark(
    sort: { order: ASC, fields: [frontmatter___date] },
    filter: { frontmatter: { category: { eq: "live" }, live_form: { eq: "support" } } }
  ) {
    edges {
      node {
        frontmatter {
          date
          title
          slug
          liveForm: live_form
          liveVenue: live_venue
        }
      }
    }
  }
}
`;

interface Post {
  node: {
    frontmatter: {
      date: string;
      title: string;
      slug: string;
      liveForm: string;
      liveVenue: string;
    }
  };
}

interface Props {
  data: {
    normal?: {
      edges: Post[];
    };
    support?: {
      edges: Post[];
    };
  };
}

export default function LiveIndex(props: Props) {
  const normalLives = (props.data.normal || { edges: [] }).edges;
  const supportLives = (props.data.support || { edges: [] }).edges;
  const now = new Date();

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

              {normalLives.map(({ node }) => {
                 const { title, slug, liveVenue } = node.frontmatter;
                 const date = new Date(node.frontmatter.date);
                 if (date < now) { return null; }

                 return <DetailedLink to={makePermalink({ category: 'live', date, slug })}
                                      date={date}
                                      title={title}
                                      place={liveVenue} />;
              })}
            </Cell>
            <Cell colPC={6} colSP={12}>
              <h3>サポートライブ</h3>

              {supportLives.map(({ node }) => {
                 const { title, slug, liveVenue } = node.frontmatter;
                 const date = new Date(node.frontmatter.date);
                 if (date < now) { return null; }

                 return <DetailedLink to={makePermalink({ category: 'live', date, slug })}
                                      date={date}
                                      title={title}
                                      place={liveVenue} />;
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
