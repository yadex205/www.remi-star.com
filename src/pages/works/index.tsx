import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import Grid, { GridCell as Cell } from 'components/utils/grid';

export const pageQuery = graphql`
  query {
    posts: allContentfulWork(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          image { file { url } }
          detail { childMarkdownRemark { html } }
        }
      }
    }
  }
`;

interface Props {
  data: {
    posts: {
      edges: {
        node: {
          id: string;
          title: string;
          image?: { file: { url: string } };
          detail?: { childMarkdownRemark: { html: string; } };
        };
      }[];
    };
  };
}

export default function WorksIndex({ data: { posts } }: Props) {
  return (
    <Layout>
      <Helmet>
        <title>works | れーみ official website</title>
      </Helmet>

      <article className="t-works-index">
        <h2>works</h2>

        <section>
          <Grid gutterPC={{ h: 60, v: 80 }} gutterSP={{ v: 60 }}>
            {posts.edges.map(({ node }, index) => {
               const { id, title } = node;
               const image = node.image ? node.image.file.url : null;
               const detail = node.detail ? node.detail.childMarkdownRemark.html : null;

               return (
                 <Cell colPC={6} colSP={12} key={id}>
                   <div className="m-work-detail">
                     <figure className="m-work-detail__image-container">
                       <img className="m-work-detail__image" alt={title} src={image} />
                     </figure>
                     <div className="m-work-detail__text">
                       <div className="m-work-detail__title">{title}</div>
                       <div className="m-work-detail__description"
                            dangerouslySetInnerHTML={{ __html: detail }}/>
                     </div>
                   </div>
                 </Cell>
               );
            })}
          </Grid>
        </section>
      </article>
    </Layout>
  );
}
