import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <footer>        <h3 class="w-24  whitespace-nowrap mx-auto justify-center">
    Follow me at
  </h3>
      <div class="flex flex-row justify-center mx-auto">

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
    </footer>
  );
});
