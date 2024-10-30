// src/pages/Login/Login.tsx

import React, { useState } from 'react';
import './Login.css';
import Button from '../components/Button.tsx';
import Input from '../components/Input.tsx';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-page">
      <h1>Login to MindModel</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <Button label="Login" onClick={() => {}} primary />
      </form>
    </div>
  );
};

export default Login;
