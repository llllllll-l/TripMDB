import { useState } from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  const handleRegistre = () => {
    navigate("/register");
  };

  return (
    <div className="loginpage">
      <Card className="mx-auto mb-5 shadow-lg" style={{ width: '30vw' }}>
        <Card.Body>
           <Card.Title>
            <h3>Log in</h3>
            </Card.Title>
          <div className="mt-2 mb-2 mx-auto" style={{display: 'grid'}}>
          <p style={{textAlign: 'center'}}>Welcome back to TripMDB</p>
          <p style={{textAlign: 'center'}}>Your one stop trip shop!</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">Login</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <p>Not a member?</p>
          <Button onClick={handleRegistre}>Register</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func,
};

export default LoginPage;
