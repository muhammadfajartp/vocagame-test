import ButtonUI from "@/components/button/ButtonUI";
import InputUI from "@/components/input/InputUI";
import React, { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
   useEffect(() => {
      const storedUsername = localStorage.getItem("usernamenya");
      console.log("Username from Local Storage:", storedUsername);
   }, []);

   return (
      <form className="flex flex-col justify-center items-center">
         <InputUI title={"Username"} type="text" />
         <InputUI title={"Password"} type="password" />
         <Link href="/profile" className=" pt-10">
            <ButtonUI title={"Masuk Sekarang"} />
         </Link>
      </form>
   );
};

export default LoginForm;
