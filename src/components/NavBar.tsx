import { FC } from "react";
import Image from "next/image";
import logo from "../assets/book-logo.png";

const NavBar: FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 w-full px-2 fixed">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={logo}
          alt="Hero of the book store"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
          className="w-16 h-20 mx-1"
        />
        <p className="text-white text-xl text-bold mx-1">Book Buddy</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-8">
        <p className="text-white text-sm text-bold">Home</p>
        <p className="text-white text-sm text-bold">Features</p>
        <p className="text-white text-sm text-bold">Categories</p>
        <p className="text-white text-sm text-bold">Pages</p>
      </div>

      <div className="flex flex-row justify-center items-center">
        <button className="bg-gradient-to-r from-[#92e5ff] to-cyan-500 text-gray-700 py-2 px-5 rounded-2xl text-sm">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default NavBar;
