import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { getDayString } from 'assets/js/utils';

import Layout from 'layout';

export const pageQuery = graphql`
query($id: String!) {
  post: contentfulNews(id: { eq: $id }) {
    title
    slug
    date
    article { childMarkdownRemark { html } }
  }
}
`;

interface Props {
  data: {
    post: {
      title: string;
      date: string;
      article: {
        childMarkdownRemark: {
          html: string;
        }
      }
    };
  };
}

export default function NewsEntry({ data: { post } }: Props) {
  const { title, article: { childMarkdownRemark: { html } } } = post;
  const date = new Date(post.date);
  const dateStr = [date.getFullYear(),
                   (date.getMonth() + 1).toString().padStart(2, '0'),
                   date.getDate().toString().padStart(2, '0')].join('.');

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | news | れーみ official website</title>
      </Helmet>

      <article className="t-news-entry">
        <h2>news <small>{dateStr} {getDayString(date)}</small></h2>

        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}
