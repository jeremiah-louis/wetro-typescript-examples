import Wetrocloud from "wetro-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const API_SECRET = process.env.WETRO_API_KEY;

// Initialize Wetrocloud with your API secret
const wetrocloud = new Wetrocloud({ apiSecret: API_SECRET || "" });

// Define the schema for the data we want to extract
interface ArticleSchema {
    title: string;
    body: string;
    issues: string;
    issue_description: string;
}

// Wrap everything in an async function
const run = async () => {
    try {
        const website_url = "https://github.com/nodejs/node/issues/55417";
        const json_schema: ArticleSchema = {
            title: "",
            body: "",
            issues: "",
            issue_description: "",
        };

        // Extract data from website
        const response = await wetrocloud.extract<ArticleSchema>({
            website_url,
            json_schema
        });

        console.log("Extracted data:", response);
    } catch (error) {
        console.error("Error extracting data from website:", error);
    }
};

// Run the async function
run(); 