import { categories } from "@/app/helpers/constants/catergories";
import { FC } from "react";

const Categories: FC = () => {
  return (
    <div id="categories" className="flex flex-1 justify-center items-center p-24 w-full flex-col gap-4 ">
      <p className="text-white text-5xl text-bold m-2">
        Welcome to our literary oasis!
      </p>
      <p className="text-white text-md m-1 w-4/5 text-center">
        Dive into our meticulously curated collection, thoughtfully organized
        into an array of captivating categories. Whether you're in search of
        thrilling adventures, timeless classics, cutting-edge science, or
        heartwarming romances, we've got something special for every book lover.
        Embark on your next reading journey with us and discover the perfect
        book that awaits you.
      </p>
      <p className="text-white text-xl text-bold m-2">
        Categories To Chose From
      </p>
      <div className="flex flex-row justify-center items-center m-10">
        {categories.map(({ id, icon, category }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-[#92e5ff] to-cyan-500 p-10 m-2 rounded-xl text-3xl justify-center items-center flex flex-col gap-4"
          >
            {icon} {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
