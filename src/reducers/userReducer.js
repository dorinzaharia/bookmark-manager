import { userConstants } from "../actions/constants";

const initialState = {
  isAuth: false,
  token: localStorage.getItem("token"),
  isLoading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case userConstants.AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload
      };
    case userConstants.SIGNUP_SUCCESS:
    case userConstants.SIGNIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuth: true,
      };
    case userConstants.AUTH_FAILURE:
    case userConstants.SIGNUP_FAILURE:
    case userConstants.SIGNIN_FAILURE:
    case userConstants.SIGNOUT_SUCCESS:
        localStorage.removeItem("token");
        return {
            ...state,
            user: null,
            token: null,
            isAuth: false,
            isLoading: false,
        }
    case userConstants.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    default: return state;
  }
};
