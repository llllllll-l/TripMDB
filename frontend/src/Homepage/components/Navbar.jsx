import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </li>
        <li>
          <Link to="/trips">
            <span className="material-symbols-outlined">flight</span>
          </Link>
        </li>
        <li>
          <Link to="/Comments">
            <span className="material-symbols-outlined">forum</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
