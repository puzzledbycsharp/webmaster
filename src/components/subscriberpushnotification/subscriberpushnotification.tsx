import { component$, useClientEffect$} from '@builder.io/qwik';




export const Subscriberpushnotification = component$(() => {


  useClientEffect$(() => {
    window.dispatchEvent(new CustomEvent('ptupdate'));
    
  });
  return (
<>

<div class="pushnotificationplaceholder">

</div>
          </>
  );
});