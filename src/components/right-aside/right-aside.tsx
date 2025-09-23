import { component$ } from '@builder.io/qwik';
//import { SubscribeForm } from '../subscribeform/subscribeform';
//import { FacebookButtonScript } from '../facebookbuttonscript/facebookbuttonscript';
import { Copyurl } from '../copyurl/copyurl';
import { TwitterSocialShare } from '../twittersocialshare/twittersocialshare';
import OnThisPage from '../onthispage/onthispage';



export const RightAside = component$(() => {

  return (

    <aside class="on-this-page ">
      <OnThisPage />
      <h6>Share</h6>
      <div class="flex flex-col">

        <div class="border-2 border-customdark1 border-l-customdark3 px-2 hover:border-l-customdark2">

          <TwitterSocialShare />
        </div>

        <div class="border-2 border-customdark1 border-l-customdark3 px-2 hover:border-l-customdark2 hover:bg-customdark6 hover:text-customdark5 duration-300 text-customdark7">

          <Copyurl />
        </div>


        {/* <div class="border-2 border-customdark1 border-l-customdark3 px-3 hover:border-l-customdark2 duration-300">
          <FacebookButtonScript />
        </div> */}
      </div>
      {/* <h6>Get Latest Updates</h6>
      <div class="border-2 border-customdark1 border-l-customdark3 px-3 hover:border-l-customdark2 duration-300">

        <SubscribeForm />
      </div> */}
      <h6>Connect</h6>
      <div class="border-2 border-customdark1 border-l-customdark3 px-3 hover:border-l-customdark2 duration-300">

      <a class="mx-auto p-5" href="https://www.youtube.com/@puzzledbycsharp"><img class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3" loading="lazy" alt='Youtube Icon Image' src='https://puzzledbycsharpcode.com/assets/socialmedia/youtube/yt_logo_rgb_dark.png' ></img></a>
      </div>
    </aside>
  );
});
