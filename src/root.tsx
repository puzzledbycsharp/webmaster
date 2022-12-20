import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikPartytown } from './components/partytown/partytown';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        {/* <script  src="/assets/fb.js"></script> */}

        {/* <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-RRXD2EJNWD"></script> */}
        <script key="google-analytics" type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-RRXD2EJNWD" />
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-RRXD2EJNWD');`
      }}
    />
        <QwikPartytown 
        // debug={true}
          forward={['dataLayer.push', 'gtag']} 
        // logCalls={true} 
        // logGetters={true}
        // logSetters={true}
        // logImageRequests={ true}
        //  logMainAccess={ true}
        //  logSendBeaconRequests={ true}
        // logStackTraces={true}
        //  logScriptExecution={ true}

        //  resolveUrl ={ function (url, location, type) {
        //   if (type === 'script') {
        //     if (
        //       url.hostname.includes('connect.facebook.net') 
        //     ) {
        //     const proxyUrl = new URL('https://main--benevolent-kitsune-f87868.netlify.app/api/');
        //     proxyUrl.searchParams.append('url', url.href);
        //     return proxyUrl;
        //     }
        //   }
        //   return url;
        // }}

        />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
