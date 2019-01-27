import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';

export default function PolicyIndex() {
  return (
    <Layout>
      <Helmet>
        <title>site policy | れーみ official website</title>
      </Helmet>

      <article className="t-profile-index">
        <h2>site policy</h2>
        <section>
          <h3>本サイトへのリンクについて</h3>
          <p>本サイトへのリンクは、営利・非営利問わず原則自由です。リンク先は https://www.remi-star.com を推奨しております。</p>
          <p>ただし、以下のいずれかに該当、及びその恐れがあるウェブサイトからのリンクは禁止させていただきます。</p>
          <ol>
            <li>誹謗中傷・信用失墜を意図する内容を含んだウェブサイト</li>
            <li>著作権やプライバシー、肖像権など、権利を侵害する行為を行っているウェブサイト</li>
            <li>上記項目以外にも、法律、条令、規則や、公序良俗に違反する行為を行っているウェブサイト</li>
          </ol>
          <p>また、リンク先をページではなく画像などのリソースに設定する、いわゆる「直リンク」はご遠慮ください。</p>
          <p>ご協力よろしくお願いいたします。</p>

          <h3>アクセスデータについて</h3>
          <p>
            本サイトでは、ご覧になられている方のご利用(アクセス)状況を集計するためのスクリプト(Google Analytics)を埋め込んでいるページがあります。集計したアクセスデータは、本サイトの向上にのみ利用させていただきます。
          </p>
        </section>
      </article>
    </Layout>
  );
}
