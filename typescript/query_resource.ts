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
        const request_query = "What is the main topic of the resources?";

        // Query resources from the collection
        const response: any = await wetrocloud.queryCollection({
            collection_id,
            request_query,
            // stream: true
        });

        console.log("Query response:", response);
        // for await (const chunk of response) {
        //     console.log(chunk.response);
        // }
    } catch (error) {
        console.error("Error querying resources:", error);
    }
};

// Run the async function
run();
