import types from "../actions/types";

const initialState = {
  images: [],
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_DATA:
    case types.ADDING_IMAGE: {
      return {
        ...state,
        imagesLoading: true,
        error: null,
      };
    }
    case types.DATA_LOADED:
    case types.ADDITION_SUCCEDED: {
      return {
        ...state,
        images: [...state.images, action.payload],
        imagesLoading: false,
        error: null,
      };
    }
    case types.ERROR_LOADING_DATA:
    case types.ADDITION_FAILED: {
      return {
        ...state,
        imagesLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
