import { component$, useStore } from '@builder.io/qwik';


export const SubscribeForm = component$(() => {

  const inputValue = useStore({
    value: '',

  });

  return (
    <>
      <form >
        <label for="email" class="block text-sm font-medium text-customdark5">
          <div class="mt-1 mr-6">
            <input type="email" name="email" id="email" class="px-3 mx-3 lg:mx-0 py-2 hover:bg-customdark6 hover:text-customdark5 bg-customdark3 boader-2 border-customdark3 placeholder-customdark5 disabled:bg-red-100 disabled:text-black disabled:border-slate-200 focus:outline-none focus:border-customdark2 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 duration-300" value="" placeholder="you@example.com"
              onInput$={(ev) => (inputValue.value = (ev.target as HTMLInputElement).value)}>

            </input>

          </div>
        </label>
        <div class="mt-6 text-right">

        </div>
      </form>
      <button class="left-0 border-2 bg-customdark1  hover:bg-customdark6 hover:text-customdark5 px-5 mx-3 lg:mx-0 text-sm leading-5 rounded-md font-semibold text-customdark7 duration-300"
        onClick$={() => {
          if (inputValue.value != null) {
            const requestOptions = {
              method: 'POST',
              headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'api-key': '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' },
              body: JSON.stringify({ email: inputValue.value })
            };
            fetch('https://api.sendinblue.com/v3/contacts', requestOptions)
              .then((response) => response.json());
            const emailInput = document.getElementById('email');
            (emailInput as HTMLInputElement).value = '';
          }
        }}>
        Subscribe
      </button>
    </>
  );
}
)

