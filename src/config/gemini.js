import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


// Initialize with your API key
const genAI = new GoogleGenerativeAI(`${API_KEY}`);

async function runChat(prompt) {
  // Choose a model like "gemini-1.5-pro" or "gemini-1.5-flash"
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Send your prompt
  const result = await model.generateContent(prompt);

  // Extract and print response
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;
