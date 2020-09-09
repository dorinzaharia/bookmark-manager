// External imports
import axios from "axios";

// Internal imports
import { apiHostname } from "../config";
import { collectionsConstants } from "../actions/constants";

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

export const getCollections = () => (dispatch) => {
    dispatch(setCollectionsLoading());
    axios
        .get(
            `${apiHostname}/users/${getUserId()}/collections`,
            createAuthConfigWithToken()
        )
        .then((response) =>
            dispatch({
                type: collectionsConstants.GET_COLLECTIONS,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const addCollection = (data) => (dispatch) => {
    const body = JSON.stringify(data);

    axios
        .post(
            `${apiHostname}/users/${getUserId()}/collections`,
            createAuthConfigWithToken(),
            body
        )
        .then((response) =>
            dispatch({
                type: collectionsConstants.ADD_COLLECTION,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const updateCollection = (collectionId, data) => (dispatch) => {
    const body = JSON.stringify(data);
    axios
        .patch(
            `${apiHostname}/collections/${collectionId}`,
            createAuthConfigWithToken(),
            body
        )
        .then((res) =>
            dispatch({
                type: collectionsConstants.UPDATE_COLLECTION,
                payload: collectionId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const deleteCollection = (collectionId) => (dispatch) => {
    axios
        .delete(
            `${apiHostname}/collections/${collectionId}`,
            createAuthConfigWithToken()
        )
        .then((res) =>
            dispatch({
                type: collectionsConstants.DELETE_COLLECTION,
                payload: collectionId,
            })
        )
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const setCollectionsLoading = () => {
    return {
        type: collectionsConstants.COLLECTIONS_LOADING,
    };
};
