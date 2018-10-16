import React from 'react';
import Helmet from 'react-helmet';

import General, { GeneralTitle } from 'components/templates/general';
import Section, { SectionColumn } from 'components/molecules/section';
import DetailedLink from 'components/molecules/detailed-link';
import Discography from 'components/molecules/discography';

export default function WorksIndex() {
  return (
    <General>
      <Helmet>
        <title>works | れーみ official website</title>
      </Helmet>
      <GeneralTitle title="works" />
      <Section>
        <SectionColumn>
        </SectionColumn>
      </Section>
    </General>
  );
}
