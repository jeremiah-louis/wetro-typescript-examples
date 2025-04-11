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
        const resource = "This is a sample text about technology and innovation";
        const type = "text";
        const json_schema = { title: "", content: "" };
        const categories = ["technology", "sports", "entertainment", "news"];
        const prompt = "Categorize this text into the most appropriate category";

        // Categorize the resource
        const response = await wetrocloud.categorize({
            collection_id,
            resource,
            type,
            json_schema,
            categories,
            prompt
        });

        console.log("Categorization result:", response);
    } catch (error) {
        console.error("Error in categorization:", error);
    }
};

// Run the async function
run(); 