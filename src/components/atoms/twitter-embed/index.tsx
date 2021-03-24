import React from 'react';
import { Helmet } from 'react-helmet';

export interface TwitterEmbedProps {
  screenName: string;
}

export const TwitterEmbed: React.FC<TwitterEmbedProps> = ({ screenName }) => (
  <aside className="a-twitter-embed">
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </Helmet>
    <div className="a-twitter-embed__wrapper">
      <a
        className="twitter-timeline"
        data-dnt="true"
        data-lang="ja"
        data-chrome="noheader nofooter noborders noscrollbar transparent"
        data-tweet-limit="3"
        href={`https://twitter.com/${screenName}?ref_src=twsrc%5Etfw`}
        target="_blank"
        rel="noopener referrer"
      >
        Tweets by {screenName}
      </a>
    </div>
  </aside>
);
