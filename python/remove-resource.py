from wetro import Wetrocloud
from decouple import config

WETRO_SDK_KEY = config("WETRO_SDK_KEY")

# Access Modules
client = Wetrocloud(api_key=WETRO_SDK_KEY)
rag_client = client.rag

# Create a collection
# rag_client.collection.create_collection(collection_id="research_paper")

# Insert a web resource
insert_response = rag_client.collection.insert(
    collection_id="jeremiah's-collection",
    resource="https://medium.com/@wetrocloud/why-legal-tech-needs-wetrocloud-ai-rag-and-the-future-of-legal-practice-66fb38c4df09", 
    type="web"
)

# Delete the resource from the collection
delete_response = rag_client.collection.delete_resource(
    collection_id="jeremiah's-collection",
    resource_id=insert_response.resource_id
)
print(delete_response)