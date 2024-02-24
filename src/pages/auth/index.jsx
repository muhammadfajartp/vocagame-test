import LoginForm from "@/containers/form/LoginForm";
import RegisterForm from "@/containers/form/RegisterForm";
import SliderHorizontal from "@/containers/slider/SliderHorizontal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Auth = () => {
   const { username, nomorhp, password } = useSelector((state) => state.users);
   const [selectedForm, setSelected] = useState(true);
   const changeForm = () => {
      setSelected(!selectedForm);
   };
   return (
      <>
         <div className="flex flex-col sm:flex-row w-100 min-h-screen">
            <div className="flex justify-center items-center w-full sm:w-1/2 bg-custom-green">
               <SliderHorizontal />
            </div>
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 sm:py-4">
               <div className="w-100 h-3/4 flex flex-col justify-evenly">
                  <div className="w-full text-center">
                     <h1 className="text-lg sm:text-3xl  font-extrabold tracking-tight">Silahkan Login {username}</h1>
                     <h5 className=" text-xs sm:text-sm font-light pt-2">Masukan username dan password anda untuk masuk</h5>
                  </div>
                  {selectedForm ? <LoginForm /> : <RegisterForm />}
                  <p className="text-center text-xs sm:text-sm font-light">
                     {selectedForm ? "Belum Punya Akun " : "Sudah Punya Akun ? "}
                     <span onClick={changeForm} className="text-center text-xs sm:text-sm font-semibold">
                        {selectedForm ? "Daftar Sekarang" : "Login Sekarang"}
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Auth;
