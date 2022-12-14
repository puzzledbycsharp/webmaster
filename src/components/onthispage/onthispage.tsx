import { useContent } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {

  const { headings } = useContent();
  const contentHeadings = headings?.filter((h) => h.level === 2 || h.level === 3) || [];

  return (
    
    <div>
      {contentHeadings.length > 0 ? (
        <>
          <h6>On This Page</h6>
          <div class="flex flex-col">
            {contentHeadings.map((h) => (
                <a class="border-2 border-customdark1 border-l-customdark3 px-2 hover:border-l-customdark2"
                  href={`#${h.id}`}
                >
                  {h.text}
                </a>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
});
