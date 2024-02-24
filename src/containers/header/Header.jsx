import Logo from "@/components/logo/Logo";
import React from "react";

const Header = () => {
   return (
      <header className="relative top-0 w-100 h-20 flex flex-row justify-between items-center bg-custom-green shadow-md shadow-slate-400">
         <div className="px-4">
            <Logo />
         </div>
      </header>
   );
};

export default Header;
