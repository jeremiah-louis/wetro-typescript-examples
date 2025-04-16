import dotenv from "dotenv";
import Wetrocloud from "wetro-sdk";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

// Create chat history
const chatHistory = [
  { role: "user", content: "What is this collection about?" },
  { role: "system", content: "It stores research papers on AI technology." }
];

const chatCollection = async () => {
  const response = await client.chat({
    collection_id: "kunle-badmus",
    message: "Can you explain the latest paper's methodology?",
    chat_history: chatHistory
  });

  console.log("Chat response:", response);
};

chatCollection();