import React from "react";
import { useSelector } from "react-redux";
import ImageList from "./ImageList";
import AddImage from "./AddImage";
import Header from "./Header";

const useGetStates = () => {
  const imagesState = useSelector((state) => state.images);
  const loadingState = useSelector((state) => state.loading);
  return [imagesState, loadingState];
};

const App = () => {
  const [images, loading] = useGetStates();

  if (images.length !== 0) {
    return (
      <>
        <Header />
        <main>
          <AddImage />
          <ImageList />
        </main>
      </>
    );
  }
  if (loading) {
    document.body.style.cursor = "wait";
    return (
      <>
        <Header />
        <main>
          <AddImage />
        </main>
      </>
    );
  }
  document.body.style.cursor = "default";
  return (
    <>
      <Header />
      <main>
        <AddImage />
      </main>
    </>
  );
};

export default App;
