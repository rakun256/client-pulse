import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', background: '#f6f9fc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </div>
  );
};

export default AuthLayout;
