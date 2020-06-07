import React, { useState, useEffect } from "react";

const ReducedImage = (props) => {
  const [item] = useState(props.image);

  useEffect(() => {}, [props.image]);

  return (
    <>
      <h1>{item.title}</h1>
      <img
        src={item.url}
        alt={item.title}
      ></img>
      <h2>Tags</h2>
      <div className="tagList">
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
