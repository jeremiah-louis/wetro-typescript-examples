from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Access Modules
client = Wetrocloud(api_key=WETRO_API_KEY)

# Create a collection
collection_id = client.collection.create_collection(
    collection_id="Freedom-Fighters"
)

print(collection_id)