// import React from 'react';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authentication (e.g., contacting an API)
    const { username, password } = formData;
    const isAuthenticated = await authenticateUser(username, password);

    if (isAuthenticated) {
      // If authentication is successful, navigate to the dashboard
      navigate('/dashboard');
    } else {
      // Handle authentication failure (e.g., show an error message)
      alert('Authentication failed. Please check your username and password.');
      
    }
  };
  const navigate = useNavigate();

  
  const authenticateUser = async (username, password) => {
    // Simulate authentication logic here (replace with actual logic)
    // You can use fetch or an API call to check the username and password
    // For simplicity, let's assume username "admin" and password "password" are valid
    return username === 'admin' && password === 'password';
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div class="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"  value={formData.username}
            onChange={handleChange} required></input>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password}
            onChange={handleChange} required></input>
            </div>
            <div class="form-group">
                <input type="submit"  value="Login"></input>
            </div>
        </form>
    </div>
      {/* Add your login form here */}
    </div>
  );
};

export default Login;