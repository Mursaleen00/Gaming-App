import React from "react";
interface ButtonProps {
  title: string;
}
function Button(props: ButtonProps) {
  const { title } = props;
  return (
    <button className="bg-btn-color md:px-10 px-6 py-2 rounded-full text-sm md:text-lg cursor-pointer">
      {title}
    </button>
  );
}

export default Button;
