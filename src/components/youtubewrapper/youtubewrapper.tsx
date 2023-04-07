import { component$} from '@builder.io/qwik';

interface YoutubeItemProps {
  source?: string;
}


export const YoutubeWrapper = component$((props: YoutubeItemProps) => {




  return (
    <>
        <div id="player"></div>
    {/* <script type="text/partytown" dangerouslySetInnerHTML={'var tag = document.createElement(\'script\');tag.src = "https://www.youtube.com/iframe_api";      var firstScriptTag = document.getElementsByTagName(\'script\')[0];      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);      var player;      function onYouTubeIframeAPIReady() {        player = new YT.Player(\'player\', {          height: \'390\',          width: \'640\',          videoId: \'2Y7CvSks1KY\',          playerVars: {            \'playsinline\': 1          },          events: {            \'onReady\': onPlayerReady,            \'onStateChange\': onPlayerStateChange          }        });      }      function onPlayerReady(event) {        event.target.playVideo();      }      var done = false;      function onPlayerStateChange(event) {        if (event.data == YT.PlayerState.PLAYING && !done) {          setTimeout(stopVideo, 6000);          done = true;        }      }      function stopVideo() {        player.stopVideo();      }     window.dispatchEvent(new CustomEvent(\'ptupdate\'));'}>
      
    </script> */}

        {/* <script type="text/partytown" dangerouslySetInnerHTML={'          (function () {            const elm = document.getElementById(\'player\');            const iframe = document.createElement(\'iframe\');                    iframe.src = \'https://www.youtube.com/embed/2Y7CvSks1KY\';            elm.parentNode.insertBefore(iframe, null);          })();'}>      
    </script>  */}

   <iframe class="w-full md:w-3/4 mx-auto h-96" loading="lazy" src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
    </>


);
  }
)