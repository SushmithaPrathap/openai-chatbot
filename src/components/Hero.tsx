import { FC } from "react";
import Image from "next/image";
import hero from "../assets/books-herotrans.png";

const Hero: FC = () => {
  return (
    <div id="home" className="flex justify-between items-center p-14">
      <div className="flex flex-col justify-center items-start flex-0.5 h-1/2">
        <p className="text-white text-5xl text-bold my-2">
          {" "}
          Get a new book for your collection!
        </p>
        {/* <p className="text-white text-2xl text-bold my-2">Your Gateway to Literary Wonders!</p> */}
        <p className="text-white text-lg my-2 w-5/6">
          Books are the quickest and most constant of friends: they are teh most
          wisest and accessible of councelors, and most patient of teachers{" "}
        </p>
        <button className="bg-gradient-to-r from-[#92e5ff] to-cyan-500 text-gray-700 py-2 px-8 rounded-2xl mt-4">
            Explore
        </button>
      </div>

      <Image
        src={hero}
        alt="Hero of the book store"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
        className="w-3/4"
      />
    </div>
  );
};

export default Hero;
