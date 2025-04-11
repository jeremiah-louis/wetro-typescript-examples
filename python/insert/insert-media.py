from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)
    
# Insert a media file into a Collection
insert_response = client.collection.insert_resource(
    collection_id="louis",
    resource="https://res.cloudinary.com/dxcb59rb3/video/upload/v1744140560/PodcastingHouse-20181018-TheBriefingRoom_z6kfeq.mp3", 
    type="audio"
)
        
print(insert_response)