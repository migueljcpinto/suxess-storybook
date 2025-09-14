import Image, { type ImageProps } from "next/image";

export interface CustomImageProps extends Omit<ImageProps, "alt"> {
  src: string;
  isLocalPath?: boolean;
  alt?: string;
}

export function CustomImage({
  src,
  alt = "",
  isLocalPath = false,
  fill,
  ...rest
}: CustomImageProps) {
  const isAbsolute = src.startsWith("http://") || src.startsWith("https://");
  const needsNoPrefix =
    isLocalPath || src.startsWith("/clients/") || isAbsolute;

  if (needsNoPrefix) {
    return <Image alt={alt} fill={fill} src={src} {...rest} />;
  }

  return (
    <Image
      alt={alt}
      fill={fill}
      src={`${process.env.NEXT_PUBLIC_ASSET_URL}${src}`}
      {...rest}
    />
  );
}
