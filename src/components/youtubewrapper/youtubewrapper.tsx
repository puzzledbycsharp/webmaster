import { component$, useClientEffect$} from '@builder.io/qwik';

interface YoutubeItemProps {
  source?: string;
  videoId?: string;
}


export const YoutubeWrapper = component$((props: YoutubeItemProps) => {


const html = `var player;          function onYouTubePlayerAPIReady() {            player = new YT.Player(/'ytplayer/', {              height: /'360/',              width: /'640/',              videoId: /'${props.videoId}/'            });          }`;


useClientEffect$(() => {

  window.dispatchEvent(new CustomEvent('ptupdate'));
});


  return (
    
    <>

{/* <iframe class="w-full md:w-3/4 mx-auto h-96" loading="lazy" src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
<div id="ytplayer">

</div>
<script          type="text/partytown"
          src='https://www.youtube.com/iframe_api'
          >
</script>
<script          type="text/partytown"
          dangerouslySetInnerHTML={html}
          >
</script>

</>

);
  }
)