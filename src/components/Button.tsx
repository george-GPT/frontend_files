// src/components/Button/.tsx

import React from 'react';
import './Button.css';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    primary?: boolean;  // or whatever other props you use
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick, primary }) => {
    return (
      <button className={primary ? 'primary' : 'secondary'} onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;
  