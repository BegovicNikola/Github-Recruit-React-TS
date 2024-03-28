import { useContext } from "react";
import UserContext from "../../context/user/UserContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import { User, UserState } from "../../types/user";

const UserResults = () => {
  const { users, loading } = useContext<UserState>(UserContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map(({ id, login, avatar_url }: User) => (
            <UserItem key={id} user={{ id, login, avatar_url }} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserResults;
