"use client"; //this is gonna be rendered on the client

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";
import { MessagesContext } from "@/context/messages";
import { Loader2, CornerDownLeft } from "lucide-react";
import toast from "react-hot-toast";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");

  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    isMessageUpdating,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }), //route expects an array of messages
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.body; // we will be getting a readable stream u8 array. Now we need to convert this in a string and display in real-time on success
    },

    onMutate(message) {
      addMessage(message);
    },

    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found");
      console.log("success");

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      addMessage(responseMessage);
      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read(); // if we are done reading we will set the done=doneReading

        done = doneReading;
        //if not we will set the chunk value to value. This value is Unit8Array which is converted to string by the decoder
        const chunkValue = decoder.decode(value);
        console.log(chunkValue);

        updateMessage(id, (prev) => prev + chunkValue);
      }

      //clean up
      setIsMessageUpdating(false);
      setInput("");

      setTimeout(() => {
        textareaRef.current?.focus(); // refocus the textarea
      }, 10);
    },
    onError: (_, message) => {
      toast.error("Something went wrong. Please try again.");
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className=" relative mt-4 flex-1 overflow-hidden rounded-xl border-none outline-none">
        <TextareaAutosize
          ref={textareaRef}
          rows={2}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          disabled={isPending}
          placeholder="Write a message... "
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        ></TextareaAutosize>

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
            {isPending ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <CornerDownLeft className="w-3 h-3" />
            )}
          </kbd>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ChatInput;

//HTMLAttributes we get this from react that allows us to pass generic <div element>
// the resaon we are passing HTMLdiv element - the props we are gonna recevive we are gonna pass that onto a div element
// combine the class name (border-t border-zinc-300) merge it with dynamic classname(which is recevied as a props) we will be passing onto this HTML div element using our cn function
