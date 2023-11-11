
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import 'swiper/css/fade';
import 'swiper/css/effect-fade';
import { Mousewheel, Pagination, Scrollbar,Autoplay,EffectFade } from 'swiper/modules';

const LandingPage = () => {
  return (
    <div className="w-sreen relative lg:max-h-50"style={{zIndex:'180'}}>
    <div className="w-sreen  bg-slate-600 " style={{maxWidth:'100vw'}}>
      <Swiper
        effect="fade"
        // direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
       
        modules={[ Pagination, Autoplay,EffectFade]}
        className=" w-screen  m-2"
        // style={{maxWidth:'200px'}}
      >

  
  <SwiperSlide>
    <img src="land1.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land2.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land3.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land4.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land5.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land6.jpg"/>
  </SwiperSlide>


       
  
      
        
      </Swiper>
    </div>
    <div className="absolute inset-0 flex justify-center items-center mb-20">

    <div className="w-3/2 h-1/2 mb-20 lg:mb-20" style={{maxWidth:'75vw'}}>
      <Swiper
        effect="fade"
        // direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
     
    
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
       
        modules={[ Pagination, Autoplay,EffectFade]}
        className=" w-11/12  m-2"
        // className="lg:w-1/2 lg:h-1/2 lg:max-w-50vw m-2"
        // style={{maxWidth:'200px'}}
      >

  <SwiperSlide>
    <img src="land1.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land2.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land3.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land4.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land5.jpg"/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="land6.jpg"/>
  </SwiperSlide>



       
  
      
        
      </Swiper>
      </div>
    </div>
    <div className="absolute inset-0 flex -space-x-2 overflow-hidden" style={{ zIndex: 100 }}>
  <div className="inline-block lg:h-60 lg:w-60 h-40 w-40 rounded-full bg-opacity-25   bg-gradient-to-r from-teal-400 to-gray-800" style={{opacity:'0.4' }}></div>
</div>

<div className="relative">
  <div className="absolute bottom-0 right-0 lg:h-60 lg:w-60 h-40 w-40 rounded-full bg-opacity-25 bg-gradient-to-r from-teal-400 to-gray-800" style={{ zIndex: 100, opacity: '0.4' }}></div>
</div>




    </div>
  );
};

export default LandingPage;
