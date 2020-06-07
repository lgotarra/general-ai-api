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
};

const useGetStates = () => {
  const imagesState = useSelector((state) => state.images);
  const loadingState = useSelector((state) => state.loading);
  return [imagesState, loadingState];
};

const App = () => {
  //useLoadDefaultImages(images);
  const [images, loading] = useGetStates();

  if (images.length !== 0) {
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
  if (loading) {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <p>Loading...</p>
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
        <AddImage />
      </main>
    </>
  );
};

export default App;
