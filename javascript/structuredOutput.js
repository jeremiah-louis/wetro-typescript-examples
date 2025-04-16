import Wetrocloud from "wetro-sdk";
import dotenv from 'dotenv';

dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize the Wetrocloud client
const client = new Wetrocloud({
  apiKey: API_SECRET
});

const structuredOutput = async () => {
    const response = await client.queryCollection({
        collection_id: "kunle-badmus",
        request_query: "What are the sales trends for Q1?",
        json_schema: { month: "string", sales: "number" },
        json_schema_rules: "Extract monthly sales data"
      });   

      console.log("Query response:", response);
}

structuredOutput();