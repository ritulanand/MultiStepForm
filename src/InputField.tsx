import React from 'react';


type InputFieldProps = {
  id: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  error?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  name,
  onChange,
  value,
  label,
  error,
}) => {
  return (
    <div>
      <label>
        {label} &nbsp;
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <p style={{ color: 'red', fontSize: 12 }}>{error}</p>
      </label>
    </div>
  );
};
