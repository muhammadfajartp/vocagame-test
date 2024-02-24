import ButtonUI from "@/components/button/ButtonUI";
import SidebarMenu from "@/components/sidebar/SidebarMenu";
import SidebarTop from "@/components/sidebar/SidebarTop";
import { MdPersonPin } from "react-icons/md";
import React from "react";
const SidebarLayout = ({ children }) => {
   return (
      <div className="w-full min-h-100 mx-auto px-10 flex flex-col justify-center items-center my-5 ">
         <div className="w-full flex justify-center items-center bg-custom-green rounded-lg mb-5">
            <SidebarTop />
         </div>
         <div className="w-full h-max-40 flex flex-col sm:flex-row justify-between items-center bg-white rounded-t-lg pb-5 ">
            <div className="flex flex-row  justify-center items-center p-6">
               <MdPersonPin size={40} />
               <span>No Name</span>
            </div>
            <div className="flex flex-row  justify-center items-center p-6">
               <button className="text-center text-sm font-semibold text-blue-900 border-none rounded-2xl p-3 bg-blue-100 max-w-36 max-h-36">Edit Profile</button>
            </div>
         </div>
         <div className="w-full  min-h-5/6 flex flex-row justify-between items-center">
            <div className="w-0 sm:w-1/6 h-screen flex flex-col bg-white mx-auto">
               <div className="h-5/6">
                  <SidebarMenu />
                  <hr />
               </div>
               <div className="h-1/12 ">
                  <hr />
                  <SidebarMenu />
               </div>
            </div>
            <hr className=" border-2 border-solid h-full" />
            <div className="w-full sm:w-5/6 h-screen bg-white">{children}</div>
         </div>
      </div>
   );
};

export default SidebarLayout;
