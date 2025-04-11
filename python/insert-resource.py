from wetro import Wetrocloud
from decouple import config

WETRO_SDK_KEY = config("WETRO_SDK_KEY")

# Access Module
client = Wetrocloud(api_key=WETRO_SDK_KEY)
rag_client = client.rag
 
# Create a collection
# rag_client.collection.create_collection_id(collection_id="jeremiah's-collection")

#Insert a Resource into a Collection
insert_response=rag_client.collection.insert(
  collection_id="Thomas Andre",
  resource="https://medium.com/@wetrocloud/why-legal-tech-needs-wetrocloud-ai-rag-and-the-future-of-legal-practice-66fb38c4df09", 
  type="web"
)

print(insert_response)
