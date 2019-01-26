import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

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
          date(formatString: "YYYY.MM.DD")
          dateForPath: date(formatString: "YYYY/MM/DD")
          day: date(formatString: "ddd")
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
            dateForPath: string;
            day: string;
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
             const { date, dateForPath, day, title, slug } = node.frontmatter;
             return (
               <DetailedLink large={true}
                             to={`/news/${dateForPath}/${slug}`}
                             date={date}
                             day={day.toLowerCase()}
                             title={title} />
             );
          })}
        </section>
      </article>
    </Layout>
  );
}
