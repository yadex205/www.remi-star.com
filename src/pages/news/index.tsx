import React from 'react';
import Helmet from 'react-helmet';

import General, { GeneralTitle } from 'components/templates/general';
import Section, { SectionColumn } from 'components/molecules/section';
import DetailedLink from 'components/molecules/detailed-link';

export default function NewsIndex() {
  return (
    <General>
      <GeneralTitle title="news" />
      <Section>
        <SectionColumn>
          <DetailedLink to=""
                        date=""
                        day=""
                        title="サイト開設" />
        </SectionColumn>
      </Section>
    </General>
  );
}
