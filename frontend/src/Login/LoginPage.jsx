import { useState } from "react";
import { PropTypes } from "prop-types";

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button>Register</button>
        </div>
      </form>
    </>
  );
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func,
};

export default LoginPage;
