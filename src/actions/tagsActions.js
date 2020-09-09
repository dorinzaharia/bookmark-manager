// External imports
import axios from "axios";

// Internal imports
import { apiHostname } from "../config";
import { tagsConstants } from "../actions/constants";

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

export const getTags = () => (dispatch) => {
    dispatch(setTagsLoading());
    axios
        .get(
            `${apiHostname}/users/${getUserId()}/tags`,
            createAuthConfigWithToken()
        )
        .then((response) =>
            dispatch({
                type: tagsConstants.GET_TAGS,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const addTag = (data) => (dispatch) => {
    const body = JSON.stringify(data);

    axios
        .post(
            `${apiHostname}/users/${getUserId()}/tags`,
            createAuthConfigWithToken(),
            body
        )
        .then((response) =>
            dispatch({
                type: tagsConstants.ADD_TAG,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const updateTag = (tagId, data) => (dispatch) => {
    const body = JSON.stringify(data);
    axios
        .patch(
            `${apiHostname}/tags/${tagId}`,
            createAuthConfigWithToken(),
            body
        )
        .then((res) =>
            dispatch({
                type: tagsConstants.UPDATE_TAG,
                payload: tagId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const deleteTag = (tagId) => (dispatch) => {
    axios
        .delete(`${apiHostname}/tags/${tagId}`, createAuthConfigWithToken())
        .then((res) =>
            dispatch({
                type: tagsConstants.DELETE_TAG,
                payload: tagId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const setTagsLoading = () => {
    return {
        type: tagsConstants.TAGS_LOADING,
    };
};
