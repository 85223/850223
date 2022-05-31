import { ImageLoaderProps } from 'next/image';

export default function loader({ src, width }: ImageLoaderProps) {
  return `${src}?width=${width}`;
}
