import React from "react";
import logohijau from "../../images/logohijauvoca.png";
import logoputih from "../../images/logoputihvoca.png";
import Image from "next/image";

const Logo = ({ width = 80 }) => {
   return (
      <div className="w-full max-w-full">
         <Image src={logoputih} width={width} height={140} />
      </div>
   );
};

export default Logo;
