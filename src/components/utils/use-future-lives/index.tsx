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

export function useFutureLives() {
  const data = useStaticQuery<Result>(graphql`
    {
      allContentfulLive(filter: { fields: { isFutureLive: { eq: true } } }, sort: { fields: date, order: DESC }) {
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

  return useMemo(() => {
    const now = new Date();
    return data.allContentfulLive.edges.map(({ node }) => node).filter(node => new Date(node.date) >= now);
  }, [data]);
}
