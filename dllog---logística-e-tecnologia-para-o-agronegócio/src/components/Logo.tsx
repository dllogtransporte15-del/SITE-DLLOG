import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = "dark", showText = true }) => {
  const iconColor = "#a67c52"; // Bronze from Image
  const textColor = variant === "light" ? "#FFFFFF" : "#635a56"; // Grey from Image
  const accentColor = variant === "light" ? "rgba(255,255,255,0.6)" : "#9ba3af";

  return (
    <div className="flex items-center gap-3 group">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stylized DL Monogram - Refined for closer matching */}
          <path 
            d="M25 20V80H75V65H40V20H25Z" 
            fill={iconColor} 
          />
          <path 
            d="M25 20H55C75 20 75 55 55 55H25V20ZM40 33V42H50C58 42 58 33 50 33H40Z" 
            fill={iconColor}
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span 
            className="text-[22px] font-black tracking-tight uppercase"
            style={{ color: variant === "light" ? "#FFFFFF" : "#635a56" }}
          >
            DLLOG
          </span>
          <span 
            className="text-[9px] uppercase tracking-[0.4em] font-black"
            style={{ color: accentColor }}
          >
            TRANSPORTES
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
