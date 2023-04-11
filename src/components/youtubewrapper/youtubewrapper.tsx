import { component$} from '@builder.io/qwik';

interface YoutubeItemProps {
  source?: string;
  youtubeId?:string;
}


export const YoutubeWrapper = component$((props: YoutubeItemProps) => {


  // useBrowserVisibleTask$(() => {
  //   const partytown = <div data-partycage data-partytype="iframe" data-partysrc="https://www.youtube.com/embed/2Y7CvSks1KY" style={{ width: '640px', height: '360px' }}></div>;
  //  <QwikPartytown>

  //  </QwikPartytown>
  // });

  return (
    <>
    
      {/* <div id="partytown"></div> */}
        {/* <div id="player"></div> */}
    {/* <script type="text/partytown" dangerouslySetInnerHTML={'var tag = document.createElement(\'script\');tag.src = "https://www.youtube.com/iframe_api";      var firstScriptTag = document.getElementsByTagName(\'script\')[0];      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);      var player;      function onYouTubeIframeAPIReady() {        player = new YT.Player(\'player\', {          height: \'390\',          width: \'640\',          videoId: \'2Y7CvSks1KY\',          playerVars: {            \'playsinline\': 1          },          events: {            \'onReady\': onPlayerReady,            \'onStateChange\': onPlayerStateChange          }        });      }      function onPlayerReady(event) {        event.target.playVideo();      }      var done = false;      function onPlayerStateChange(event) {        if (event.data == YT.PlayerState.PLAYING && !done) {          setTimeout(stopVideo, 6000);          done = true;        }      }      function stopVideo() {        player.stopVideo();      }     window.dispatchEvent(new CustomEvent(\'ptupdate\'));'}>
      
    </script> */}

        {/* <script type="text/partytown" dangerouslySetInnerHTML={'          (function () {            const elm = document.getElementById(\'player\');            const iframe = document.createElement(\'iframe\');                    iframe.src = \'https://www.youtube.com/embed/2Y7CvSks1KY\';            elm.parentNode.insertBefore(iframe, null);          })();'}>      
    </script>  */}

           {/* <script type="text/partytown" dangerouslySetInnerHTML={'var player;      function onYouTubeIframeAPIReady() {        player = new YT.Player(\'player\', {          height: \'390\',          width: \'640\',          videoId:\'2Y7CvSks1KY\',          playerVars: {            \'playsinline\': 1          },          events: {            \'onReady\': onPlayerReady,            \'onStateChange\': onPlayerStateChange          }        });      }  window.dispatchEvent(new CustomEvent(\'ptupdate\'));'}>      
    </script>  */}


   {/* <iframe class="w-full md:w-3/4 mx-auto h-96" loading="lazy" src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
     */}
  
  <div id="ytplayer"></div>

  <script type="text/partytown"  dangerouslySetInnerHTML={'var tag = document.createElement(\'script\');  tag.src = "https://puzzledbycsharp.com/youtubeapi.js";  var firstScriptTag = document.getElementsByTagName(\'script\')[0];  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  var player;  function onYouTubePlayerAPIReady() {    player = new YT.Player(\'ytplayer\', {      height: \'360\',      width: \'640\',      videoId: \'{props.youtubeId}\'    }); console.log("props.youtubeId"+props.youtubeId);  }'}>
  
  </script>


    </>


);


  }
)