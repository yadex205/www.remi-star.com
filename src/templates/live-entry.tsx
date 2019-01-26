import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';

export const pageQuery = graphql`
query($id: String!) {
  post: markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      date(formatString: "YYYY.MM.DD ddd")
      category
      title
      slug
      live_form
      live_venue
    }
  }
}
`;

interface Props {
  data: {
    post: {
      frontmatter: {
        date: string;
        category: string;
        title: string;
        slug: string;
        live_form: string;
        live_venue: string;
      };
      html: string;
    }
  };
}

export default function LiveEntry({ data: { post: { html, frontmatter } } }: Props) {
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | live | れーみ official website</title>
      </Helmet>

      <article className="t-live-entry">
        <h2>live <small>{frontmatter.date.toLowerCase()}</small></h2>

        <h3>{frontmatter.title}</h3>

        <p>place: {frontmatter.live_venue}</p>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
