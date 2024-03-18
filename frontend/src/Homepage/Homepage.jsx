import { PropTypes } from "prop-types";
import { getInitials } from "../utils/getInitials";
import Navbar from "./components/Navbar";

function Homepage({ currentUser }) {
  const userInitials = getInitials(`${currentUser.username}`);
  return (
    <>
      <section>
        <p>Wellcome to the homepage {currentUser.username}</p>
        {userInitials ? (
          <div className="initials-circle">
            {getInitials(`${currentUser.username}`)}
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <Navbar></Navbar>
      </section>
    </>
  );
}

Homepage.propTypes = {
  currentUser: PropTypes.Object,
};

export default Homepage;
