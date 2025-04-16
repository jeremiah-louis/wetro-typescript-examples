import Wetrocloud from "wetro-sdk";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

const categorize = async () => {
// Categorize content
const response = await client.categorize({
    resource: "match review: John Cena vs. The Rock",
    type: "text",
    json_schema: { label: "string" },
    categories: ["wrestling", "entertainment", "sports", "news"],
    prompt: "Categorize the text to see which category it best fits"
  });
  
  console.log("Categorization:", response);  
}

categorize();