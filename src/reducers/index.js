// External imports
import { combineReducers } from "redux"

// Internal imports
import userReducer from "./userReducer"
import bookmarksReducer from "./bookmarksReducer"
import collectionsReducer from "./collectionsReducer"
import errorsReducer from "./errorsReducer"
import tagsReducer from "./tagsReducer"

export default combineReducers({
    user: userReducer,
    bookmarks: bookmarksReducer,
    collections: collectionsReducer,
    tags: tagsReducer,
    errors: errorsReducer
})