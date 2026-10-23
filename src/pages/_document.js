import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='icon'
          href='/assets/images/favicon.svg'
          type='image/svg+xml'
        />
        <meta name='theme-color' content='#06080b' />
        {/* Project screenshots are served from Cloudinary - open the connection early. */}
        <link rel='preconnect' href='https://res.cloudinary.com' />
        <link rel='dns-prefetch' href='https://res.cloudinary.com' />
        <noscript>
          <style>
            {'[data-reveal]{opacity:1!important;transform:none!important}'}
          </style>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
