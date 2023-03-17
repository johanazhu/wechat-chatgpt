import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";
dotenv.config();

export const config: IConfig = {
  openai_api_key: process.env.OPENAI_API_KEY || "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",
  model: process.env.MODEL || "gpt-3.5-turbo",
  chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "",
  chatTiggerRule: process.env.CHAT_TRIGGER_RULE || "",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
};
