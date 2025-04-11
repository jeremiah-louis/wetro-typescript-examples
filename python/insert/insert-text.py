from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)
    
# Insert text content into a Collection
insert_response = client.collection.insert_resource(
    collection_id="louis",
    resource="Rise of LLM models", 
    type="text"
)
    
print(insert_response)