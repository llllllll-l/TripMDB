import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //validationchecks:
    //validationcheck for email
    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);
    const emailError = isEmailValid ? '' : 'Email must be a valid email address (e.g., contain @ and end with .com)';


    //validationcheck for username
    const isUsernameValid = username.length >= 3;
    const usernameError = isUsernameValid ? '' : 'Username must be at least 3 characters long';

    //validationcheck for password
    const isPasswordValid = 
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const passwordError = isPasswordValid ? '' : 'Password must be at least 8 characters long and contain one uppercase letter and one number';
    
    //registration logic: 
    if ( isEmailValid && isUsernameValid && isPasswordValid )
        {
        console.log('Email', email);
        console.log('Username: ', username);

            //try post request to API
            try {
              const response = await fetch(
                "http://localhost:5191/authentication/register",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ username, email, password }),
                }
              );
        
              const data = await response.json();
              console.log(data);
            } catch (er) {
              console.error("OBS!!! Something went wrong trying to log in: ", er);
            }

        //redirect to login page
        navigate('/');
        } else{ //log that validation failed
            console.log('validation failed');
            const errorMessage = [emailError, usernameError, passwordError].filter(Boolean).join('. ');
            setError(errorMessage);
        }
  }

  return (
    <>
      <h1>Signup!</h1>
      <h2>Please fill in your credentials below to register for TripMDB:</h2>
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
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default RegisterPage