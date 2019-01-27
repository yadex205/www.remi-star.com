import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import DetailedLink from 'components/molecules/detailed-link';

export const pageQuery = graphql`
query {
  posts: allContentfulNews(
    sort: { order: DESC, fields: [date] }
  ) {
    edges {
      node { title, slug, date }
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
        };
      }[]
    }
  };
}

export default function NewsIndex(props: Props) {
  return (
    <Layout>
      <Helmet>
        <title>news | れーみ official website</title>
      </Helmet>

      <article className="t-news-index">
        <h2>news</h2>

        <section>
          {props.data.posts.edges.map(({ node }) => {
             const { title, date, slug } = node;
             return (
               <DetailedLink large={true}
                             to={`/news/${slug}`}
                             date={date}
                             title={title}
                             key={slug} />
             );
          })}
        </section>
      </article>
    </Layout>
  );
}
