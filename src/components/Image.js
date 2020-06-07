import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Image(props) {
  const [image, setData] = useState(props.image);


  return (
    <>
    <Link to="/">Home</Link>
    <img
        src={image.url}
        style={{ height: "100%", maxHeight: "300px" }}
        alt={image.title}
      ></img>
      <h2>Tags</h2>
      <div>
        {image.data.map((result) => (
          <span key={result.id}>
            <strong>{result.name}</strong>: {result.value}
          </span>
        ))}
      </div>
    </>
  );
}
