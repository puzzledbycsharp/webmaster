import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <footer>     
            <div class="flex flex-row justify-center">

         <h3 class="whitespace-nowrap">Follow Me At</h3>
  </div>
      <div class="flex flex-row justify-center">

        <div class="w-16">

          <a href="https://twitter.com/puzzledbycsharp">Twitter</a>
        </div>
        <div class="w-24">

          <a href="https://www.facebook.com/Puzzled-By-CSharp-100297665148585">Facebook</a>
        </div>
        <div class="w-24">

          <a href="https://www.instagram.com/puzzledbycsharp/">Instagram</a>
        </div>
        <div class="w-24">

          <a href="https://www.pinterest.com/puzzledbycsharp/">Pinterest</a>
        </div>

      </div>
      <div class="flex flex-row justify-center">


<a href="https://puzzledbycsharp.com/privacy-policy/">Privacy Policy</a>
</div>
    </footer>
  );
});
