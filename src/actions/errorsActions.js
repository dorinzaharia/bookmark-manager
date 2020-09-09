// Internal imports
import { errorsConstants } from "../actions/constants";

export const setErrors = (message, status) => {
  return {
    type: errorsConstants.SET_ERRORS,
    payload: { message, status },
  };
};

export const clearErrors = () => {
  return {
    type: errorsConstants.CLEAR_ERRORS,
  };
};
