import React, { useState, useEffect } from "react";


export default function Image(props) {
  const [data, setData] = useState(props.image);

  useEffect(() => {
    setData(getData(props.image));
  }, [props]);

  return (
    <div>
      <h1>Result</h1>
      <ul>
        {data.data.outputs[0].data.concepts.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
