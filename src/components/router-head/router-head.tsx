import { component$ } from '@builder.io/qwik';
import { RouteLocation, useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { MyRouteData, ROUTE_DATA } from '../global/global';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  
  
  //console.log("loc:"+loc.href);
  
const myClonedArray  = Object.assign([], ROUTE_DATA);

  const routeData = filterMetaData(myClonedArray, loc);
   //console.log(routeData);
if(routeData){
  return (
    <>

    {/* {loc.href === 'https://puzzledbycsharp.com/' || loc.href === 'http://127.0.0.1:5173/' ? <link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"></link> : null}

{loc.href === 'https://puzzledbycsharp.com/' || loc.href === 'http://127.0.0.1:5173/' ? <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"></link></noscript> : null}

{loc.href === 'https://puzzledbycsharp.com/' || loc.href === 'http://127.0.0.1:5173/' ? <script  
          type="text/javasript"
 src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"

 > </script> : null}

{loc.href === 'https://puzzledbycsharp.com/' || loc.href === 'http://127.0.0.1:5173/' ? <script  
  type="text/javasript"
 dangerouslySetInnerHTML={'var swiper = new Swiper(".swiper", {     preloadImages: false,  lazy: true, breakpoints: {  320: {  direction: \'horizontal\',  slidesPerView: "1.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },  },  480: {  direction: \'horizontal\',  slidesPerView: "2.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },     },  640: {  direction: \'horizontal\',  slidesPerView: "3.1",  navigation: {  nextEl: \'.swiper-button-next\',  prevEl: \'.swiper-button-prev\',  },    },    768: {      direction: \'horizontal\',      slidesPerView: "4.1",      navigation: {        nextEl: \'.swiper-button-next\',        prevEl: \'.swiper-button-prev\',      },              },       1024: {      direction: \'horizontal\',      slidesPerView: "5.1",      navigation: {        nextEl: \'.swiper-button-next\',        prevEl: \'.swiper-button-prev\',      },            }  }      });'} 
          
          > 
    </script> : null} */}

      {/* <title>{head.title}</title> */}
      <title>{routeData?.title}</title>
      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/ico" href="/favicon.ico" />

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap"
        rel="stylesheet"
      /> */}

{/* <style> @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); </style> */}

{/* <meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*;  child-src 'none';" /> */}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}
<meta name="description"  content={routeData.description}></meta>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:description" content={routeData.description}/>
    <meta name="twitter:creator" content="@puzzledbycsharp"/>
      <meta name="twitter:title" content={routeData.title}/>
      <meta name="twitter:image" content={routeData.twitterImage}/>
      <meta name="msvalidate.01" content="065C1A05829A556A5E9CBA4F90CFD57B" />
          <meta property="og:type" content="blog"/>
            <meta property="og:title" content={routeData.title}/>
            <meta property="og:description" content={routeData.description}/>
              <meta property="og:site_name" content="Puzzled By CSharp"/>
                <meta property="og:image" content={routeData.image}/>
                  <meta property="og:url" content={routeData.url}/>
                    <meta property="article:published_time" content={routeData.dateCreated}/>
                      <meta property="article:author" content="PuzzledByCSharp"/>
                      <script type="application/ld+json">{structuredDataSingle(routeData)}</script>

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
}
else{


  return (
    <>

    
      <title>{head.title}</title>
      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/ico" href="/favicon.ico" />

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap"
        rel="stylesheet"
      /> */}



      {head.meta.map((m) => (
        <meta {...m} />
      ))}
<meta name="msvalidate.01" content="065C1A05829A556A5E9CBA4F90CFD57B" />
      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );

}

});


export function filterMetaData(routeDatas:  MyRouteData [], loc:RouteLocation) {
 //  console.log("in filterMetaData");
  for (const routeData of routeDatas) {
   // console.log("routedata.location:"+routeData.location);
 // console.log("loc.href:"+loc.href);

if(routeData.location != '' && loc.href.includes( routeData.location))
{
  return routeData;
}
else if(routeData.location === '' && loc.href.includes( routeData.location) && (loc.href === 'https://puzzledbycsharp.com/' || loc.href === 'http://127.0.0.1:5173/') ){
return routeData;
}

  
}
return null;
}

export function structuredDataSingle(routeData: MyRouteData){
if(routeData)
{
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": routeData.title,
    "image": routeData.image,
    "url": routeData.url,
    "inLanguage": "en-US",
    "isFamilyFriendly": "true",
    "dateCreated": routeData.dateCreated,
    "datePublished": routeData.dateCreated,
    "dateModified": routeData.dateModified,
    "author": {
      "@type": "Person",
      "name": "PuzzledByCSharp",
      "url": "https://puzzledbycsharp.com"
    }
  };

  return JSON.stringify(data);
}
else  {
  return '';
}
}
