import React from 'react';

const Footer = () => {
  return (
    <div className='mb-5 mb-md-0' style={{ textAlign: 'center', padding: '1rem 0', background: '#f1f1f1' }}>
      <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </div>
  );
};

export default Footer;
