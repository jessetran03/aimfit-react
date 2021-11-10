import React from 'react';

interface IInputProps {
  autoFocus?: boolean;
  className?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  autoFocus = false,
  className,
  placeholder,
  required = false,
  type = 'text',
  value,
  onChange,
}: IInputProps) => {
  return (
    <input
      autoFocus={autoFocus}
      className={`${className} border border-gray-400 rounded mb-2 px-2 py-1`}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
