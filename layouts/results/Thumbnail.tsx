import React from "react";
import Image from "next/image";
type Props = {
  result: any;
};
const Thumbnail = function ({ result }: Props) {
  return (
    <div>
      <Image
        layout="responsive"
        src={}
        alt=""
        width={1080}
        height={1920}
        className=""
      />
    </div>
  );
};

export default Thumbnail;
