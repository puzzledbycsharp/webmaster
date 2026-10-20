import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import  LeftContextMenu  from '../leftcontextmenu/leftcontextmenu';

export default component$(() => {


  useVisibleTask$(() => {

    //   const partytown = <div data-partycage data-partytype="iframe" data-partysrc="https://www.youtube.com/embed/2Y7CvSks1KY" style={{ width: '640px', height: '360px' }}></div>;
    //  <QwikPartytown>
  
    //  </QwikPartytown>
    // const div = document.createElement('div'); 
    // div.id = 'ytplayer'
  
    const tag = document.createElement('script'); 
    tag.type = "text/javascript";
    //tag.src = 'var tag = document.createElement(\'script\');  tag.src = "https://puzzledbycsharpcode.com/youtubeapi.js";  var firstScriptTag = document.getElementsByTagName(\'script\')[0];  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  var player;  function onYouTubePlayerAPIReady() {    player = new YT.Player(\'ytplayer\', {      height: \'360\',      width: \'640\',      videoId: \'${props.youtubeId}\'    }); console.log("props.youtubeId"+props.youtubeId);  }';
    tag.innerHTML = 'algoliasearchNetlify({appId: \'CXWBWJV7NI\', apiKey: \'a6395b8da54d8d637629536196fbd5a1\',  siteId: \'5ddddc23-db8c-4e93-8648-085e71e0052a\',  branch: \'main\',  selector: \'div#search\',});'
    //   <script type="text/javascript"  dangerouslySetInnerHTML={'var tag = document.createElement(\'script\');  tag.src = "https://puzzledbycsharpcode.com/youtubeapi.js";  var firstScriptTag = document.getElementsByTagName(\'script\')[0];  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  var player;  function onYouTubePlayerAPIReady() {    player = new YT.Player(\'ytplayer\', {      height: \'360\',      width: \'640\',      videoId: \'${props.youtubeId}\'    }); console.log("props.youtubeId"+props.youtubeId);  }'}>
    const firstScriptTag = document.getElementById('search'); 
    firstScriptTag?.parentNode?.insertBefore(tag,firstScriptTag );
    // </script>
     }, { strategy: 'document-idle' });
     
  return (



    <>
      <header class="z-10 lg:opacity-100 fixed w-full">
        <nav  >
          <div class="container flex flex-wrap justify-between items-center mx-auto ">
            <a href="/" class="flex items-center fill-customdark8">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-puzzle-fill mx-3" viewBox="0 0 16 16">
                <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z" />
              </svg> */}
              <img  src="https://puzzledbycsharpcode.com/assets/icons/logo_v4.png"  width="170" height="70" alt="Puzzled By C# Icon"  ></img>
              {/* <span class="self-center text-xl font-semibold whitespace-nowrap text-customdark8">Puzzled By C#</span> */}
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 mx-1 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-customdark2 hover:bg-customdark6 text-customdark7 hover:text-customdark5 duration-300  " aria-controls="navbar-default" aria-expanded="false" onClick$={() => {
              const menu = document.getElementById("navbar-default");
              menu?.classList.toggle("hidden");
              const section = document.getElementById("main-body");
              section?.classList.toggle("blur-lg");
              section?.classList.toggle("brightness-50");
              const sectionAside = document.getElementById("bread-crumb");
              sectionAside?.classList.toggle("blur-lg");
              sectionAside?.classList.toggle("brightness-50");
              const sideMenu = document.getElementById('side-menu');
              sideMenu?.classList.remove('left-0');
              sideMenu?.classList.add('-left-3/4');

              const mobileContextMenu = document.getElementById("mobile-context-menu");
              mobileContextMenu?.classList.toggle("hidden")
            }}>
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto bg-customdark1 duration-300 top-12 md:top-0 " id="navbar-default">
              <ul class="flex flex-col  md:flex-row md:space-x-8  md:text-sm md:font-medium md:border-0 md:items-center">
                {/* <li>
                  <a href="/code-snippets/" class="py-2 pl-3 text-customdark8 flex flex-row items-center whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem" height="1.5rem" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                    <path
                      d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                    <path
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>Code Snippets</a>
                </li> */}
                {/* <li>
                  <a href="/fundamentals/collections/" class="py-2 pl-3 text-customdark8 flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 0 .5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 4h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z" />
                  </svg>Collections</a>
                </li> */}
                {/* <li>
                  <a href="/fundamentals/list" class="py-2 pl-3 text-customdark8 flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 0 .5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 4h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-13 2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z" />
                  </svg>Lists</a>
                </li> */}
                {/* <li>
                  <a href="/string/" class="py-2 pl-3 text-customdark8 flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                    <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
                  </svg>Strings</a>
                </li> */}
                <li>
                <div id="search"></div>
                </li>
                <li>
                  <a href="/about/" class="py-2 pl-3 text-customdark8 flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>About</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-row items-center bg-customdark1 lg:hidden border-2 border-customdark1 border-b-customdark2 fixed md:fixed top-12 w-full" id="mobile-context-menu" >
            <LeftContextMenu />
            <div class="lg:hidden" >
              <Breadcrumbs />
            </div>
          </div>
        </nav>

      </header>


      {/* <div class="hidden lg:block lg:h-14 w-screen backdrop-blur-md fixed top-0 -z-5">

      </div > */}
    </>
  );
});

