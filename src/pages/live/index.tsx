import React from 'react';
import Helmet from 'react-helmet';

import General, { GeneralTitle } from 'components/templates/general';
import Section, { SectionColumn } from 'components/molecules/section';
import DetailedLink from 'components/molecules/detailed-link';

export default function LiveIndex() {
  return (
    <General>
      <Helmet>
        <title>live | れーみ official website</title>
      </Helmet>
      <GeneralTitle title="live" />
      <Section>
        <SectionColumn title="れーみ ライブ (ソロ・バンド)">
          <DetailedLink to="/aiueo"
                        date="2018.04.23"
                        day="sun"
                        title="サイト開設" />
          <DetailedLink to="/aiueo"
                        date="2018.04.23"
                        day="sun"
                        title="サイト開設" />
        </SectionColumn>
        <SectionColumn title="サポートライブ">

        </SectionColumn>
      </Section>

      <Section>
        <SectionColumn>
          {/* 過去のライブ履歴はこちら */}
        </SectionColumn>
      </Section>
    </General>
  );
}
