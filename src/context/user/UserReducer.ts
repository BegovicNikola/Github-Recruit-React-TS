import { UserState, UserActions } from "../../types/user";

const githubReducer = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.users || [],
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        users: [],
        user: action.payload.user || null,
        repos: action.payload.repos || [],
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        user: null,
        repos: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading || false,
      };
    default:
      return state;
  }
};

export default githubReducer;
