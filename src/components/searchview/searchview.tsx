import {
  component$} from '@builder.io/qwik';
import 'swiper/css';
import 'swiper/css/navigation';
import { ImageWrapper } from '../imagewrapper/imagewrapper';



export default component$(() => {


  return (
    <>
<div
  class="relative flex items-center justify-center h-fit mb-12 overflow-hidden"
>
<div class="z-5 grid grid-rows-4 grid-cols-1 md:grid-cols-3 gap-y-2">


  <div
    class="z-5 py-4 md:p-5 font-bold text-customdark7 rounded-xl col-span-1 col-start-2 row-start-2"
  >
Welcome! This site was created for you to gain new insights into the C# programming language. There are a variety of how-to articles, and code snippets.   <span class="hidden md:block">
  Search below to quickly browse the content.
  </span>
  </div>

 

  <div id="search" class=" bg-customdark1 col-span-1 col-start-2 z-5 row-start-3 h-min my-10 hidden md:block"></div>
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
