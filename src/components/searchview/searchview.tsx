import {
  component$, useBrowserVisibleTask$} from '@builder.io/qwik';
import 'swiper/css';
import 'swiper/css/navigation';
import { ImageWrapper } from '../imagewrapper/imagewrapper';



export default component$(() => {

  useBrowserVisibleTask$(() => {

    //   const partytown = <div data-partycage data-partytype="iframe" data-partysrc="https://www.youtube.com/embed/2Y7CvSks1KY" style={{ width: '640px', height: '360px' }}></div>;
    //  <QwikPartytown>
  
    //  </QwikPartytown>
    // const div = document.createElement('div'); 
    // div.id = 'ytplayer'
  
    const tag = document.createElement('script'); 
    tag.type = "text/javascript";
    //tag.src = 'var tag = document.createElement(\'script\');  tag.src = "https://puzzledbycsharp.com/youtubeapi.js";  var firstScriptTag = document.getElementsByTagName(\'script\')[0];  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  var player;  function onYouTubePlayerAPIReady() {    player = new YT.Player(\'ytplayer\', {      height: \'360\',      width: \'640\',      videoId: \'${props.youtubeId}\'    }); console.log("props.youtubeId"+props.youtubeId);  }';
    tag.innerHTML = 'algoliasearchNetlify({appId: \'CXWBWJV7NI\', apiKey: \'a6395b8da54d8d637629536196fbd5a1\',  siteId: \'5ddddc23-db8c-4e93-8648-085e71e0052a\',  branch: \'main\',  selector: \'div#search\',});'
    //   <script type="text/javascript"  dangerouslySetInnerHTML={'var tag = document.createElement(\'script\');  tag.src = "https://puzzledbycsharp.com/youtubeapi.js";  var firstScriptTag = document.getElementsByTagName(\'script\')[0];  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  var player;  function onYouTubePlayerAPIReady() {    player = new YT.Player(\'ytplayer\', {      height: \'360\',      width: \'640\',      videoId: \'${props.youtubeId}\'    }); console.log("props.youtubeId"+props.youtubeId);  }'}>
    const firstScriptTag = document.getElementById('search'); 
    firstScriptTag?.parentNode?.insertBefore(tag,firstScriptTag );
    // </script>
     });
  
  return (
    <>
<div
  class="relative flex items-center justify-center h-fit mb-12 overflow-hidden"
>
<div class="z-5 grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-y-2">


  <div
    class="z-5 py-4 md:p-5 font-bold text-customdark7 rounded-xl whitespace-pre-wrap col-span-1 col-start-2 row-start-2"
  >
Welcome! This site was created for you to gain new insights into the C# programming language. There are a variety of how-to articles, and code snippets. Search below to quickly browse the content.
  </div>
 

  <div id="search" class=" bg-customdark1 col-span-1 col-start-2 z-5 row-start-3 h-min my-10 "></div>
  
  </div>
  {/* <img class="absolute -z-10 w-auto min-w-full min-h-full max-w-none  block md:hidden" src="../../assets/home/big-data-scan-still.webp">
  </img> */}

  <ImageWrapper imageSource="../../../../assets/home/Big-data-scan-still-medium.webp" imageSrcSet="../../../../assets/home/Big-data-scan-still-small.webp 500w, ../../../../assets/home/Big-data-scan-still-medium.webp 1000w, ../../../../assets/home/Big-data-scan-still-large.webp 2000w" imageSizes="(max-width: 250px) 80vw, (max-width: 500px) 25vw, (max-width: 1000px) 10vw" altImage = "Home Page Splash Video Looped" widthImage = "1280" heightImage = "720" classInfo="absolute -z-10 w-auto min-w-full h-screen max-w-none block md:hidden my-15" />
  <video 
    autoplay
    loop
    muted
    controls
    poster="../../assets/home/big-data-scan-still.webp"
    class="absolute -z-10 w-auto min-w-full min-h-full max-w-none hidden md:block"
  >
    <source

      src="../../assets/home/big-data-scan-loop.mp4"
      type="video/mp4"
    />
    
  </video>
</div>
    </>

  );
});
