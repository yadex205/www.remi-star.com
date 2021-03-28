import React, { useMemo, useState } from 'react';

import { PageMeta } from 'components/utils/page-meta';
import { usePastLives } from 'components/utils/use-past-lives';
import { LiveSummaryLink } from 'components/atoms/live-summary-link';
import { PageHeading } from 'components/atoms/page-heading';
import { Pagination } from 'components/molecules/pagination';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  const [page, setPage] = useState(1);
  const lives = usePastLives();

  const visibleLives = useMemo(() => {
    return lives.slice(20 * (page - 1), 20 * page);
  }, [page, lives]);

  return (
    <General>
      <PageMeta title="LIVE" />

      <PageHeading>LIVE HISTORY</PageHeading>

      <Section>
        {visibleLives.map(live => (
          <LiveSummaryLink
            key={live.slug}
            to={`/live/${live.slug}`}
            date={live.fields.liveDateReadableString}
            venue={`at ${live.venue}`}
          >
            {live.title}
          </LiveSummaryLink>
        ))}
        <Pagination current={page} length={Math.ceil(lives.length / 20)} onPageRequested={page => setPage(page)} />
      </Section>
    </General>
  );
};

export default Page;
