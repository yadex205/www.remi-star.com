import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { getDayString } from 'assets/js/utils';

import Layout from 'layout';

export const pageQuery = graphql`
query($id: String!) {
  post: contentfulLive(id: { eq: $id }) {
    title
    date
    venue
    article { childMarkdownRemark { html } }
  }
}
`;

interface Props {
  data: {
    post: {
      title: string;
      date: string;
      venue?: string;
      article?: { childMarkdownRemark: { html: string; } };
    };
  };
}

export default function LiveEntry({ data: { post } }: Props) {
  const { title, venue } = post;
  const html = post.article ? post.article.childMarkdownRemark.html : '';
  const date = new Date(post.date);
  const dateStr = [date.getFullYear(),
                   (date.getMonth() + 1).toString().padStart(2, '0'),
                   date.getDate().toString().padStart(2, '0')].join('.');

  return (
    <Layout>
      <Helmet>
        <title>{title} | live | れーみ official website</title>
      </Helmet>

      <article className="t-live-entry">
        <h2>live <small>{dateStr} {getDayString(date)}</small></h2>

        <h3>{title}</h3>

        <p>place: {venue || '(未定)'}</p>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
