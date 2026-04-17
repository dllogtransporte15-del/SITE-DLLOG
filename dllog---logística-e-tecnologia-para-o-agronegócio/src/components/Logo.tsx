import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img
      src="/logo.png"
      alt="DLLOG Logo"
      className="h-14 w-auto object-contain"
    />
  );
};

export default Logo;
