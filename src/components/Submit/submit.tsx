import React from 'react';



type ButtonProps = {
  id: string;
  // Yes, this is a dirty cheat...
  onClick: any;
  label: string;
}

const Button = (props: ButtonProps) => {
  const {
          id,
          onClick,
          label,
        } = props;

  return (
    <button
      type="submit"
      id={id}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
