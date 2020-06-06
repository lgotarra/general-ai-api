import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImage } from "./redux/actions/images";
//import "./App.css"
import logo from "./logo.svg";
import ImageList from "./components/ImageList";
import images from "./images";

const useLoadDefaultImages = (images) => {
  const dispatch = useDispatch();
  useEffect(() => {
    for (let item of images.images) {
      dispatch(loadImage(item));
    }
  },[]);
  const imagesState = useSelector((state) => state.images);
  return imagesState;
};

const App = () => {
  const imagesState = useLoadDefaultImages(images);

  if (imagesState.length !== 0) {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <ImageList />
        </main>
      </>
    );
  }
  return (
    <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <p> Insert your firs image </p>
        </main>
      </>
  )
};

export default App;
