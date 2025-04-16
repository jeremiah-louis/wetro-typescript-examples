import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

// Get all collections
const listCollections = async () => {
  const response = await client.listCollections();
  console.log("Available collections:", response);
};

listCollections();
