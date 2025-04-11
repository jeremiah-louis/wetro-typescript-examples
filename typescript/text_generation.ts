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
        const model = "gpt-4o";
        const messages: { role: "user" | "system" | "assistant"; content: string }[] = [
            { role: "user", content: "Tell me a joke about programming" }
        ];

        // Generate text
        const response = await wetrocloud.textGeneration({
            model,
            messages
        });

        console.log("Generated text:", response);
    } catch (error) {
        console.error("Error in text generation:", error);
    }
};

// Run the async function
run(); 