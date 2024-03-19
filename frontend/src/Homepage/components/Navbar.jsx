import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Navbar({ userInitials }) {
  return (
    <nav>
      {userInitials ? (
        <div className="initials-circle">{userInitials}</div>
      ) : (
        <div>Loading...</div>
      )}
      <ul>
        <li>
          <Link to="/home">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/trips">
            <span className="material-symbols-outlined">flight</span>
            Trip
          </Link>
        </li>
        <li>
          <Link to="/Comments">
            <span className="material-symbols-outlined">forum</span>
            Comments
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  userInitials: PropTypes.string,
};

export default Navbar;
