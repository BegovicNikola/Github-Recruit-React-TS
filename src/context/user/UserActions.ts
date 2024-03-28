// todo: create custom hook for redirecting and useNavigate
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// if (res.status === 404) {
//   navigate("/NotFound");
//   clearUsers();
//   setLoading(false);
//   return;
// }
import axios from "axios";

import { User, UserProfile, Repo } from "../../types/user";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const axiosUserInstance = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (searchValue: string) => {
  try {
    const params = new URLSearchParams({ q: searchValue });

    const response = await axiosUserInstance.get("/search/users", { params });
    return response.data.items as User[];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getUserAndRepos = async (name: string) => {
  const [user, repos] = await Promise.all([
    axiosUserInstance.get(`/users/${name}`),
    axiosUserInstance.get(`/users/${name}/repos`),
  ]);

  return { user: user.data, repos: repos.data } as {
    user: UserProfile;
    repos: Repo[];
  };
};
