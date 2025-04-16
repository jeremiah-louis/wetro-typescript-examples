import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the client
const client = new Wetrocloud({
  apiKey: API_SECRET,
});

const insertResource = async () => {
  // Insert a web resource
  const response = await client.insertResource({
    collection_id: "kunle-badmus",
    resource:"https://paystack.com/",
    type: "web",
  });

  console.log("Resource inserted:", response);
};

insertResource();
