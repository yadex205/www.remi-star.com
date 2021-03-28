import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface Result {
  allContentfulLive: {
    edges: {
      node: {
        date: string;
        form: string;
        title: string;
        slug: string;
        venue: string;
        fields: {
          liveDateReadableString: string;
        };
      };
    }[];
  };
}

export function usePastLives() {
  const data = useStaticQuery<Result>(graphql`
    {
      allContentfulLive(filter: { fields: { isFutureLive: { eq: false } } }, sort: { fields: date, order: DESC }) {
        edges {
          node {
            date
            form
            title
            slug
            venue
            fields {
              liveDateReadableString
            }
          }
        }
      }
    }
  `);

  return useMemo(() => data.allContentfulLive.edges.map(({ node }) => node), [data]);
}
