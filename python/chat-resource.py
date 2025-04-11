from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)

# Create a chat history
chat_history = [
    {"role": "user", "content": "What is this collection about?"}, 
    {"role": "system", "content": "It stores research papers on AI technology."}
]

# Continue the conversation with context
chat_response = client.collection.chat(
    collection_id="louis",
    message="Can you explain the latest paper's methodology?",
    chat_history=chat_history
)

# Print the chat response
print(chat_response)