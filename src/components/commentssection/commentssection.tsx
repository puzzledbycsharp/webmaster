import { component$, useBrowserVisibleTask$ } from '@builder.io/qwik';
import { graphcomment } from './integration.js';
import { useLocation } from '@builder.io/qwik-city';

export const CommentsSection = component$(() => {

  const loc = useLocation();

  useBrowserVisibleTask$(() => {
    __semio__onload();
    function __semio__onload() {
      const gc_params = {
  
        graphcomment_id: 'Puzzled-By-CSharp',
      
        target: document.getElementById('#graphcomment'), // optional, #graphcomment by default
        behaviour: {
          // HIGHLY RECOMMENDED
           uid:  hashUrl(), // uniq identifer for the comments thread on your page (ex: your page id)
        },
      }
      graphcomment(gc_params)
      }

      function hashUrl()
      {
        let i = 0;
        if (loc.href.length === 0) return 0;
        let hash = 0;
        for (i = 0; i < loc.href.length; i++) {
        const  chr = loc.href.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
      }
    
  });

    return (
      <>
        <div class="py-5 my-7 mx-auto" id="graphcomment"></div> 
       </>
  );
    }
  );
  
  



   