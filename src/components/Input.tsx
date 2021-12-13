import React from 'react';

interface IInputProps {
  autoFocus?: boolean;
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  autoFocus = false,
  className,
  id,
  name,
  placeholder,
  required = false,
  type = 'text',
  value,
  onBlur,
  onChange,
}: IInputProps) => {
  return (
    <input
      autoFocus={autoFocus}
      className={`${className} border border-gray-400 rounded px-2 py-1`}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default Input;
