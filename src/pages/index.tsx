import React from 'react';
import Helmet from 'react-helmet';

import General from 'components/templates/general';
import MainVisual from 'components/molecules/main-visual';
import Section, { SectionColumn } from 'components/molecules/section';
import DetailedLink from 'components/molecules/detailed-link';

export default function Index() {
  return (
    <General>
      <Helmet>
        <body className="p-home" />
        <title>れーみ official website</title>
        <script async defer src="https://platform.twitter.com/widgets.js"></script>
      </Helmet>

      <MainVisual />

      <Section>
        <SectionColumn title="live schedule">
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavinaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaag "
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <DetailedLink to="/kiji"
                        date="2018.10.13"
                        day="sat"
                        title="Three for Flavin"
                        place="銀座 Miiya Cafe" />
          <footer>サポートでの出演もあります。<br />全ての出演予定は live ページをご覧ください！</footer>
        </SectionColumn>
        <SectionColumn title="twitter">
          <a className="twitter-timeline"
             href="https://twitter.com/remiriya27"
             data-widget-id="607049707467120641"
             data-link-color="#d55"
             data-chrome="noheader nofooter noborders transparent"
             data-border-color="#ffc6d1"
             data-tweet-limit="3"
             data-dnt="true">Tweets from @remiriya27</a>
        </SectionColumn>
      </Section>

      <Section>
        <SectionColumn title="news">
          <DetailedLink to="/newss"
                        date="2015.06.20"
                        day="sat"
                        title="サイトを開設しました！" />
        </SectionColumn>
      </Section>
    </General>
  );
}
