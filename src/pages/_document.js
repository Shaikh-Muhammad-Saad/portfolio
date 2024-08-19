/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Favicon */}
        <link rel='icon' href='/assets/images/favicon.svg' />
        {/* <link rel='shortcut icon' href='/images/usamairfan-softwarengineer.png' /> */}
        {/* <link rel='shortcut icon' href='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600' /> */}

        {/* Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        {/* Flaticon */}
        <link rel='stylesheet' href='/assets/css/flaticon.min.css' />
        {/* Font Awesome */}
        <link rel='stylesheet' href='/assets/css/fontawesome-5.14.0.min.css' />
        {/* Bootstrap */}
        <link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
        {/* Magnific Popup */}
        <link rel='stylesheet' href='/assets/css/magnific-popup.min.css' />
        {/* Nice Select */}
        <link rel='stylesheet' href='/assets/css/nice-select.min.css' />
        {/* Animate */}
        <link rel='stylesheet' href='/assets/css/animate.min.css' />
        {/* Slick */}
        <link rel='stylesheet' href='/assets/css/slick.min.css' />
        {/* Main Style */}
        <link rel='stylesheet' href='/assets/css/style.css' />
      </Head>


      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
