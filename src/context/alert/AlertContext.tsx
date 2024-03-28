import { createContext, useReducer, PropsWithChildren } from "react";
import alertReducer from "./AlertReducer";

import { AlertState } from "../../types/alert";

const AlertContext = createContext<AlertState>({
  alert: null,
});

export const AlertProvider = ({ children }: PropsWithChildren) => {
  const initialState = { alert: null };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (type: string, message: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { type, message },
    });

    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
