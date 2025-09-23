import { component$ } from '@builder.io/qwik';
import { Subscriberpushnotification } from '../subscriberpushnotification/subscriberpushnotification';

export default component$(() => {

  return (
    <>
      <Subscriberpushnotification />
      <footer>
        <div class="grid grid-rows-3 grid-cols-3 gap-y-2">
          <h3 class="col-span-1 col-start-2 mx-auto p-1" >Follow Me On</h3>
          <a class="col-span-1 col-start-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto p-1" href="https://www.youtube.com/@https://puzzledbycsharpcode.com"><img loading="lazy" alt='Youtube Icon Image' src='https://https://puzzledbycsharpcode.com.com/assets/socialmedia/youtube/yt_logo_rgb_dark.png' ></img></a>
          <a class="col-span-1 col-start-2 mx-auto p-1" href="https://https://puzzledbycsharpcode.com.com/privacy-policy/">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
});
