import { collectionsConstants } from "../actions/constants";

const initialState = {
  collections: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case collectionsConstants.GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false,
      };
    case collectionsConstants.ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.bookmarks, action.payload],
      };

    case collectionsConstants.UPDATE_COLLECTION:
      return {
        ...state,
        collections: state.collections.splice(
          state.collections.findIndex(
            (collection) => collection._id == action.payload.collectionId
          ),
          1,
          action.payload.collection
        ),
      };

    case collectionsConstants.DELETE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter(
          (collection) => collection._id !== action.payload
        ),
      };

    case collectionsConstants.LOADING_COLLECTIONS:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
