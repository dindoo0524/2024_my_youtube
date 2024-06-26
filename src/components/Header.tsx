import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className="border-b-[#6f6f6f] border-b-[1px] py-4">
      <h1 className="flex items-center absolute h-[36px]">
        <AiFillPlayCircle className="text-red-600" />
        MY YOUTUBE
      </h1>

      <div className="flex flex-1 justify-center">
        <input
          className="bg-black w-full max-w-[400px] p-2"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="bg-[#272727] py-2 px-4">
          <AiOutlineSearch className="text-white text-20px" />
        </button>
      </div>
    </header>
  );
};

export default Header;
