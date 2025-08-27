import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800";

  const variantClasses = {
    primary: "primary-button",
    secondary:
      "bg-transparent border border-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 px-4 py-2.5 rounded-lg",
  };

  //   const primaryStyle = {
  //     display: "inline-flex",
  //     padding: "10px 19px",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     gap: "10px",
  //     borderRadius: "20px",
  //     border: "1.431px solid #FFF",
  //     background: "rgba(255, 255, 255, 0.06)",
  //     boxShadow: "0 5.723px 45.788px 0 rgba(0, 0, 0, 0.50)",
  //   };

  return (
    <button
      onClick={onClick}
      className="primary-button"
      //   style={variant === "primary" ? primaryStyle : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
