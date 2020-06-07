import React, { useState, useEffect } from "react";
//import "./ReducedImage.css";

const ReducedImage = (props) => {
  const [item] = useState(props.image);

  useEffect(() => {}, [props.image]);

  return (
    <>
      <h1>{item.title}</h1>
      <img
        src={item.url}
        style={{ height: "100%", maxHeight: "300px" }}
        alt={item.title}
      ></img>
      <h2>Tags</h2>
      <div>
        {item.data.map((result) => (
          <span key={result.id} className="tag">
            {result.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default ReducedImage;
