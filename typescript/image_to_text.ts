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
        const image_url = "https://res.cloudinary.com/dxcb59rb3/image/upload/v1744329254/hntyc3urv5jbuq4pbchu.jpg";
        const request_query = "What do you see in this image?";

        // Extract text from image
        const response = await wetrocloud.imageToText({
            image_url,
            request_query
        });

        console.log("Extracted text:", response);
    } catch (error) {
        console.error("Error extracting text from image:", error);
    }
};

// Run the async function
run(); 