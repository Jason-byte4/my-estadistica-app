// app/components/ui/input.tsx
import React from 'react';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="border rounded px-2 py-1"
    />
  );
};

export default Input;
