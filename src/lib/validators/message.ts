import { z } from "zod";

export const MessageSchema = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  text: z.string(),
});

export const BookSchema = z.object({
  id: z.string(),
  Name: z.string(),
  Author: z.string(),
  Price: z.string(),
  Category: z.string(),
});

//arrayValidator
export const MessageArraySchema = z.array(MessageSchema);

export const BookArraySchema = z.array(BookSchema);

export type Message = z.infer<typeof MessageSchema>;
export type Book = z.infer<typeof BookSchema>;
