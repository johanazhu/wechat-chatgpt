import {config} from "./config.js";

let apiKey = config.openai_api_key;
let model = config.model;
const sendMessage = async (message: string) => {
  console.log('fetch', fetch)
  try {
    const response = await fetch(`https://service-5lfbw1xe-1254022834.hk.apigw.tencentcs.com/v1/chat/completions`, {
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