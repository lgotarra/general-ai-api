import React from "react";
import { useSelector } from "react-redux";
import ReducedImage from "./ReducedImage";
import CustomLink from "./CustomLink";
import "./ImageList.css";

const useImageMethods = () => {
  const images = useSelector((state) => state.images);
  const loading = useSelector((state) => state.imagesLoading);
  const error = useSelector((state) => state.error);
  return [images, loading, error];
};

const ImageList = () => {
  const [images, loading, error] = useImageMethods();

  if (loading) {
    document.body.style.cursor = "wait";
  }

  if (error) {
    return <div>ERROR: {error.error.toString()}</div>;
  }

  document.body.style.cursor = "default";

  return (
    <div>
      {images.map((item) => (
        <CustomLink
          tag="div" // tag name
          to={"/image/" + item.id} // path
          className="reducedImage" //className
          key={item.id}
        >
          <ReducedImage image={item} />
        </CustomLink>
      ))}
    </div>
  );
};

export default ImageList;
