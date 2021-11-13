import React from 'react';

interface ISelectProps {
  autoFocus?: boolean;
  children?: JSX.Element;
  className?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const Select = ({
  autoFocus = false,
  children,
  className,
  required = false,
  value,
  onChange,
}: ISelectProps) => {
  return (
    <select
      autoFocus={autoFocus}
      className={`${className} border border-gray-400 rounded mb-2 px-2 py-1.5`}
      required={required}
      onChange={onChange}
      value={value}
    >
    {children}
    </select>
  );
};

export default Select;
