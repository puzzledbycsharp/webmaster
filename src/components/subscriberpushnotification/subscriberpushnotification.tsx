import { component$, useClientEffect$} from '@builder.io/qwik';




export const Subscriberpushnotification = component$(() => {


  useClientEffect$(() => {
    window.dispatchEvent(new CustomEvent('ptupdate'));
    
  });
  return (
<>
<script type="text/partytown"
dangerouslySetInnerHTML={'var subscriberssiteid=\'b7826009-f433-41f5-ab8d-5ae92ee6e3fb\';'}
></script>

<script type="text/partytown" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
<div class="pushnotificationplaceholder">

</div>
          </>
  );
});