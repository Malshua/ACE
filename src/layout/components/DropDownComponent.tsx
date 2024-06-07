import Link from 'next/link';
import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

interface DropDownComponentTypes {
  title?: string;
  items?: any;
  handleMenu?: any;
}

const DropDownComponent = ({
  title,
  items,
  handleMenu,
}: DropDownComponentTypes) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div>
      <div
        className="flex gap-1 items-center relative text-white border border-transparent outline-none all__trans"
        onClick={() => handleOpenDropdown()}
      >
        <span className="text-primary-default">{title}</span>
        <span className="text-primary-default">
          <BiCaretDown />
        </span>
      </div>

      {/* {openDropdown && ( */}
      <div
        className={`w-48 text-sm text-left flex flex-col text-primary-default all__trans overflow-hidden ${
          openDropdown ? 'h-full py-1' : 'h-0'
        }`}
      >
        {items?.map((item: any, index: any) => (
          <Link
            href={item?.link}
            className="my-1 py-2 px-3 border-b-[0.5px] capitalize"
            key={index}
            onClick={handleMenu}
          >
            {item?.label}
          </Link>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};
export default DropDownComponent;
