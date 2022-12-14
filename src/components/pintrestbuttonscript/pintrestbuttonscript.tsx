import { component$, useClientEffect$} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export const FacebookButtonScript = component$(() => {

  const loc = useLocation();
  useClientEffect$(() => {
  
    const id =  'facebook-jssdk'; 
        const s = 'script';
    let js = document.getElementsByTagName(s)[0];
    const  fjs = document.getElementsByTagName(s)[0];
    if (document.getElementById(id)) return;
    js = document.createElement(s); 
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    if(fjs){
      fjs.parentNode?.insertBefore(js, fjs);
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