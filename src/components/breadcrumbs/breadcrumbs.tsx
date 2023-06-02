import { component$} from '@builder.io/qwik';
import { useContent, useLocation, ContentMenu } from '@builder.io/qwik-city';

export const Breadcrumbs = component$(() => {

  const { menu } = useContent();
  const loc = useLocation();

  const breadcrumbs = createBreadcrumbs(menu, loc.url.pathname);
  if (breadcrumbs.length === 0) {

    return null;
  }

  return (
    <nav aria-label="Breadcrumb" class="breadcrumbs text-sm  lg:border-2 lg:border-customdark1 lg:border-b-customdark3 lg:hover:border-b-customdark2 lg:duration-300">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
      {
      breadcrumbs.map((b) => (
        <li class="inline-flex items-center">{b.href === loc.url.pathname?  <div class="flex flex-row items-center"><svg class="w-6 h-6 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>{b.text}</div> : <a class="inline-flex items-center text-sm font-medium" href={b.href}>{b.text}</a>}</li>
      ))}
      </ol>
    </nav>
  );
});

export function createBreadcrumbs(menu: ContentMenu | undefined, pathname: string) {
  if (menu?.items) {

    for (const indexA of menu.items) {     
       //console.log("indexA.text:"+indexA.text);
       //console.log("indexA.href:"+indexA.href);
      const breadcrumbA: ContentBreadcrumb = {
        text: truncateString(indexA.text),
      };
      if (indexA.items) {
        for (const indexB of indexA.items) {
           //console.log("indexB.text:"+indexB.text);
           //console.log("indexB.href:"+indexB.href);
if(breadcrumbA.text == indexB.text ){
breadcrumbA.href = indexB.href;
continue;
}
          const breadcrumbB: ContentBreadcrumb = {
            text: truncateString(indexB.text),
          };
          if (typeof indexB.href === 'string') {
            breadcrumbB.href = indexB.href;
          }

          if (indexB.href === pathname) {
            //console.log("return a & B");
            return [breadcrumbA, breadcrumbB];
          }


          if (indexB.items) {
            for (const indexC of indexB.items) {
              const breadcrumbC: ContentBreadcrumb = {
                text: truncateString(indexC.text),
              };
              if (typeof indexC.href === 'string') {
                breadcrumbC.href = indexC.href;
              }
              if (indexC.href === pathname) {
                return [breadcrumbA, breadcrumbB, breadcrumbC];
              }
              if (indexC.items) {
                for (const indexD of indexC.items) {
                  const breadcrumbD: ContentBreadcrumb = {
                    text: indexD.text,
                  };
                  if (typeof indexD.href === 'string') {
                    breadcrumbC.href = indexD.href;
                  }
                  if (indexD.href === pathname) {
                    return [breadcrumbA, breadcrumbB, breadcrumbC,breadcrumbD];
                  }
                  
                }
              }
            }
          }
        }
      }
    }
  }

  return [];
}

export function truncateString(rawValue:string){
  if(rawValue.length > 80)
  {
    return rawValue.substring(0,80) + '...';
  }
  return rawValue;
}

interface ContentBreadcrumb {
  text: string;
  href?: string;
}
