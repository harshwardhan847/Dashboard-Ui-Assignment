import React from "react";
import closeIcon from "../assets/icons/close.svg";
import Image from "next/image";
type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  return (
    <div className="px-2 py-1.5 bg-blue-100 rounded-3xl justify-end items-center gap-0.5 flex">
      <div className="justify-start items-center gap-1 flex w-fit">
        <div className="text-blue-900 text-xs whitespace-nowrap font-medium">{text}</div>
        <Image
          src={closeIcon}
          alt="Cancel"
          width={10}
          height={10}
          className="w-3 h-3"
        />
      </div>
    </div>
  );
};

export default Tag;
