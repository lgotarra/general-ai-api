import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadImage } from "./redux/actions/images";
//import "./App.css"
import logo from "./logo.svg";
import ImageList from "./components/ImageList";
import AddImage from "./components/AddImage";
import images from "./images";


// Hook for loading some example images.
const useLoadDefaultImages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    for (let item of images.images) {
      dispatch(loadImage(item));
    }
  }, [dispatch]);
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
          <AddImage />
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
        <h1> Insert your first image </h1>
      </main>
    </>
  );
};

export default App;
