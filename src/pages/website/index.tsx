import React from 'react';

import { Text } from 'components/atoms/text';
import { PageHeading } from 'components/atoms/page-heading';
import { SectionHeading } from 'components/atoms/section-heading';
import { TextList, TextListItem } from 'components/molecules/text-list';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  return (
    <General>
      <PageHeading>ABOUT WEBSITE</PageHeading>

      <Section>
        <SectionHeading>本サイトへのリンクについて</SectionHeading>
        <Text>本サイトへのリンクは、営利・非営利問わず原則自由とし、事前のご連絡は不要です。</Text>
        <Text>
          ただし、下記のいずれかに該当、もしくは該当の恐れがあると判断されるウェブサイトからのリンクを禁止します。
        </Text>
        <TextList>
          <TextListItem>誹謗中傷・信用失墜を意図する内容を含んだウェブサイト</TextListItem>
          <TextListItem>著作権やプライバシー、肖像権など、権利を侵害する行為を行っているウェブサイト</TextListItem>
          <TextListItem>法律、条令、規則や、公序良俗に違反する行為を行っているウェブサイト</TextListItem>
          <TextListItem>その他、本サイトへのリンクが適切ではないと判断されるウェブサイト</TextListItem>
        </TextList>
      </Section>

      <Section>
        <SectionHeading>アクセス情報の収集について</SectionHeading>
        <Text>
          本サイトでは、ご覧になられている方のご利用状況（アクセス状況）を収集するため Google Analytics
          を利用しております。
          ご利用状況は個人を特定できない状態で取り扱っており、また、本サイトの改善にのみ利用させていただきます。
        </Text>
      </Section>
    </General>
  );
};

export default Page;
