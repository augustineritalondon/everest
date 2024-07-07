import React, { ReactNode } from "react";

const Button: React.FC<{ children: ReactNode; mode: any; className?: any }> = ({
  children,
  mode,
  className,
}) => {
  return (
    <div
      className={`${mode == "blue" && "bg-everest-blue-600 !px-2 text-[10px]"}
      ${mode == "dark" && " bg-everest-gray-950 !py-0 !pb-2 !px-0"}  
      text-white px-5 py-2 md:py-3 rounded-3xl text-center text-sm xl:text-base ${
        className && { className }
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
