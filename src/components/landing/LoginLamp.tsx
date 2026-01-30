import React, { useState } from 'react';
import './LoginLamp.css';

const LoginLamp: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`login-screen ${isOn ? 'active' : ''}`}>
      <div className="login-modal">
        
        {/* Sol Taraf: Lamba Grubu */}
        <div className="lamp-side">
          <div className="lamp-content">
            <div className={`beam-light ${isOn ? 'show' : ''}`}></div>
            <svg viewBox="0 0 100 120" className="lamp-vector">
              <path className="head" d="M25,100 L75,100 L65,20 L35,20 Z" />
              <g className="face">
                <path d="M42,55 Q45,52 48,55" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M58,55 Q61,52 64,55" fill="none" stroke="#000" strokeWidth="2" />
                {isOn && <path className="lamp__tongue" d="M48,72 Q53,82 58,72 Z" fill="#ff4757" />}
              </g>
              <rect x="48" y="100" width="4" height="40" fill="#222" />
            </svg>
            <div className="pull-cord" onClick={() => setIsOn(!isOn)}>
              <div className="line"></div>
              <div className="knob"></div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Giriş Formu */}
        <div className="form-side">
          <div className="form-container">
            <h2>Welcome Back</h2>
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button className="login-btn">Login</button>
            <div className="form-footer">
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginLamp;