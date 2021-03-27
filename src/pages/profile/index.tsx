import React from 'react';

import { PageMeta } from 'components/utils/page-meta';
import { Text } from 'components/atoms/text';
import { PageHeading } from 'components/atoms/page-heading';
import { SectionHeading } from 'components/atoms/section-heading';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  return (
    <General>
      <PageMeta title="PROFILE" />

      <PageHeading>PROFILE</PageHeading>

      <Section>
        <SectionHeading>れーみ</SectionHeading>
        <Text>Singer song write - Keyboardist - Composer</Text>
        <Text>
          3ピースバンドThree for Flavin
          にてピアノボーカルを担当し自身の曲を中心に活動する傍ら、日本各地様々なアーティストのサポートを含め、
          年間150本以上のLive・Sessionをこなす。
        </Text>
        <Text>3歳からピアノをはじめ、絶対音感がある。</Text>
        <Text>歌に優しく寄り添い、時に力強く、儚い演奏が魅力。</Text>
      </Section>
    </General>
  );
};

export default Page;
