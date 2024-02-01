import { type ClassValue, clsx } from "clsx" //conditional classes 
import { twMerge } from "tailwind-merge" // dependency for mthe cn function

// need these dependices for the cn function.

export function cn(...inputs: ClassValue[]) { //cn function is for merging classnames - helper
  return twMerge(clsx(inputs))
}

// bunch of inputs of type ClassValue - ARGUEMNT
// return twMerge combines certain tailwind classes into one for optimaization purposes - 
//example => left-0 right-0 -> inset-x-0 (means the same thing but in more concise manner)
//clsx allows us to write conditional classes like if this and that is true do this kind

//library folder - is for preparing libraries for context in which they rae used in this project