import types from "./types";

import { v4 as uuidv4 } from "uuid";

export const addImage = (image) => async (dispatch, getState, api) => {
  const unusedID = uuidv4();
  dispatch({
    type: types.ADDING_IMAGE,
    payload: { id: unusedID, url: image.url, title: image.title },
  });
  try {
    const imageData = await api.loadImage(image.url);
    if (imageData.status.code !== 10000) {
      dispatch({
        type: types.ADDITION_FAILED,
        payload: { error: imageData.status },
      });
    } else {
      dispatch({
        type: types.ADDITION_SUCCEDED,
        payload: {
          id: unusedID,
          url: image.url,
          title: image.title,
          data: imageData.outputs[0].data.concepts,
        },
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: types.ADDITION_FAILED, payload: { error: e } });
  }
};

export const loadImage = (image) => async (dispatch, getState, api) => {
  const unusedID = uuidv4();
  dispatch({
    type: types.LOADING_DATA,
    payload: { id: unusedID, url: image.url, title: image.title },
  });
  try {
    const imageData = await api.loadImage(image.url);
    if (imageData.status.code !== 10000) {
      dispatch({
        type: types.ERROR_LOADING_DATA,
        payload: { error: imageData.status },
      });
    } else {
      dispatch({
        type: types.DATA_LOADED,
        payload: {
          id: unusedID,
          url: image.url,
          title: image.title,
          data: imageData.outputs[0].data.concepts,
        },
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: types.ERROR_LOADING_DATA, payload: { error: e } });
  }
};

