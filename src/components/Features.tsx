import { FC } from "react";
import Image from "next/image";
import features from "../assets/features.png";
import { ScrollText, Truck, Users } from "lucide-react";

const Features: FC = () => {
  return (
    <div id="features" className="flex flex-1 justify-around items-start p-14 w-full">
      <Image
        src={features}
        alt="Features of the book store"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
        className="w-96"
      />

      <div className="flex flex-col justify-center items-start w-2/5 pt-10 ">
        <p className="text-white text-3xl text-bold m-1">Our Some Features</p>
        <p className="text-white text-sm m-1">
          {" "}
          Our shelves are more than just a collection of titles; they are the
          embodiment of diverse voices, ideas, and dreams.
        </p>

        <div>
          <div className="flex flex-row items-center justify-center">
            <div className="bg-gradient-to-r from-[#92e5ff] to-cyan-500 rounded-xl items-center justify-center flex m-4 p-6">
              <Users className="w-12 h-12" />
            </div>
            <div>
              <p className="text-white text-xl text-bold m-1">
                Local and Independent Authors
              </p>
              <p className="text-white text-sm m-1">
                A special section dedicated to promoting books by local and
                independent authors, supporting the community's literary talent.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="bg-gradient-to-r from-fuchsia-300 to-fuchsia-600 rounded-xl items-center justify-center flex m-4 p-6">
              <Truck className="w-12 h-12" />
            </div>
            <div>
              <p className="text-white text-xl text-bold m-1">Free Shipping</p>
              <p className="text-white text-sm m-1">
                A seamless online shopping experience with options for home
                delivery or in-store pickup.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="bg-gradient-to-r from-green-300 to-green-600 rounded-xl items-center justify-center flex m-4 p-6">
              <ScrollText className="w-12 h-12" />
            </div>
            <div>
              <p className="text-white text-xl text-bold m-1">
                Curated Selections
              </p>
              <p className="text-white text-sm m-1">
                A carefully curated range of titles across various genres, with
                staff recommendations and themed collections to help customers
                find their next great read.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
