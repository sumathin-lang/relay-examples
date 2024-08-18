import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

// type Props = {
//   image: {
//     url: string;
//   };
//   width?: number;
//   height?: number;
//   className?: string;
// };

export type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

export const ImageFragment = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
  }
`;

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  if (image == null) {
    return null;
  }
  const data = useFragment(ImageFragment, image);

  return (
    <img
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
    />
  );
}
