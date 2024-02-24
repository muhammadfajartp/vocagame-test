import React from "react";

const ButtonUI = ({ title }) => {
   return (
      <button type="submit" className="text-center text-sm font-semibold text-blue-900 border-none rounded-2xl p-3 bg-blue-100 sm:w-48 md:w-64 lg:w-96 xl:w-128 max-h-36">
         {title}
      </button>
   );
};

export default ButtonUI;
