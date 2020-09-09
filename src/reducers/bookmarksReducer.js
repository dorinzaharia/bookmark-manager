import { bookmarksConstants } from "../actions/constants"

const initialState = {
    bookmarks: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case bookmarksConstants.GET_BOOKMARKS:
            return {
                ...state,
                bookmark: action.payload,
                isLoading: false
            }
        case bookmarksConstants.ADD_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            }

        case bookmarksConstants.UPDATE_BOOKMARK:

        case bookmarksConstants.DELETE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => bookmark._id !== action.payload)
            }
        
        case bookmarksConstants.BOOKMARKS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        default: return state;
        
    }
}