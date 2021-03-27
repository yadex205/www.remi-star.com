import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { PageMeta } from 'components/utils/page-meta';
import { LiveEntryHeading } from 'components/atoms/live-entry-heading';
import { PageHeading } from 'components/atoms/page-heading';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

interface PageData {
  contentfulLive: {
    title: string;
    venue?: string;
    article?: {
      childMarkdownRemark: { html: string };
    };
    fields: {
      liveDateReadableString: string;
    };
  };
}

interface PageContext {
  slug: string;
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulLive(slug: { eq: $slug }) {
      title
      venue
      article {
        childMarkdownRemark {
          html
        }
      }
      fields {
        liveDateReadableString
      }
    }
  }
`;

const Template: React.FC<PageProps<PageData, PageContext>> = ({ data }) => (
  <General>
    <PageMeta
      title={`${data.contentfulLive.title}｜LIVE`}
      description={`${data.contentfulLive.title} / ${data.contentfulLive.fields.liveDateReadableString} / at ${data.contentfulLive.venue}`}
    />

    <PageHeading>LIVE</PageHeading>

    <Section>
      <LiveEntryHeading venue={data.contentfulLive.venue} date={data.contentfulLive.fields.liveDateReadableString}>
        {data.contentfulLive.title}
      </LiveEntryHeading>

      <Section dangerouslySetInnerHTML={{ __html: data.contentfulLive.article?.childMarkdownRemark?.html || '' }} />
    </Section>
  </General>
);

export default Template;
