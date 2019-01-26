import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { makePermalink } from 'assets/js/utils';

import Layout from 'layout';
import DetailedLink from 'components/molecules/detailed-link';

export const pageQuery = graphql`
query {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { frontmatter: { category: { eq: "news" } } }
  ) {
    edges {
      node {
        frontmatter {
          date
          title
          slug
        }
      }
    }
  }
}
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            date: string;
            title: string;
            slug: string;
          }
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
          {props.data.allMarkdownRemark.edges.map(({ node }) => {
             const { title, slug } = node.frontmatter;
             const date = new Date(node.frontmatter.date);
             return (
               <DetailedLink large={true}
                             to={makePermalink({ category: 'news', date, slug })}
                             date={date}
                             title={title} />
             );
          })}
        </section>
      </article>
    </Layout>
  );
}
