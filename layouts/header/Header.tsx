import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";

type Props = {};

const Header = function ({}: Props) {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={AiOutlineHome} />
        <HeaderItem title="TRENDING" Icon={HiOutlineBadgeCheck} />
        <HeaderItem title="VERIFIED" Icon={BsLightningCharge} />
        <HeaderItem title="COLECTIONS" Icon={MdOutlineCollectionsBookmark} />
        <HeaderItem title="SEARCH" Icon={AiOutlineSearch} />
        <HeaderItem title="ACCOUNT" Icon={FiUser} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        alt="Hulu"
        className="object-contain "
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
