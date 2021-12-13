import React, { ReactNode } from 'react';

interface IButtonProps {
  children?: string | ReactNode;
  className?: string;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  className,
  primary,
  type,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={` text-white rounded-lg py-1 px-2 font-semibold transition duration-200 ${
        primary && 'bg-primary hover:bg-secondary'
      } text-lg ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
