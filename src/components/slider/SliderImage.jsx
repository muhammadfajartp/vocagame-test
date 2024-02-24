import Image from "next/image";
import React from "react";
import gambar from "@/images/illustration.png";

const SliderImage = () => {
   return (
      <div className="flex flex-col justify-center items-center gap-3 sm:w-48 md:w-64 lg:w-96 xl:w-128 h-auto p-3">
         <Image src={gambar} className="m-auto p-2" />
         <div className="text-center gap-1">
            <h1 className="text-lg sm:text-3xl font-bold">Lorem Ipsum</h1>
            <h5 className="">Dapatkan kode referral untuk menghasilkan keuntungan yang lebih dan raih berbagai macam hadiah fantastis!</h5>
         </div>
      </div>
   );
};

export default SliderImage;
