import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

// Query the collection
const queryResource = async () => {
  const response = await client.queryCollection({
    collection_id: "kunle-badmus",
    request_query: "What is the paystack website about?"
  });

  console.log("Query response:", response);
};

queryResource();
