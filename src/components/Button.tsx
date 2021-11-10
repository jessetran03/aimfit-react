import React from 'react';

interface IButtonProps {
  children?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, className, type, onClick }: IButtonProps) => {
  return (
    <button
      className={`${className} border border-black rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
