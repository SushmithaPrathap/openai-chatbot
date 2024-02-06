import { FC } from "react";
import Image from "next/image";
import logo from "../assets/book-logo.png";
import { Facebook, Heart, Instagram, Phone } from "lucide-react";

const Footer: FC = () => {
  return (
    <div className="flex flex-col flex-1 justify-around items-start w-full border-t-5 border-t border-red-50">
      <div className="flex justify-around items-start p-14 w-full">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-4xl text-bold mx-1">Book Buddy</p>
          <Image
            src={logo}
            alt="Hero of the book store"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
            className="w-56 h-52 mx-1"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-1/2">
          <p className="text-white text-4xl text-bold m-2">Get In Touch</p>

          <p className="text-white text-sm m-2">
            Our shelves are more than just a collection of titles; they are the
            embodiment of diverse voices, ideas, and dreams.
          </p>

          <div className="flex justify-center items-start">
            <Phone className="border-red-100 w-12 h-12 border p-2 rounded-xl m-2" />
            <Instagram className="border-red-100 w-12 h-12 border p-2 rounded-xl m-2" />
            <Facebook className="border-red-100 w-12 h-12 border p-2 rounded-xl m-2" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center items-start pb-8">
        <p className="text-white text-sm text-bold m-2 ">
          2024 © All Rights Reserved.
        </p>
        <p className="text-white text-sm text-bold m-2 ">-o-</p>
        <p className="flex flex-row gap-1 text-white text-sm text-bold m-2">
          Build with <Heart className="text-red-600" /> by Sushmitha Prathap
        </p>
      </div>
    </div>
  );
};

export default Footer;
