import { 
    LOG_IN,
    LOG_OUT,
 } from "../actions/authAcitons";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;

    case LOG_OUT:
      return {};

    default:
      return state;
  }
};
