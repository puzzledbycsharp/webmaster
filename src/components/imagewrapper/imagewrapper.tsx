import { component$} from '@builder.io/qwik';

interface ItemProps {
  imageSource?: string;
  imageSrcSet?: string;
  imageSizes?: string;
  altImage?: string;
  widthImage?: number | `${number}`;
  heightImage?: number | `${number}`;
classInfo?:string;
lazyLoad?:boolean;
}


export const ImageWrapper = component$((props: ItemProps) => {

  return (
    <img  src={props.imageSource} srcset={props.imageSrcSet} sizes={props.imageSizes} width={props.widthImage} height={props.heightImage} alt={props.altImage} class={props.classInfo} loading={props.lazyLoad ? "lazy" :"eager" } />


);
  }
)