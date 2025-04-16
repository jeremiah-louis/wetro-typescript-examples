import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the main client and access modules
const client = new Wetrocloud({
  apiKey: API_SECRET
});

const createCollection = async () => {
  // Create a new collection
  const collection_id = "kunle-badmus";
  await client.createCollection({ collection_id });

  console.log("Collection created successfully");
};

createCollection();
