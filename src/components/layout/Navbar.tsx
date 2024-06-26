import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ title }: { title: string }) => {
  return (
    <nav className="navbar mb-12 bg-neutral text-white shadow-lg">
      <div className="container mx-auto">
        <div className="mx-2 flex-none px-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="align-middle text-lg font-bold">
            {title}
          </Link>
        </div>

        <div className="mx-2 flex-1 px-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
