import {
  component$} from '@builder.io/qwik';
import 'swiper/css';
import 'swiper/css/navigation';



export default component$(() => {


  return (
    <>
<div
  class="relative flex items-center justify-center h-fit mb-12 overflow-hidden"
>
<div class="z-5 grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-y-2">


  <div
    class="z-5 md:p-5 font-bold text-customdark7 rounded-xl whitespace-pre-wrap col-span-1 col-start-2 row-start-2"
  >
Welcome! This site was created for you to gain new insights into the C# programming language. There are a variety of how-to articles, and code snippets. Search below to quickly browse the content.
  </div>
 

  <div id="search" class=" bg-customdark1 col-span-1 col-start-2 z-5 row-start-3 h-min"></div>
  </div>
  <img class="absolute -z-10 w-auto min-w-full min-h-full max-w-none  block md:hidden" src="../../assets/home/big-data-scan-still.webp">
  </img>
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
