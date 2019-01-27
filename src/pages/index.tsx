import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import MainVisual from 'components/molecules/main-visual';
import DetailedLink from 'components/molecules/detailed-link';

import Grid, { GridCell as Cell } from 'components/utils/grid';

export const pageQuery = graphql`
query {
  news: allContentfulNews(sort: { order: DESC, fields: [date] }) {
    edges {
      node { title, slug, date }
    }
  }

  live: allContentfulLive(sort: { order: ASC, fields: [date] }, filter: { form: { ne: "support" } }) {
    edges {
      node { title, slug, date, venue }
    }
  }
}
`;

interface Props {
  data: {
    news: {
      edges: {
        node: {
          title: string;
          slug: string;
          date: string;
        };
      }[];
    };
    live: {
      edges: {
        node: {
          title: string;
          slug: string;
          date: string;
          venue: string;
        };
      }[];
    };
  };
}

export default function Index(props: Props) {
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
          <Grid gutterPC={{ h: 40, v: 60 }} gutterSP={{ v: 40 }}>
            <Cell colPC={7} colTablet={12} colSP={12}>
              <h3>live schedule</h3>

              {props.data.live.edges.map(({ node }, index) => {
                 const { title, slug, venue } = node;
                 const date = new Date(node.date);
                 return (
                   <DetailedLink to={`/live/${slug}`}
                                 date={date}
                                 title={title}
                                 place={venue}
                                 key={index} />
                 );
              })}

              <p className="a-caption">サポートでの出演もあります。<br />全ての出演予定は live ページをご覧ください！</p>
            </Cell>
            <Cell colPC={5} colTablet={12} colSP={12}>
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
            <Cell colPC={12} colSP={12}>
              <h3>news</h3>

              {props.data.news.edges.map(({ node }, index) => {
                 const { title, slug } = node;
                 const date = new Date(node.date);
                 return (
                   <DetailedLink to={`/news/${slug}`}
                                 date={date}
                                 title={title}
                                 key={index}/>
                 );
              })}
            </Cell>
          </Grid>
        </section>
      </article>
    </Layout>
  );
}
