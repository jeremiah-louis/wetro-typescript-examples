from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)
    
# Insert a web resource into a Collection
insert_response = client.collection.insert_resource(
    collection_id="louis",
    resource="https://medium.com/@AlexanderObregon/a-brief-history-of-artificial-intelligence-1656693721f9#:~:text=In%20this%20article%2C%20we%20explore,learning%20are%20breaking%20new%20ground.", 
    type="web"
)
    
print(insert_response)