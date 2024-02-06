import { Atom, BookHeart, Search, LampCeiling, BookAudio } from "lucide-react";

export const categories = [
  {
    id: "0",
    icon: <Atom className="w-20 h-20" />,
    category: "All Books",
  },
  {
    id: "1",
    icon: <Atom className="w-20 h-20" />,
    category: "Science",
  },
  {
    id: "2",
    icon: <LampCeiling className="w-20 h-20" />,
    category: "History",
  },
  {
    id: "3",
    icon: <BookHeart className="w-20 h-20" />,
    category: "Romance",
  },
  {
    id: "4",
    icon: <Search className="w-20 h-20" />,
    category: "Mystery",
  },
  {
    id: "5",
    icon: <BookAudio className="w-20 h-20" />,
    category: "Fiction",
  },
];
