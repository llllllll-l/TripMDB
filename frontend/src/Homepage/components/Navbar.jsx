import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

function Navbar({ userInitials, isAdmin }) {
  const [IsAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isAdmin === 0) {
      setIsAdmin(true);
    }
  }, [isAdmin]);
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
        {IsAdmin ? (
          <li>
            <Link to="/authentication/users">
              <span className="material-symbols-outlined">group</span>
              Users
            </Link>
            <Link to="/authentication/movies">
              <span className="material-symbols-outlined">movie</span>
              Movies
            </Link>
          </li>
        ) : (
          <></>
        )}
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
  isAdmin: PropTypes.number,
};

export default Navbar;
