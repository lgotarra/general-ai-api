import React, { useState, useEffect } from "react";
import Clarifai from "clarifai";
require("dotenv").config();

// Get my API key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;
// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({ apiKey: API_KEY });

export default function Item(props) {
  const [data, setData] = useState({
    outputs: [{
      data: { concepts: [{ id: "none", name: "none", value: "none" }] },
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      // Predict the contents of an image by passing in a URL.
      const response = await app.models.predict(
        Clarifai.GENERAL_MODEL,
        props.img_url
      );
      setData(response);
    };
    fetchData();
  }, [props.img_url]);

  console.log(data);

  return (
    <div>
      <h1>Result</h1>
      <ul>
        {data.outputs[0].data.concepts.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
