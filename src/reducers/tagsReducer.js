import { tagsConstants } from "../actions/constants"

const initialState = {
    bookmarks: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case tagsConstants.GET_BOOKMARKS:
            return {
                ...state,
                bookmark: action.payload,
                isLoading: false
            }
        case tagsConstants.ADD_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            }

        case tagsConstants.UPDATE_BOOKMARK:

        case tagsConstants.DELETE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => bookmark._id !== action.payload)
            }
        
        case tagsConstants.BOOKMARKS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        default: return state;
        
    }
}