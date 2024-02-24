import Logo from "@/components/logo/Logo";
import React from "react";

const Footer = () => {
   return (
      <footer className="w-100 h-48 flex flex-row justify-between items-center bg-custom-green">
         <div className="px-4 max-w-">
            <Logo width={140} />
         </div>
      </footer>
   );
};

export default Footer;
