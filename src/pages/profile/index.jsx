import React from "react";
import ProfileForm from "@/containers/form/ProfileForm";
import SidebarLayout from "@/layouts/SidebarLayout";
import FragmentLayout from "@/layouts/FragmentLayout";
const Profile = () => {
   return (
      <>
         <FragmentLayout>
            <SidebarLayout>
               <div className="flex flex-row justify-center items-center w-100 min-h-screen border-2 border-solid rounded-xl">
                  <div className="w-100 h-100 flex flex-col justify-evenly">
                     <div className="pb-5">
                        <h1 className="text-3xl font-extrabold tracking-tight">Edit Profile</h1>
                     </div>
                     <ProfileForm />
                  </div>
               </div>
            </SidebarLayout>
         </FragmentLayout>
      </>
   );
};

export default Profile;
