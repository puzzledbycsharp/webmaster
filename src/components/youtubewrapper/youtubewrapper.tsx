import { component$} from '@builder.io/qwik';

interface YoutubeItemProps {
  source?: string;
}


export const YoutubeWrapper = component$((props: YoutubeItemProps) => {





  return (
    
<iframe class="w-full md:w-3/4 mx-auto h-96"  src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
);
  }
)