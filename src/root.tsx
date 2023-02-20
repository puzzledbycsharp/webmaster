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

         <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-RRXD2EJNWD"></script>


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


<link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"></link>
<noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"></link></noscript>

<script  
          type="text/partytown"
 src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"

 > </script>


<script  
  type="text/partytown"
 dangerouslySetInnerHTML={'var swiper = new Swiper(".swiper", {     preloadImages: false,  lazy: true, breakpoints: {  320: {  direction: \'horizontal\',  slidesPerView: "1.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },  },  480: {  direction: \'horizontal\',  slidesPerView: "2.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },     },  640: {  direction: \'horizontal\',  slidesPerView: "3.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },    },    768: {      direction: \'horizontal\',      slidesPerView: "4.1",      navigation: {        nextEl: \'.swiper-button-next\',        prevEl: \'.swiper-button-prev\',      },              },       1024: {      direction: \'horizontal\',      slidesPerView: "5.1",      navigation: {        nextEl: \'.swiper-button-next\',        prevEl: \'.swiper-button-prev\',      },            }  }      });'} 
          
          > 
    </script>


{/* <script type="text/partytown" src="http://www.youtube.com/iframe_api">

</script>
 */}


        <QwikPartytown
          //debug={true}
          forward={['dataLayer.push', 'gtag','Swiper']}
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
      </body>
    </QwikCityProvider>
  );
});
