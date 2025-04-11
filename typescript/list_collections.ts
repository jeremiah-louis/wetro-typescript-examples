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
        // List all collections
        const collections = await wetrocloud.listCollections();
        console.log("Available collections:", collections);
    } catch (error) {
        console.error("Error listing collections:", error);
    }
};

// Run the async function
run();
