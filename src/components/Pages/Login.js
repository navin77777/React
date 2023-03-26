import React from 'react';
import './Login.css'; // import the stylesheet for the login card

export const Login = () => {
  return (
    <div className='card-container'>
    <div className="login-card">
      <div className="card-header">
        <h2>Sign In</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};


