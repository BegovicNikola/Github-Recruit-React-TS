import { Link } from "react-router-dom";

import { User } from "../../types/user";

type UserItemProps = {
  user: User;
};

const UserItem = ({ user: { login, avatar_url } }: UserItemProps) => {
  return (
    <div className="side card compact bg-base-100 shadow-md">
      <Link to={`/user/${login}`}>
        <div className="card-body flex-row items-center space-x-4">
          <div className="avatar">
            <div className="h-14 w-14 rounded-full shadow">
              <img src={avatar_url} alt={`Profile image of ${login}`} />
            </div>
          </div>
          <h2 className="card-title">{login}</h2>
        </div>
      </Link>
    </div>
  );
};

export default UserItem;
