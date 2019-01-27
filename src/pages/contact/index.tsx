import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';

export default function ContactIndex() {
  return (
    <Layout>
      <Helmet>
        <title>contact | れーみ official website</title>
      </Helmet>

      <article className="t-profile-index">
        <h2>contact</h2>
        <section>
          <p>
            メッセージやお仕事(作曲・編曲)依頼、サイトへのご意見をお待ちしております。
            また、ライブの予約もこちらで受け付けておりますので、どうぞご利用ください。
          </p>
          <p>内容によってはご返答致しかねる場合もございます。あらかじめご了承ください。</p>
          <p>remiriyaaa [at] yahoo.co.jp</p>
        </section>
      </article>
    </Layout>
  );
}
