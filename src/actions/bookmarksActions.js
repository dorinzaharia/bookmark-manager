// External imports
import axios from "axios";

// Internal imports
import { apiHostname } from "../config";
import { bookmarksConstants } from "../actions/constants";
import { setErrors } from "./errorsActions";

const getUserId = (getState) => {
    const userId = getState().user.user._id;
    return userId;
};

const createAuthConfigWithToken = (getState) => {
    const token = getState().user.token;
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
    }
};

export const getBookmarks = () => (dispatch) => {
    dispatch(setBookmarksLoading());
    axios
        .get(
            `${apiHostname}/users/${getUserId()}/bookmarks`,
            createAuthConfigWithToken()
        )
        .then((response) =>
            dispatch({
                type: bookmarksConstants.GET_BOOKMARKS,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const addBookmark = (data) => (dispatch) => {
    const body = JSON.stringify(data);

    axios
        .post(
            `${apiHostname}/users/${getUserId()}/bookmarks`,
            createAuthConfigWithToken(),
            body
        )
        .then((response) =>
            dispatch({
                type: bookmarksConstants.ADD_BOOKMARK,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const addTagToBookmark = (bookmarkId, tagId) => (dispatch) => {
    axios
        .patch(
            `${apiHostname}/bookmarks/${bookmarkId}/tags?tagId=${tagId}`,
            createAuthConfigWithToken()
        )
        .then((res) =>
            dispatch({
                type: bookmarksConstants.ADD_TAG_TO_BOOKMARK,
                payload: res.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const deleteTagFromBookmark = (bookmarkId, tagId) => (dispatch) => {
    axios
        .delete(
            `${apiHostname}/bookmarks/${bookmarkId}/tags?tagId=${tagId}`,
            createAuthConfigWithToken()
        )
        .then((res) =>
            dispatch({
                type: bookmarksConstants.DELETE_TAG_FROM_BOOKMARK,
                payload: res.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const updateBookmark = (bookmarkId, data) => (dispatch) => {
    const body = JSON.stringify(data);
    axios
        .patch(
            `${apiHostname}/bookmarks/${bookmarkId}`,
            createAuthConfigWithToken(),
            body
        )
        .then((res) =>
            dispatch({
                type: bookmarksConstants.UPDATE_BOOKMARK,
                payload: bookmarkId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const deleteBookmark = (bookmarkId) => (dispatch) => {
    axios
        .delete(
            `${apiHostname}/bookmarks/${bookmarkId}`,
            createAuthConfigWithToken()
        )
        .then((res) =>
            dispatch({
                type: bookmarksConstants.DELETE_BOOKMARK,
                payload: bookmarkId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const setBookmarksLoading = () => {
    return {
        type: bookmarksConstants.BOOKMARKS_LOADING,
    };
};
