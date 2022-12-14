import { component$} from '@builder.io/qwik';

interface ItemProps {
  imageSource?: string;
  imageSrcSet?: string;
  imageSizes?: string;
  altImage?: string;
  widthImage?: number;
  heightImage?: number;

}


export const ImageWrapper = component$((props: ItemProps) => {

  return (
    <img src={props.imageSource} srcSet={props.imageSrcSet} sizes={props.imageSizes} width={props.widthImage} height={props.heightImage} alt={props.altImage} loading="lazy"  />


);
  }
)