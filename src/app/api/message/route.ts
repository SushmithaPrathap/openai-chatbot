import { chatbotPrompt } from "@/app/helpers/constants/chatbot-prompt";
import {
  ChatGPTMessage,
  OpenAIStream,
  OpenAIStreamPayload,
} from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/message";

export async function POST(req: Request) {
  console.log("endpoint works");
  const { messages } = await req.json();

  const parsedMessges = MessageArraySchema.parse(messages); //making sure its is in the correct format

//   throw new Error('idk')

  const outboundMessages: ChatGPTMessage[] = parsedMessges.map((message) => ({
    role: message.isUserMessage ? "user" : "system",
    content: message.text,
  }));

  //because we gonna render out the message in the reverse order

  outboundMessages.unshift({
    role: "system",
    content: chatbotPrompt,
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
