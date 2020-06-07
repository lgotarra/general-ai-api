import React, { useState } from "react";
import CustomLink from "./CustomLink";
import "./Image.css";
import logo from "../logo-picture.svg";

export default function Image(props) {
  const [image] = useState(props.image);

  return (
    <div className="ExtendedImage">
      <div className="stickyBar">
        <div>
          <CustomLink
            tag="div" // tag name
            to={"/"} // path
            className="returnHome" //className
            key="returnHomeLink"
          >
            <img src={logo} className="returnHomeLogo" alt="Logo"></img>

            <h3>
              Go back <br></br>home
            </h3>
          </CustomLink>
        </div>
      </div>

      <div className="content">
        <h1>{image.title}</h1>
        <div className="result">
          <div className="image">
            <img src={image.url} alt={image.title}></img>
          </div>
          <div className="extendedTagList">
            <h2>Tags</h2>
            <ul>
              {image.data.map((result) => (
                <li key={result.id}>
                  <span className="tagName">
                    <strong>{result.name}</strong>
                  </span>{" "}
                  <span className="tagValue">{result.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
