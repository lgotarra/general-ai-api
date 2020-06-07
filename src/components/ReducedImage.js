import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import "./ReducedImage.css";

const ReducedImage = (props) => {
  const [item, setItem] = useState(props.image);

  useEffect(() => {}, [props.image]);


  return (
    <>
      <Link to={"/image/" + item.id}>{item.title}</Link>
      <img
        src={item.url}
        style={{ height: "100%", maxHeight: "300px" }}
        alt={item.title}
      ></img>
      <h2>Tags</h2>
      <div>
        {item.data.map((result) => (
          <span key={result.id}>
            <strong>{result.name}</strong>: {result.value}
          </span>
        ))}
      </div>
    </>
  );
};

export default ReducedImage;
