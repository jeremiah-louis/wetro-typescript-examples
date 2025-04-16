import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET,
});

const streamResponse = async () => {
  // Query with streaming enabled
  const response = await client.queryCollection({
    collection_id: "kunle-badmus",
    request_query: "What are the sales trends for Q1?",
    stream: true,
  });

  // Process streaming response
  for await (const chunk of response) {
    console.log("Received chunk:", chunk.response);
  }
};

streamResponse();