// components/PageHead/index.jsx

import Head from 'next/head';

export const PageHead = () => {
  return (
    <Head prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <title>HOME | 私のポートフォリオサイト</title>
      <meta
        name='description'
        content='IT業界に転職するためプログラミングを全力で楽しく学習しています。'
      />
      <meta property='og:title' content='HOME | 私のポートフォリオサイト' />
      <meta
        property='og:description'
        content='IT業界に転職するためプログラミングを全力で楽しく学習しています。'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://example.com' />
      <meta property='og:image' content='https://example.com/ogp.png' />
      <meta property='og:site_name' content='私のポートフォリオサイト' />

      {/* Facebook */}
      <meta property='fb:app_id' content='Facebookのapp_idを入力' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
    </Head>
  );
};
