import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p className="quote">
        Evaluate your on images using the 'General' model from{" "}
        <a href="https://www.clarifai.com/">Clarifai</a> in less than a minute.
        Set a title for your image, set the URL and click 'Evaluate'.
        <br></br>
        <br></br>
        The 'General' model recognizes over 11,000 different concepts including
        objects, themes, moods, and more, with outputs in 23 different
        languages. This model is a great all-purpose solution for most visual
        recognition needs.
      </p>
    </header>
  );
};

export default Header;
