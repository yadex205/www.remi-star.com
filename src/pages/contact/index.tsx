import React from 'react';

import { PageMeta } from 'components/utils/page-meta';
import { Text } from 'components/atoms/text';
import { PageHeading } from 'components/atoms/page-heading';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  return (
    <General>
      <PageMeta title="CONTACT" />

      <PageHeading>CONTACT</PageHeading>

      <Section>
        <Text>
          メッセージやお仕事（作曲・編曲）依頼、サイトへのご意見をお待ちしております。
          また、ライブの予約もこちらで受け付けておりますので、どうぞご利用ください。
        </Text>
        <Text>内容によっては返答致しかねる場合もございます。予めご了承ください。</Text>
        <Text>remiriyaaa [at] yahoo.co.jp</Text>
      </Section>
    </General>
  );
};

export default Page;
