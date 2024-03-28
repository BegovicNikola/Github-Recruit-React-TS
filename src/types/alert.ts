export type Alert = {
  type: string;
  message: string;
};

export type AlertState = {
  alert: Alert | null;
  setAlert?: (type: string, message: string) => void;
};

export type AlertActions = AlertActionTypeOnly | AlertActionWithPayload;

export type AlertActionTypeOnly = {
  type: "CLEAR_ALERT";
};

export type AlertActionWithPayload = {
  type: "SET_ALERT";
  payload: Alert;
};
