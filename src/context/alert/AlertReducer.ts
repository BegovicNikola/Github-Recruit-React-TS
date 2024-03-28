import { AlertState, AlertActions } from "../../types/alert";

const alertReducer = (state: AlertState, action: AlertActions): AlertState => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
