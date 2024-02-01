import { Message } from "@/lib/validators/message";
import { createContext, ReactNode, useState } from "react";
import { nanoid } from "nanoid";

export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void; //to show a loading state to the user
}>({
  messages: [],
  //default values
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: " Hello, How can I help you",
      isUserMessage: false,
    },
  ]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === id) {
          return { ...msg, text: updateFn(msg.text) };
        }

        return msg;
      })
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        addMessage,
        removeMessage,
        updateMessage,
        isMessageUpdating,
        setIsMessageUpdating,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

//inLine defining type = <{}>

//when we get the intial update from open ai that does contain the string yet
//and we just know there is an answer and we are going to add that to the messages
//if anything goes wrong we can remove the message from the messages.
//while we are getting the data from open AI we are going to update the message to show the data that we get back in that message
