import Footer from "@/containers/footer/Footer";
import Header from "@/containers/header/Header";
import React from "react";

const FragmentLayout = ({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default FragmentLayout;
