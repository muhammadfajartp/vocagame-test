import InputUI from "@/components/input/InputUI";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
const ProfileForm = () => {
   return (
      <>
         <form className="flex flex-col justify-center items-center">
            <InputUI title={"Nama Anda"} type="text" />
            <InputUI title={"Nomor Handphone"} type="text" />
            <InputUI title={"Password"} type="password" />
            <InputUI title={"Password"} type="password" />
            <div className="flex flex-row w-full  justify-start items-center pt-6">
               <button className="flex flex-row justify-center items-center text-center dtext-sm font-semibold border-none rounded-2xl p-3 bg-blue-100 max-w-36 max-h-36">
                  Edit Profile
                  <span>
                     <MdOutlineEdit size={20} />
                  </span>
               </button>
            </div>
         </form>
      </>
   );
};

export default ProfileForm;
