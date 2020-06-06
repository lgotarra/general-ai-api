import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/actions/images";
//import "./AddImage.css";

const useAddImage = () => {
  const dispatch = useDispatch();
  return [(image) => dispatch(addImage(image))];
};

const AddImage = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [addImage] = useAddImage();
  
  const onSubmit = (e) => {
      e.preventDefault();
      if (url && title) {
          addImage({url, title});
          setUrl("")
          setTitle("")
      }
  }

  return (
    <form onSubmit={onSubmit}>
    <p>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input type="submit" value="Add Image" />
    </p>
  </form>
  )
};

export default AddImage;
