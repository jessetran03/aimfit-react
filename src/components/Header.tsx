import React from "react";
import { Link } from "react-router-dom";

const Header = ({ className }: any) => {
  return (
      <Link to="/" className={`${className} flex justify-center items-center space-x-2 animation-none`}>
        <img src="/aimfit-icon.png" alt="Aimfit logo" className="w-8 h-8 rounded-md"></img>
        <div className="text-3xl">Aim<span className="font-semibold">Fit</span></div>
      </Link>
  );
};

export default Header;
