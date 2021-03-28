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
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OgpImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="れーみ Official Website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={OgpImage} />
      {children}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
