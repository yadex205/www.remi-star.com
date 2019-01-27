import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';

export default function ProfileIndex() {
  return (
    <Layout>
      <Helmet>
        <title>profile | れーみ official website</title>
      </Helmet>

      <article className="t-profile-index">
        <h2>profile</h2>
        <section>
          <h3>れーみ</h3>
          <p>Singer song writer / Keyboardist</p>
          <dl>
            <dt>birth</dt><dd>1993.11.27</dd>
            <dt>part</dt><dd>ピアノ・キーボード・シンセサイザー</dd>
            <dt>blood</dt><dd>A型</dd>
          </dl>
          <p>
            キーボードやコーラスでのライブサポートやレコーディングなど、
            様々な場所で活躍させていただいております。
            作曲や編曲の依頼も受け付けています。
            ジャンルを問わずいつでもお気軽にお誘いください！
          </p>

          <h3>history</h3>
          <p>3歳からピアノを始め、15年ほどクラシックを勉強する。7歳から作曲を始め、音楽理論を学ぶ。</p>
          <p>中学高校時代にコーラス部で発声を学び、全国大会へ出場し3位を獲得。その際にテレビ出演もあり。</p>
          <p>部活動の影響で歌に魅力を感じるようになり、15歳から作詞作曲を行い、シンガーソングライターとして活動開始。</p>
          <p>17歳からライブサポートやレコーディングでの活動を開始。</p>
        </section>
      </article>
    </Layout>
  );
}
