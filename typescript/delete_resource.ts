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
        const collection_id = "my-collection";
        const resource_id = "resource-id-to-delete";

        // Delete a resource from the collection
        const response = await wetrocloud.deleteResource({
            collection_id,
            resource_id
        });

        console.log("Resource deleted successfully:", response);
    } catch (error) {
        console.error("Error deleting resource:", error);
    }
};

// Run the async function
run();
