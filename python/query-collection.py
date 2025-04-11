from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config('WETRO_API_KEY')

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)

# Query the collection with streaming
streaming_response = client.collection.query_collection(
    collection_id="louis",
    request_query="What are the sales trends for Q1?",
    stream=True
)
  
# Process streaming response
for chunk in streaming_response:
    print(chunk.response, end="")