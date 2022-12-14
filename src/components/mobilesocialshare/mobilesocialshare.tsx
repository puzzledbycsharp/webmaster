import { component$ } from '@builder.io/qwik';
import { Copyurl } from '../copyurl/copyurl';
import { FacebookButtonScript } from '../facebookbuttonscript/facebookbuttonscript';
import { TwitterSocialShare } from '../twittersocialshare/twittersocialshare';

export const MobileSocialShare = component$(() => {

  return (
<>

<span class="mx-3">

<TwitterSocialShare/>
</span>
<span class="mx-3">
<Copyurl/>
</span>
<span class="mx-3">
<FacebookButtonScript/>
</span>

          </>
  );
});