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
        const message = "What was the last thing you said";
        const chat_history: { role: "user" | "system"; content: string }[] = [
            { role: "user", content: "Hi there!" },
            { role: "system", content: "I am an AI assistant." },
            { role: "user", content: "Hello, how can you help me?" },
            { role: "system", content: "I can assist you with a variety of tasks, such as answering questions, providing information, helping with problem-solving, and offering recommendations. What do you need help with today?"}
        ];

        // Chat with the collection
        const response: any = await wetrocloud.chat({
            collection_id: collection_id,
            message: message,
            chat_history: chat_history,
        });

        console.log("Chat response:",response);
    } catch (error) {
        console.error("Error in chat:", error);
    }
};

// Run the async function
run();
