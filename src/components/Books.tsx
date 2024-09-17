"use client";

import { categories } from "@/app/helpers/constants/catergories";
import { FC, useState, useEffect } from "react";
import { BookMarked } from "lucide-react";
import { Book } from "@/lib/validators/message";
import { cn } from "@/lib/utils";
import { books } from "@/app/helpers/constants/books";

const Books: FC = () => {
  const [category, setCategory] = useState<string>("All Books");
  const [array, setArray] = useState<Book[]>(books.slice(0, 10));

  const click = (cat: string) => {
    if (cat === "All Books") {
      setArray(books.slice(0, 10));
    } else {
      const booksDisplay = books.filter((item) => item.Category === cat);
      setArray(booksDisplay);
    }
    setCategory(cat);
  };

  return (
    <div
      id="books"
      className="flex flex-col bg-gray-600 m-5 p-10 rounded-xl mb-20"
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-3xl text-bold m-1">
          Our Best Selling Books
        </p>
        <div className="flex flex-row justify-center items-center">
          {categories.map((item) => (
            <button id={item.id}
              onClick={() => click(item.category)}
              className={cn("text-white text-sm text-bold py-2 px-5", {
                "bg-gradient-to-r from-[#92e5ff] to-cyan-500 text-gray-800  rounded-xl":
                  category === item.category,
              })}
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap m-10">
        {array.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center w-56 min-h-fit rounded-xl p-4 bg-slate-400 m-2"
          >
            <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl items-center justify-center flex m-4 p-6">
              <BookMarked className="w-28 h-36" />
            </div>
            <p className="text-white text-lg text-bold m-1">{item.Name}</p>
            <p className="text-red-600 text-sm text-bold m-1">
              By {item.Author}
            </p>
            <div className="flex flex-row justify-between items-start w-full">
              <p className="text-red-600 text-sm m-1">{item.Price}</p>
              <button className="bg-orange-400 text-white py-1 px-3 m-1 rounded-2xl text-xs">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
