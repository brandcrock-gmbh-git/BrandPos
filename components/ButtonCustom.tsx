
import React from 'react';

import Image from 'next/image';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  icon?: string; // Type for icon component
  iconPosition?: "left" | "right" | "rightRelative"; // Position of the icon
  variant?: "primary" | "secondary" | "danger" | "blueBtn"| "outline" | "TransparentBg" | "primaryBanner" | "primarySubmit"; // Color variants
  size?: "sm" | "md" | "lg" | "blueBtnMd" | "outlineBtnMd" | "TransparentMd" | "Bannermd"; // Size variants
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  ...rest
}) => {
  const baseStyles = "flex items-center transition-colors duration-300 relative";
  
  // Define variant styles
  const variantStyles = {
    primary: "bg-white text-blue-default justify-center rounded-full border-gray-100",
    primaryBanner: "bg-white text-blue-default justify-center rounded-full border-gray-100",
    primarySubmit: "text-white bg-blue-default justify-center rounded-full",
    secondary: "border border-gray-100 justify-center text-gray-100 rounded-full hover:border-gray-200 font-bold",
    danger: "bg-red-500 text-white hover:bg-red-600",
    blueBtn: "bg-blue-default text-white justify-center hover:bg-blue-default w-full",
    outline: "bg-white text-gray-100 rounded-full justify-center border border-gray-100 hover:bg-white",
    TransparentBg: "bg-white text-gray-100"
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-12 py-[10px] sm:px-14 sm:py-4 text-base font-bold",
    lg: "px-6 py-3 text-lg",
    Bannermd: "pl-10 pr-12 py-3 sm:pl-9 sm:pr-12 sm:py-4 text-base",
    blueBtnMd: "px-10 py-5 text-lg font-semibold rounded-[14px] w-full sm:min-w-[240px]",
    outlineBtnMd: "px-6 py-1 text-lg w-full sm:min-w-[240px]",
    TransparentMd: "bg-white text-gray-100"
    
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? "disabled:bg-gray-400 disabled:cursor-not-allowed relative" : ""}`}
      {...rest}
    >
      {/* Render icon based on position */}
      {Icon && iconPosition === "left" && <Image width={20} height={20} alt="Icon - BrandPos" src={Icon} className="mr-2 " />}
      {children}
      {Icon && iconPosition === "right" && <Image width={20} height={20} alt="Icon - BrandPos" src={Icon}  className="ml-2 absolute right-4" />}
      {Icon && iconPosition === "rightRelative" && <Image width={20} height={20} alt="Icon - BrandPos" src={Icon}  className="ml-2 relative" />}
    </button>
  );
};

export default Button;
