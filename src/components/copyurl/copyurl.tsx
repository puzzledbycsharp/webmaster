import { component$, useStore, useWatch$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';


interface State {
  check: boolean;
}

export const Copyurl = component$(() => {

  const { pathname } = useLocation();
  const completeUri = `https://puzzledbycsharp.com${pathname}/`;
  const props = useStore({
    url: completeUri,
  });
  const store = useStore<State>({
    check: false,
  });

  useWatch$(({ track }) => {
    track(() => store.check);

    const timer = setTimeout(() => {
      if(store.check)
      {
        store.check = false;
      }
      
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  
  return (
<>
<button class="flex flex-row" aria-label="Copy Url Button" onClick$={() => {
         store.check = true;
         if(props != null && props.url !=null &&  props.url.length > 0 ){
           navigator.clipboard.writeText(props.url);
          }
        }}
        >
          {store.check ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-1 " viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-1 " viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>}
      <span class="hidden lg:block">
        Copy Url</span></button>
          </>
  );
});