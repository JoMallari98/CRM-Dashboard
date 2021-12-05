import { ImageProps } from "next/image";
import * as React from "react";

const mock = (props: ImageProps): React.ReactElement => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} />;
};

export default mock;
