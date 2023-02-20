import {
  component$, useClientEffect$, useMount$,
} from '@builder.io/qwik';
import { ImageWrapper } from '../imagewrapper/imagewrapper';

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

        <ImageWrapper imageSource={item.image} imageSrcSet={item.imageSmall +" 250w, "+ item.image + " 500w, " +item.imageLarge +" 1000w "} imageSizes="(max-width: 250px) 80vw, (max-width: 500px) 25vw, (max-width: 1000px) 10vw" altImage = {item.title.replace(" | Puzzled By CSharp", "") + " Image"} widthImage = "6000" heightImage = "4000" classInfo='rounded-t-lg'/>

    </a>
    <div class="">
        <a href={item.url} aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title.replace(" | Puzzled By CSharp", "")}</h3>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <a href={item.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 bg-customdark1  hover:bg-customdark6 hover:text-customdark5 lg:mx-0 text-sm leading-5 rounded-md font-semibold text-customdark7 duration-300" aria-label={item.title.replace(" | Puzzled By CSharp", "") + " Link"}>
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
  routeDatas.sort((a, b) => a.dateModified > b.dateModified ? -1 : a.dateModified < b.dateModified ? 1 : 0);
  for (const routeData of routeDatas) {
    routeData.lazyLoadImage = true;

    useMount$(()=>{
      if( count <= 1){
        routeData.lazyLoadImage = false;
      }
    });
    useClientEffect$(() => {
  
      if( window.screen.width <= 320 && count <= 1){
        routeData.lazyLoadImage = false;
       // console.log("window.screen.width <= 320 && count <= 1");
      }
    else if(window.screen.width <= 480 && count <= 2)
    {
      routeData.lazyLoadImage = false;
      //console.log("window.screen.width <= 480 && count <= 2");

    }
    else if(window.screen.width <= 640 && count <= 3)
    {
      routeData.lazyLoadImage = false;
      //console.log("window.screen.width <= 640 && count <= 3");
    }
    else if(window.screen.width <= 768 && count <= 4)
    {
      routeData.lazyLoadImage = false;
     // console.log("window.screen.width <= 768 && count <= 4");
    }
    else if(window.screen.width <=  1024 && count <= 5)
    {
      routeData.lazyLoadImage = false;
      //console.log("window.screen.width <=  1024 && count <= 5");
    }
    else if(window.screen.width >  1024 && count <= 5)
    {
      console.log("window.screen.width >  1024 && count <= 5");
     // routeData.lazyLoadImage = false;
    }
    else{
      routeData.lazyLoadImage = true;
      //console.log("window.screen.width else");
    }
  });
    count = count + 1;
if(routeData.location === 'about' || routeData.location === '')
{
  continue;
}
  newArray.push(routeData);
}

  return newArray;
}

