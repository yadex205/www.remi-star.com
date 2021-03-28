import React from 'react';

import { PageMeta } from 'components/utils/page-meta';
import { Icon } from 'components/atoms/icon';
import { Text } from 'components/atoms/text';
import { PageHeading } from 'components/atoms/page-heading';
import { NavList, NavListItem } from 'components/molecules/nav-list';
import { Section } from 'components/organisms/section';
import { General } from 'components/templates/general';

const Page: React.FC = () => {
  return (
    <General>
      <PageMeta title="お探しのページが見つかりませんでした。">
        <meta name="robots" content="noindex, nofollow" />
      </PageMeta>

      <PageHeading>PAGE NOT FOUND</PageHeading>

      <Section>
        <Text>お探しのページは存在しないか、削除された可能性があります。</Text>

        <NavList>
          <NavListItem.Router to="/" iconComponent={<Icon name="caret-right" />}>
            トップページ
          </NavListItem.Router>
        </NavList>
      </Section>
    </General>
  );
};

export default Page;
