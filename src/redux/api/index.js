import Clarifai from "clarifai";
require("dotenv").config();

// Get my API key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;
// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({ apiKey: API_KEY });

const _apiCall = async (image) => {
  const response = await await app.models.predict(
    Clarifai.GENERAL_MODEL,
    image
  );
  const result = await response;
  return result;
};

export const loadImage = (image) => _apiCall(image);



export default {
  loadImage,
};