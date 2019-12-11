import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
        window.location.reload(false);
      })
      .catch(err => console.log(err));
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }
  return (
    <>
    {isLoading ? ( 'Loading...' ) : (
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <form>
          <label>Username</label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </form>
        <form>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </form>
        <button type="submit">Login</button>
      </form>
    )}
    </>
  )
}


export default Login;