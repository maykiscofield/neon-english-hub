import React from 'react';
import LoginLamp from '../components/landing/LoginLamp';

const LoginPage: React.FC = () => {
  return (
    <main style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#050505' }}>
      <LoginLamp />
    </main>
  );
};

export default LoginPage;