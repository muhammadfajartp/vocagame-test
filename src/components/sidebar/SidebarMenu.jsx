import React from "react";
import { IconContext } from "react-icons";
import { BsPeople } from "react-icons/bs";

const SidebarMenu = () => {
   return (
      <>
         <div className=" w-100 max-h-36 no-underline flex flex-row justify-start items-center ps-8 py-2">
            <IconContext.Provider value={{ size: "20" }}>
               <BsPeople /> <span className="ps-2">Users</span>
            </IconContext.Provider>
         </div>
      </>
   );
};

export default SidebarMenu;
