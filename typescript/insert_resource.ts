import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize Wetrocloud with your API secret
const wetrocloud = new Wetrocloud({ apiSecret: API_SECRET || "" });

// Wrap everything in an async function
const run = async () => {
  try {
    const collection_id = "Kunle-badmus";
    const resource = "This is a sample text resource";
    const type = "text";

    // Insert a resource into the collection
    const response = await wetrocloud.insertResource({
      collection_id,
      resource,
      type,
    });

    console.log("Resource inserted successfully:", response);
  } catch (error) {
    console.error("Error inserting resource:", error);
  }
};

// Run the async function
run();
