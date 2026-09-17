from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from google import genai
from google.genai import types
import json
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise RuntimeError("GEMINI_API_KEY is not set")

client = genai.Client(api_key=api_key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROMPT = """You are Tailorina's garment analysis assistant.

Analyze the garment in the image.

Extract these six features: type, color, cut, sleeve, length, collar.

For each feature, internally estimate a confidence value from 0 to 100,
then calculate the arithmetic average of the six confidence values.

If a feature cannot be determined from the image, use "Unknown" and assign it a low confidence value.
"""

@app.get("/")
def home():
    return {"message": "Tailorina API is running"}

@app.get("/about")
def about():
    return {"name": "Tailorina", "version": "0.1"}

@app.post("/analyze")
async def analyze(image: UploadFile = File(...)):
    if not image.content_type or not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await image.read()

    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=[
                types.Part.from_bytes(data=image_bytes, mime_type=image.content_type),
                PROMPT,
            ],
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema={
                    "type": "object",
                    "properties": {
                        "type": {"type": "string"},
                        "color": {"type": "string"},
                        "cut": {"type": "string"},
                        "sleeve": {"type": "string"},
                        "length": {"type": "string"},
                        "collar": {"type": "string"},
                        "confidence": {"type": "number"},
                    },
                    "required": ["type", "color", "cut", "sleeve", "length", "collar", "confidence"],
                },
            ),
        )
        return json.loads(response.text)

    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))