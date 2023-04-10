import { component$ } from '@builder.io/qwik';
import { Subscriberpushnotification } from '../subscriberpushnotification/subscriberpushnotification';

export default component$(() => {

  return (
    <>
    <Subscriberpushnotification/>
    <footer>     
            <div class="flex flex-row justify-center">

         <h3 class="whitespace-nowrap">Follow Me At</h3>
  </div>
      <div class="flex flex-row justify-center">
        <div >

<a href="https://www.youtube.com/@puzzledbycsharp"><img src='https://puzzledbycsharp.com/assets/socialmedia/youtube/yt_logo_rgb_dark.png'></img></a>
</div>

      </div>
      <div class="flex flex-row justify-center">


<a href="https://puzzledbycsharp.com/privacy-policy/">Privacy Policy</a>
</div>
    </footer>
    </>
  );
});
