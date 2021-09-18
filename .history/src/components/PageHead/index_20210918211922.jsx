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
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
  );
};
