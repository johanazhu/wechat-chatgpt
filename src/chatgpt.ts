import {config} from "./config.js";

let apiKey = config.openai_api_key;
let model = config.model;
let api = config.openai_proxy;
const sendMessage = async (message: string) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            "role": "user",
            "content": message
          }
        ],
        temperature: 0.6
      }),
    });
    return response.json()
      .then((data) => data.choices[0].message.content);
  } catch (e) {
    console.error(e)
    return "Something went wrong"
  }
}

export {sendMessage};