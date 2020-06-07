import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/actions/images";
import "./AddImage.css";

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
      addImage({ url, title });
      setUrl("");
      setTitle("");
    }
  };

  return (
    <form onSubmit={onSubmit} className="EvaluateForm">
      <span>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Set a title for your image"
          onChange={(e) => setTitle(e.target.value)}
        />
      </span>
      <span>
        <label>URL</label>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="Set the URL of your image"
          onChange={(e) => setUrl(e.target.value)}
        />
      </span>

    <span>
      <br></br>
      <input type="submit" value="Evaluate" className="submit"/>
      </span>
    </form>
  );
};

export default AddImage;
