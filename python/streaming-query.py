from wetro import Wetrocloud
from decouple import config

WETRO_SDK_KEY = config("WETRO_SDK_KEY")

# Access Modules
client = Wetrocloud(api_key=WETRO_SDK_KEY)
rag_client = client.rag

streaming_response = rag_client.collection.query(
    collection_id="jeremiah's-collection",
    request_query = "Give me a detailed summary of the article",
    stream=True
)

# Process streaming response
for chunk in streaming_response:
    print(chunk.response, end="")