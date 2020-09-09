// External imports
import axios from "axios";

// Internal imports
import { userConstants } from "./constants";
import { apiHostname } from "../config";
import { setErrors } from "./errorsActions";

const headers = {
    "Content-type": "application/json",
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

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: userConstants.USER_LOADING });
    const token = getState().user.token;

    if (token) {
        let jwtToken = {};
        jwtToken.raw = token;
        jwtToken.payload = JSON.parse(window.atob(token.split(".")[1]));
        const userId = jwtToken.payload.sub;

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        axios
            .get(`${apiHostname}/users/${userId}`, config)
            .then((response) => {
                dispatch({
                    type: userConstants.AUTH_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch(setErrors(error.response.data, error.response.status));
                dispatch({
                    type: userConstants.AUTH_FAILURE,
                });
            });
    } else {
        dispatch({
            type: userConstants.AUTH_FAILURE,
        });
    }
};

export const signUpUser = (user) => (dispatch) => {
    dispatch({ type: userConstants.USER_LOADING });

    const data = JSON.stringify(user);
    axios({
        method: "post",
        url: `${apiHostname}/users/signup`,
        headers: headers,
        data: data,
    })
        .then((response) => {
            dispatch({
                type: userConstants.SIGNUP_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
            dispatch({
                type: userConstants.SIGNUP_FAILURE,
            });
        });
};

export const signInUser = ({ email, password }) => (dispatch) => {
    dispatch({ type: userConstants.USER_LOADING });

    const data = JSON.stringify({ email, password });
    axios({
        method: "post",
        url: `${apiHostname}/users/signin`,
        headers: headers,
        data: data,
    })
        .then((response) => {
            dispatch({
                type: userConstants.SIGNIN_SUCCESS,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
            dispatch({
                type: userConstants.SIGNIN_FAILURE,
            });
        });
};

export const updateUser = (data) => (dispatch, getState) => {
    dispatch({ type: userConstants.USER_LOADING });

    const userId = getState().user.user._id;

    const body = JSON.stringify(data);

    axios({
        method: "patch",
        url: `${apiHostname}/users/${userId}`,
        headers: createAuthConfigWithToken(),
        data: body,
    })
        .then((response) => {
            dispatch({
                type: userConstants.UPDATE_USER,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch(setErrors(error.response.data, error.response.status));
        });
};

export const signOutUser = () => {
    return {
        type: userConstants.SIGNOUT_SUCCESS,
    };
};
