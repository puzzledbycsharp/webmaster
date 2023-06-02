import {
  component$, useVisibleTask$} from '@builder.io/qwik';
import { ImageWrapper } from '../imagewrapper/imagewrapper';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { MyRouteData, ROUTE_DATA } from '../global/global';
// export interface SharedRouteState {
//   data: MyRouteData [];
// }

// export interface MyRouteData{
//   location:string;
//   url:string;
//   title:string;
//   dateModified:string;
//   dateCreated:string;
//   twitterImage:string;
//   image:string;
//   imageSmall:string;
//   imageLarge:string;
//   description: string;

// }


export default component$(() => {


  return (
    <>
      <Child />
    </>

  );
});

export const Child = component$(() => {

  const myClonedArray  = Object.assign([], ROUTE_DATA);

  const updatedState = filterMetaData(myClonedArray);
  useVisibleTask$(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper(".swiper", {   modules: [Navigation],  spaceBetween:10, breakpoints: {  320: {  direction: 'horizontal',  slidesPerView: 1.1,  navigation: {  nextEl: '.swiper-button-next',  prevEl: '.swiper-button-prev',  },  },  480: {  direction: 'horizontal',  slidesPerView: 2.1, slidesPerGroup:2,   navigation: {  nextEl: '.swiper-button-next',  prevEl: '.swiper-button-prev',  },     },  640: {  direction: 'horizontal',  slidesPerView: 3.1,slidesPerGroup:3,  navigation: {  nextEl: '.swiper-button-next',  prevEl: '.swiper-button-prev',  },    },    768: {      direction: 'horizontal',      slidesPerView: 4.1,  slidesPerGroup:4,    navigation: {        nextEl: '.swiper-button-next',        prevEl: '.swiper-button-prev',      },              },       1024: {      direction: 'horizontal',      slidesPerView: 5.1,   slidesPerGroup:5,   navigation: {        nextEl: '.swiper-button-next',        prevEl: '.swiper-button-prev',      },            }  }      });
    
});
 return (
<>


<div class="swiper">

  <div class="swiper-wrapper">

  {updatedState
      ? updatedState?.map((item) => (

        <>

<div class="swiper-slide">


<div class="max-w-sm bg-customdark1 border border-customdark2 rounded-lg shadow-md">
    <a href={item.url}  aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
        {/* <img class="rounded-t-lg" src={item.image} alt={item.title + " Image"}  /> */}

        <ImageWrapper imageSource={item.image} imageSrcSet={item.imageSmall +" 500w, "+ item.image + " 1000w, " +item.imageLarge +" 2000w "} imageSizes="(max-width: 500w) 80vw, (max-width: 1000px) 25vw, (max-width: 2000px) 10vw" altImage = {item.title.replace(" | Puzzled By CSharp", "") + " Image"} widthImage = "6000" heightImage = "4000" classInfo='rounded-t-lg' lazyLoad={true} />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </a>
    <div class="">
        <a href={item.url} aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.replace(" | Puzzled By CSharp", "")}</h3>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <a href={item.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 bg-customdark1  hover:bg-customdark6 hover:text-customdark5 lg:mx-0 leading-5 rounded-md font-semibold text-customdark7 duration-300" aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
            Read more in article
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>
    </>

  ))
  : null}

  </div>

<div class="swiper-pagination"></div>


<div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>


  <div class="swiper-scrollbar"></div>
  </div>


  </>
  );
});

export function filterMetaData(routeDatas:  MyRouteData [] ) {
  const newArray : MyRouteData [] = [];
  let  count: number = 0;
  routeDatas.sort((a, b) => a.pageCount > b.pageCount ? -1 : a.pageCount < b.pageCount ? 1 : 0);
  for (const routeData of routeDatas) {
    if(routeData.image ==''){
      continue;
    }
    if( count <= 1){
      routeData.lazyLoadImage = false;
    }
    else{
      routeData.lazyLoadImage = true;
      //console.log("window.screen.width else");
    }

    count = count + 1;
if(routeData.location === 'about' || routeData.location === ''|| routeData.location === 'privacy-policy')
{
  continue;
}
if(routeData.pageCount > 0){
  newArray.push(routeData);

}
}

  return newArray;
}

