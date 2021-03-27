import React, { useMemo } from 'react';

import { PageMeta } from 'components/utils/page-meta';
import { useFutureLives } from 'components/utils/use-future-lives';
import { Icon } from 'components/atoms/icon';
import { LiveSummaryLink } from 'components/atoms/live-summary-link';
import { TopSectionHeading } from 'components/atoms/top-section-heading';
import { TwitterEmbed } from 'components/atoms/twitter-embed';
import { NavList, NavListItem } from 'components/molecules/nav-list';
import { TopKanbanNavList, TopKanbanNavListItem } from 'components/molecules/top-kanban-nav-list';
import { TopMainVisual } from 'components/molecules/top-main-visual';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  const futureLives = useFutureLives();
  const mainFutureLives = useMemo(() => {
    return futureLives
      .filter(live => live.form !== 'support')
      .slice(0, 3)
      .reverse();
  }, [futureLives]);

  return (
    <General>
      <PageMeta />

      <TopMainVisual />

      <Section>
        <TopSectionHeading>LIVE</TopSectionHeading>
        {mainFutureLives.map(live => (
          <LiveSummaryLink
            key={live.slug}
            to={`/live/${live.slug}`}
            date={live.fields.liveDateReadableString}
            venue={`at ${live.venue}`}
          >
            {live.title}
          </LiveSummaryLink>
        ))}
        <NavList>
          <NavListItem.Router to="/live" iconComponent={<Icon name="caret-right" />}>
            全てのライブ・サポートライブ
          </NavListItem.Router>
        </NavList>
      </Section>

      <Section>
        <TopSectionHeading>CONTENTS</TopSectionHeading>
        <TopKanbanNavList>
          <TopKanbanNavListItem.Native
            href="https://community.camp-fire.jp/projects/view/364547"
            target="_blank"
            rel="noopener noreferrer"
            iconComponent={<Icon name="external-link" />}
          >
            FAN COMMUNITY
          </TopKanbanNavListItem.Native>
          <TopKanbanNavListItem.Native
            href="https://tffshop.official.ec/"
            target="_blank"
            rel="noopener noreferrer"
            iconComponent={<Icon name="external-link" />}
          >
            ONLINE SHOP
          </TopKanbanNavListItem.Native>
          <TopKanbanNavListItem.Router to="/profile" iconComponent={<Icon name="caret-right" />}>
            PROFILE
          </TopKanbanNavListItem.Router>
        </TopKanbanNavList>
        <NavList>
          <NavListItem.Router to="/contact" iconComponent={<Icon name="caret-right" />}>
            問い合わせ
          </NavListItem.Router>
        </NavList>
      </Section>

      <Section>
        <TopSectionHeading>TWITTER</TopSectionHeading>
        <TwitterEmbed screenName="remiriya27" />
      </Section>
    </General>
  );
};

export default Page;
