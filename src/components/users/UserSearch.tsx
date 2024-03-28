import { useState, useContext, FormEvent } from "react";
import UserContext from "../../context/user/UserContext";
import { searchUsers } from "../../context/user/UserActions";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../utils/Alert";
import ErrorIcon from "../utils/Icons/ErrorIcon";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const { users, dispatch } = useContext(UserContext);
  const { alert, setAlert } = useContext(AlertContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchValue) {
      setAlert && setAlert("error", "Please enter something");
    } else {
      dispatch && dispatch({ type: "SET_LOADING", payload: { loading: true } });
      const users = await searchUsers(searchValue);
      // Should maybe throw for !users
      if (users) {
        dispatch && dispatch({ type: "GET_USERS", payload: { users } });
        setSearchValue("");
      }
    }
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        {alert && (
          // Extract toast alert to a separate component and have it use ErrorIcon and take in props for styling and svg logic
          <Alert>
            <div className="toast-error toast">
              <div
                role="alert"
                className={`alert flex alert-${alert.type} fixed bottom-14 right-5 w-64`}
              >
                <ErrorIcon />
                <span>{alert.message}</span>
              </div>
            </div>
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                className="input input-lg w-full bg-gray-200 pr-40 text-black"
              />
              <button
                type="submit"
                className="w36 btn btn-lg absolute right-0 top-0 rounded-l-none"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch && dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
