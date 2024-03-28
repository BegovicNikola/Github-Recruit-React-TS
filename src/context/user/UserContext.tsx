import { createContext, useReducer, PropsWithChildren } from "react";
import githubReducer from "./UserReducer";

import { UserState } from "../../types/user";

const UserContext = createContext<UserState>({
  users: [],
  user: null,
  repos: [],
  loading: true,
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const initialState = {
    users: [],
    user: null,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
