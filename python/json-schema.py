from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")
# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)

# Define a JSON schema for structured output
json_schema = [{"topic": "", "description": ""}]

# Add processing rules
rules = "Give a very short description of every page on the document from"

# Query with structured output requirements
response = client.collection.query_collection(
    collection_id="louis",
    request_query="What is this about?",
    json_schema=json_schema,
    json_schema_rules=rules,
)
print(response)
