// components/PageHead/index.jsx

import Head from 'next/head';

export const PageHead = () => {
  return (
    <Head prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <title>N-CREATE</title>
      <meta name='description' content='N-CREATE 私のポートフォリオサイト' />
      <meta property='og:title' content='HOME | 私のポートフォリオサイト' />
      <meta property='og:description' content='N-CREATE 私のポートフォリオサイト' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://example.com' />
      <meta property='og:image' content='https://example.com/ogp.png' />
      <meta property='og:site_name' content='N-CREATE' />

      {/* Facebook */}
      <meta property='fb:app_id' content='Facebookのapp_idを入力' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
    </Head>
  );
};
