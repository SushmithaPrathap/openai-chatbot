"use client";

import { FC } from "react";
import Image from "next/image";
import logo from "../assets/book-logo.png";

const NavBar: FC = () => {
  const scrollFunc = (div: string) => {
    const scrollDiv = document.getElementById(div);
    if (scrollDiv) {
      const sectionTop = scrollDiv.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };
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
        <p
          className="text-white text-sm text-bold cursor-pointer"
          onClick={() => scrollFunc("home")}
        >
          Home
        </p>
        <p
          className="text-white text-sm text-bold cursor-pointer"
          onClick={() => scrollFunc("features")}
        >
          Features
        </p>
        <p
          className="text-white text-sm text-bold cursor-pointer"
          onClick={() => scrollFunc("categories")}
        >
          Categories
        </p>
        <p
          className="text-white text-sm text-bold cursor-pointer"
          onClick={() => scrollFunc("books")}
        >
          Books
        </p>
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
