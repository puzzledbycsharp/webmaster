import { component$, useVisibleTask$} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export const FacebookButtonScript = component$(() => {

  const loc = useLocation();
  useVisibleTask$(() => {
  
    
//     const id =  'facebook-jssdk'; 
//         const s = 'script';
//     let js = document.getElementsByTagName(s)[0];
//     const  fjs = document.getElementsByTagName(s)[0];
//     if (document.getElementById(id)) return;
//     js = document.createElement(s); 
//     js.id = id;
//     //js.type = 'text/partytown';
//     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
//     //js.src = "/assets/fb.js";

//       fjs.parentNode?.insertBefore(js, fjs);
//      //document.head.appendChild(js);
//       //js.innerHTML = `console.log("New partytown script!")`;
// //document.head.appendChild(script);

if(document)
{

  const script = document.createElement('script');
  if(script)
  {

    script.type = 'text/javascript';
    script.innerHTML = `(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));`;
    document.head.appendChild(script);
    
  //  window.dispatchEvent(new CustomEvent('ptupdate'));
  }
}
   });

  return (
<>
<div  id="fb-root"></div>
<div class="fb-share-button" 
data-href={loc.href}
data-layout="button">
</div>

  </>



  );
});