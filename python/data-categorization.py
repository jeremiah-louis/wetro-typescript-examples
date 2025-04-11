from wetro import Wetrocloud
from decouple import config

WETRO_API_KEY = config("WETRO_API_KEY")

# Initialize the Wetrocloud client
client = Wetrocloud(api_key=WETRO_API_KEY)

# Categorize content
categorize_response = client.categorize(
    resource="match review: John Cena vs. The Rock.",
    type="text",
    json_schema={"label": "string"},
    categories=["wrestling", "entertainment", "sports", "news"],
    prompt="Categorize the text to see which category it best fits"
)

print(categorize_response)
print("\nThe text is categorized as:", categorize_response.response["label"])