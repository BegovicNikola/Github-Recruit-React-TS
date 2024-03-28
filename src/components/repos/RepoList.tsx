import RepoItem from "./RepoItem";
import { Repo } from "../../types/user";

type RepoItemProps = {
  repos: Repo[];
};

const RepoList = ({ repos }: RepoItemProps) => {
  return (
    <div className="card rounded-lg bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title my-4 text-3xl font-bold">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
