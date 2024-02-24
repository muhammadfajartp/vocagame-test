import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SliderImage from "@/components/slider/SliderImage";

const SliderHorizontal = () => {
   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + "" + "</span>";
      },
   };

   return (
      <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]} centeredSlides={true} className="mySwiper w-100">
         <SwiperSlide className="py-8 flex justify-center items-center mx-auto">
            <SliderImage />
         </SwiperSlide>
         <SwiperSlide className=" py-8 flex justify-center items-center mx-auto">
            <SliderImage />
         </SwiperSlide>
      </Swiper>
   );
};

export default SliderHorizontal;
