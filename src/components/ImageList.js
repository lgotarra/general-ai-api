import React, { useEffect } from "react";
//import "./ImageList.css";
import { useSelector } from "react-redux";
import ReducedImage from "./ReducedImage";
import CustomLink from "./CustomLink";

const useImageMethods = () => {
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
