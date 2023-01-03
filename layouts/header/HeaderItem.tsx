import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  title: string;
};

const HeaderItem = function ({ Icon, title }: Props) {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 text-[32px] mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
