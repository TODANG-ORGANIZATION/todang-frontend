// components/CommonButton.js
import React from "react";

const CommonButton = ({ text, onClick, variant = "primary" }) => {
  const buttonStyles = {
    primary: "bg-[#F78A16] hover:bg-[#e07c14] text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`w-full py-3 rounded-lg text-lg font-semibold transition ${buttonStyles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CommonButton;
