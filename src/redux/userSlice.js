import { api } from "../utils/index";

const init = {
  load: true,
  data: [],
  error: null,
};

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: "USER_INIT" });
    try {
      const response = await api.get("/users");
      dispatch({ type: "USER_SUCCESS", payload: { data: response.data } });
    } catch (error) {
      dispatch({ type: "USER_FAILED", payload: { error: error.message } });
    }
  };
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case "USER_INIT":
      return {
        ...state,
        load: true,
        error: null,
      };

    case "USER_SUCCESS":
      return {
        ...state,
        load: false,
        data: action.payload.data,
      };

    case "USER_FAILED":
      return {
        ...state,
        load: false,
        data: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default userReducer;
