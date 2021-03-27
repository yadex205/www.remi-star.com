import React from 'react';
import { Helmet } from 'react-helmet';

import OgpImage from 'images/ogp.png';

export interface PageMetaProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export const PageMeta: React.FC<PageMetaProps> = ({
  children,
  title: pageTitle = '',
  description = 'シンガーソングライター、キーボーディスト、コンポーザーとして活動するれーみのオフィシャルサイト。',
}) => {
  const title = `${pageTitle}${pageTitle && '｜'}れーみ Official Website`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OgpImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="れーみ Official Website" />
      {children}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
