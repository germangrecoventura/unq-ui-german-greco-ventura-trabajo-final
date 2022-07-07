import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>404</h1>
        <p>
          <span className="text-danger">Oh!</span> Page not found.
        </p>
        <p className="lead">The requested URL was not found on our server.</p>
        <Link to="/">
          <button className="return-main-menu">Go to the homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
