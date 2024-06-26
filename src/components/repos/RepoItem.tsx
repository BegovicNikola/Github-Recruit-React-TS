import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import { Repo } from "../../types/user";

const RepoItem = ({ repo }: { repo: Repo }) => {
  const {
    name,
    html_url,
    description,
    stargazers_count,
    watchers_count,
    forks,
    open_issues,
  } = repo ?? {};

  return (
    <div className="card mb-2 rounded-md bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="mr-1 inline" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="badge badge-info badge-lg mr-2">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="badge badge-success badge-lg mr-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg mr-2">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="badge badge-warning badge-lg mr-2">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
