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
//console.log("loc:"+loc.href);
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />

         {/* <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-RRXD2EJNWD"></script>


        <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-RRXD2EJNWD" />

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={'window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag(\'js\', new Date());  gtag(\'config\', \'G-RRXD2EJNWD\');'}
        />


        <script
          type="text/partytown"
          dangerouslySetInnerHTML={' (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "e05elgp0s4");'}
        />

<script 
dangerouslySetInnerHTML={'const observer = new MutationObserver(mutations => {mutations.forEach(({ addedNodes }) => {addedNodes.forEach(node => {if (node.nodeType === 1 && node.tagName === \'SCRIPT\') {const src = node.src || \'\'; if (node.src.includes(\'clarity.js\')) { node.type = \'text/partytown\';  node.src = \'./clarity.bundle.js\'; } } });  }); }); observer.observe(document.documentElement, {  childList: true, subtree: true,  });'}
/>    
 

 */}



{/* 
<script type="text/partytown" src="http://www.youtube.com/iframe_api">

</script> */}



        <QwikPartytown
          //debug={true}
         // forward={['dataLayer.push', 'gtag','Swiper']}
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
        //       url.hostname.includes('www.clarity.ms') 
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
        <script type="text/javascript">var subscribersSiteId='b7826009-f433-41f5-ab8d-5ae92ee6e3fb';</script><script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
      </body>
    </QwikCityProvider>
  );
});
