import React from 'react';

import { Icon } from 'components/atoms/icon';
import { LiveSummaryLink } from 'components/atoms/live-summary-link';
import { TopSectionHeading } from 'components/atoms/top-section-heading';
import { General } from 'components/templates/general';

const Page: React.FC = () => (
  <General>
    <TopSectionHeading>LIVE</TopSectionHeading>
    <LiveSummaryLink to="/live/1" date="2021.03.20 Sat" venue="at 東新宿 真昼の月夜の太陽">
      Three for Flavin 2man live
    </LiveSummaryLink>
    <LiveSummaryLink to="/live/2" date="2021.03.21 Sun" venue="at 東新宿 真昼の月夜の太陽">
      れみ×ぱな ぷれぜんつ しふくのじかん みに
    </LiveSummaryLink>
    <LiveSummaryLink to="/live/3" date="2021.03.22 Mon" venue="at 東新宿 真昼の月夜の太陽">
      れみ×ぱな ぷれぜんつ しふくのじかん みに 長いライブ名は省略されます
    </LiveSummaryLink>
    <TopSectionHeading>CONTENTS</TopSectionHeading>
    test
    <Icon name="caret-right" />
    <TopSectionHeading>TWITTER</TopSectionHeading>
  </General>
);

export default Page;
