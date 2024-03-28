import { Dispatch } from "react";

export interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export interface UserProfile extends User {
  html_url: string;
  type: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks: number;
  open_issues: number;
};

export type UserState = {
  users: User[];
  user: UserProfile | null;
  repos: Repo[];
  loading: boolean;
  dispatch?: Dispatch<UserActions>;
};

export type UserActions = UserActionTypeOnly | UserActionWithPayload;

export type UserActionTypeOnly = {
  type: "CLEAR_USERS";
};

export type UserActionWithPayload =
  | GetUsersAction
  | GetUserAndReposAction
  | SetLoadingAction;

type GetUsersAction = {
  type: "GET_USERS";
  payload: {
    users: User[];
  };
};

type GetUserAndReposAction = {
  type: "GET_USER_AND_REPOS";
  payload: {
    user: UserProfile;
    repos: Repo[];
  };
};

type SetLoadingAction = {
  type: "SET_LOADING";
  payload: {
    loading: boolean;
  };
};
