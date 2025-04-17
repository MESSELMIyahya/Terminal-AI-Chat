import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "dotenv";
// config the .env
config();



// The AI Model

// *NOTE - You can use any AI model you prefer for my case I'm using the google generative AI with 'gemini-2.0-flash' model

export const AIModel = new ChatGoogleGenerativeAI({
  apiKey: process.env.MODEL_API_SECRET_KEY, // secret key
  model: "gemini-2.0-flash",
  maxOutputTokens: 2048,
  temperature: 0.6,
});
