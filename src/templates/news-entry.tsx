import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';

export const pageQuery = graphql`
query($mdFilepath: String!) {
  markdownRemark(fileAbsolutePath: { eq: $mdFilepath }) {
    html
    frontmatter {
      date(formatString: "YYYY.MM.DD ddd")
      category
      title
      slug
    }
  }
}
`;

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        category: string;
        title: string;
        slug: string;
      };
      html: string;
    }
  };
}

export default function NewsEntry({ data: { markdownRemark: { html, frontmatter } } }: Props) {
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | news | れーみ official website</title>
      </Helmet>

      <article className="t-news-entry">
        <h2>news <small>{frontmatter.date.toLowerCase()}</small></h2>

        <h3>{frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
