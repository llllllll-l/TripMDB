import { useState } from 'react'
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email', email);
    console.log('Password', password);
  }

  return (
    <>
      <div className="card">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
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
          <Link to="/register">Not a user? Register here.</Link>
        </form>
      </div>
    </>
  )
}

export default LoginPage