import {
  ParsedEvent,
  ReconnectInterval,
  createParser,
} from "eventsource-parser";

export type ChatGPTAgent = "user" | "system"; //open AI sets enforcing this when you make a api req to them d

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder(); //encodes text
  const decoder = new TextDecoder(); // to decode the text that comes fromthe open AI stream, that is not  atext its a buffer

  let counter = 0; //iterator
  // we gotta pass the payload to open AI to generate the output

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, //your open ai key, if not passed all your requests will fail with status code of 401 unauthorized
    },
    body: JSON.stringify(payload),
  });

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            // if its done then we need to close the whole readable stream and we do that saying the controller
            controller.close();
            return; //return to any futher code execution;
          }

          // if the data is not done, if there is an actual readable stream we want to read
          try {
            const json = JSON.parse(data);
            console.log("json", json);
            const text = json.choices[0].delta?.content || ""; //convert this json into a regular string and making sure if its not undefined
            console.log("text", text);
            // if this text is prefix charcter ie new line - \n. Matching it with regex
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }

            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse); // creating the instance of the parser
      //this is to turn the openAI stream into actual text into a straing so that we can display it
      // res.body we it from the above fetch request
      // the res.body is gonna be readble stream as we have passed stream: true in the payload
      // we are splitting into small chunks
      // https://web.dev/streams/#asynchronous-iteration
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
}

// The eventsource-parser => You create an instance of the parser, and feed it chunks of data - partial or complete,
// and the parse emits parsed messages once it receives a complete message
// openai - sends chunks of strings itself
