import React, { useEffect } from "react";
//import "./ImageList.css";
import { useDispatch, useSelector } from "react-redux";
import ReducedImage from "./ReducedImage";

const useImageMethods = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const loading = useSelector((state) => state.imagesLoading);
  const error = useSelector((state) => state.error);
  return [images, loading, error];
};

const ImageList = () => {
  const [images, loading, error] = useImageMethods();

  useEffect(() => {}, [images.length]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error.error.toString()}</div>;
  }

  return (
    <div>
      {images.map((item) => (
        <div className="reducedImage" key={item.id}>
          <ReducedImage image={item} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
