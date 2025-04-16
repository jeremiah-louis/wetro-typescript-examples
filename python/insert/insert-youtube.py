from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)
    
# Insert a YouTube video into a Collection
insert_response = client.collection.insert_resource(
    collection_id="Ai-agent",
    resource="https://youtu.be/zgrOwow_uTQ?si=cUvy5-Vspbm3opnV", 
    type="youtube"
)
    
print(insert_response)