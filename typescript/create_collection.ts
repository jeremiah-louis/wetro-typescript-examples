import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize Wetrocloud with your API secret
const wetrocloud = new Wetrocloud({ apiSecret: API_SECRET || "" });

// Wrap everything in an async function
const run = async () => {
  // Set the collection ID
  const collection_id = "Kunle-badmus";

  // Create a new collection
  await wetrocloud.createCollection({ collection_id });

  console.log("Collection created successfully");
};

// Run the async function
run();
