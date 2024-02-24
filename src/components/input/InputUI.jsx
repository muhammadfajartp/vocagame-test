import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";

const InputUI = ({ title, type = "text", onChange, name }) => {
   const [pass, setPass] = useState(false);

   return (
      <div className="flex flex-col justify-start items-start gap-1 p-1">
         <p className="text-xs">{title}</p>
         <div className="relative flex justify-center items-center">
            {type === "text" ? <input type="text" name={name} onChange={onChange} className="bg-transparent focus:outline-none focus:ring focus:border-custom-green border-solid border border-gray-800 rounded-2xl p-3 pe-8 text-xs w-48 sm sm:w-64 md:w-64 lg:w-96 xl:w-128" /> : ""}
            {type === "password" ? <input type={pass ? "text" : "password"} name={name} onChange={onChange} className="bg-transparent focus:outline-none focus:ring focus:border-red-500 border-solid border border-gray-800 rounded-2xl p-3 pe-8 text-xs w-48 sm sm:w-64 md:w-64 lg:w-96 xl:w-128" /> : ""}
            {type === "number" ? <input type="number" name={name} onChange={onChange} className="bg-transparent focus:outline-none focus:ring focus:border-custom-green border-solid border border-gray-800 rounded-2xl p-3 pe-8 text-xs w-48 sm sm:w-64 md:w-64 lg:w-96 xl:w-128" /> : ""}
            {type === "password" ? (
               <span className="absolute right-2 cursor-pointer" onClick={() => setPass(!pass)}>
                  <MdRemoveRedEye size={20} />
               </span>
            ) : (
               ""
            )}
         </div>
      </div>
   );
};

export default InputUI;
