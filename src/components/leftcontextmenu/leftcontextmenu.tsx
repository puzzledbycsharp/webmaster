import { component$ } from '@builder.io/qwik';
import { ContentMenu, Link, useContent, useLocation } from '@builder.io/qwik-city';
import  OnThisPage  from '../onthispage/onthispage';

export default component$(() => {
  const { menu } = useContent();
  const loc = useLocation();

  const currentMenu = createContextMenu(menu, loc.href);
  // console.log("After createContextMenu" + currentMenu);
  // console.log("after createContextMenucurrentMenu?.items?.length:" + currentMenu.items?.length);

  return (
    <>
      <aside >

        <nav>
          <div class="container flex flex-wrap justify-between items-center lg:mx-auto">

            <button data-collapse-toggle="navbar-sidebar" type="button" class="inline-flex items-center p-3 mr-3 ml-3 text-sm text-gray-500 rounded-lg lg:hidden  text-customdark7 hover:bg-customdark6 hover:text-customdark5 duration-300" aria-controls="navbar-sidebar" aria-expanded="false" onClick$={() => {
              const sideMenu = document.getElementById('side-menu');

              sideMenu?.classList.remove('-left-3/4');
              sideMenu?.classList.add('left-0');

            }}>
              <span class="sr-only">Open side menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            <div class="hidden w-full lg:block lg:w-auto bg-customdark1 text-sm" id="navbar-sidebar">
              <div class="flex flex-col">
                <h5>{currentMenu.text}</h5>

                {currentMenu
                  ? currentMenu.items?.slice(1, currentMenu.items.length).map((item) => (
                    <>


                      <Link
                        href={item.href}
                        class="text-sm"
                      >
                        {item.text}
                      </Link>
                    </>
                  ))
                  : null}

              </div>
            </div>
          </div>
          <div id="side-menu" class="fixed top-14 -left-3/4 w-9/12 h-screen  text-customdark5 duration-300 bg-customdark1 border-solid border-r-2 border-t-2 border-customdark2 ">
          <div class="grid grid-cols-6">
          <h5 class="col-span-5">{currentMenu.text}</h5>
            {currentMenu
                  ? currentMenu.items?.slice(1, currentMenu.items.length).map((item) => (
                <>
              <a
                        href={item.href}
                        class="text-sm block pr-4 pl-3 col-span-6"
                      >
                        {item.text}
                      </a>
                </>
              ))
              : null}
            <div class="col-span-6">
              <OnThisPage />
            </div>
            <button class="text-center p-2 text-xl5 absolute top-0 right-0  hover:bg-customdark6 hover:text-customdark5 duration-300" onClick$={() => {
              const sideMenu = document.getElementById('side-menu');
              sideMenu?.classList.remove('left-0');
              sideMenu?.classList.add('-left-3/4');

            }}>&times;</button>
 </div>
          </div>

        </nav>

      </aside>

    </>


  );
});

let tempHeader = {} as ContentMenu;
export function createContextMenu(menu: ContentMenu | undefined, pathname: string) {
  //console.log("in createContextMenu");
  let foundMatch = false;
  if (menu && menu.items && menu.items.length > 0) {
    // console.log("in menu && menu.items && menu.items.length > 0");
    // console.log("menu.items.length"+menu.items.length);
    // console.log("menu.items[0]"+menu.items[0].text);
    // console.log("menu.items[0].items?.length"+menu.items[0].items?.length);
    // console.log("menu.items[1]"+menu.items[1].text);
    // console.log("menu.items[1].items?.length"+menu.items[1].items?.length);

    const reverseArray = [...menu.items].reverse();
    // console.log("after revsere menu.items[0]"+menu.items[0].text);
    // console.log("after revsere menu.items[0].items?.length"+menu.items[0].items?.length);
    // console.log("after revsere menu.items[1]"+menu.items[1].text);
    // console.log("after revsere menu.items[1].items?.length"+menu.items[1].items?.length);

    // console.log("after revsere reverseArray[0]"+reverseArray[0].text);
    // console.log("after revsere reverseArray[0].items?.length"+reverseArray[0].items?.length);
    // console.log("after revsere reverseArray[1]"+reverseArray[1].text);
    // console.log("after revsere reverseArray[1].items?.length"+reverseArray[1].items?.length);
    // menu.items?.forEach(item => {
    for (const item of reverseArray) {
    //  console.log("item item" + item.items?.length);
  //    console.log("item.text" + item.text);
      if (item && item.items) {

//        console.log("item && item.items");
        tempHeader = item;
        foundMatch = false;
        // item.items?.forEach(item2 => {
        for (const item2 of item?.items) {
          // console.log("item2.href:" + item2.href);
          // console.log("item2.text:" + item2.text);
          // console.log("(pathname:" + pathname);
          if (item2.href && pathname.includes(item2.href)) {

            const pathNameSplit = pathname.split("/");
            const item2HrefSplit = item2.href.split('/');
            let count = 0;
            for (const pathNameParts of pathNameSplit) {
              for (const item2HrefParts of item2HrefSplit) {
                if (pathNameParts === item2HrefParts) {
                  count++;
                }
              }
            }
            // console.log("potential match pathname: " + item2.href);
            // console.log("potential match count: " + count);
            // console.log("potential item2HrefSplit.length: " + item2HrefSplit.length);

            if (count >= item2HrefSplit.length) {
              foundMatch = true;
             // console.log("found match pathname: " + item2.href);
            }

          }
        }
      }
      // })
      if (foundMatch) {
        if (tempHeader && tempHeader.items) {

         /// console.log("found match tempHeader.text:" + tempHeader.text);
         // console.log("found match tempHeader.items:" + tempHeader?.items.length);
        }
        break;
      }
    }
    //})

  }
  return tempHeader;
}