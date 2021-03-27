import React, { useMemo } from 'react';

import { useFutureLives } from 'components/utils/use-future-lives';
import { LiveSummaryLink } from 'components/atoms/live-summary-link';
import { Icon } from 'components/atoms/icon';
import { PageHeading } from 'components/atoms/page-heading';
import { SectionHeading } from 'components/atoms/section-heading';
import { NavList, NavListItem } from 'components/molecules/nav-list';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  const futureLives = useFutureLives();
  const mainLives = useMemo(() => {
    return futureLives.filter(live => live.form !== 'support').reverse();
  }, [futureLives]);
  const supportLives = useMemo(() => {
    return futureLives.filter(live => live.form === 'support').reverse();
  }, [futureLives]);

  return (
    <General>
      <PageHeading>LIVE</PageHeading>

      <Section>
        <SectionHeading>れーみ Main Live</SectionHeading>
        {mainLives.map(live => (
          <LiveSummaryLink
            key={live.slug}
            to={`/live/${live.slug}`}
            date={live.fields.liveDateReadableString}
            venue={`at ${live.venue}`}
          >
            {live.title}
          </LiveSummaryLink>
        ))}
      </Section>

      <Section>
        <SectionHeading>サポートライブ</SectionHeading>
        {supportLives.map(live => (
          <LiveSummaryLink
            key={live.slug}
            to={`/live/${live.slug}`}
            date={live.fields.liveDateReadableString}
            venue={`at ${live.venue}`}
          >
            {live.title}
          </LiveSummaryLink>
        ))}
      </Section>

      <Section>
        <SectionHeading>過去のライブ</SectionHeading>
        <NavList>
          <NavListItem.Router to="/live/history" iconComponent={<Icon name="caret-right" />}>
            過去のれーみMainライブ一覧
          </NavListItem.Router>
          <NavListItem.Router to="/live/history/support" iconComponent={<Icon name="caret-right" />}>
            過去のサポートライブ一覧
          </NavListItem.Router>
        </NavList>
      </Section>
    </General>
  );
};

export default Page;
