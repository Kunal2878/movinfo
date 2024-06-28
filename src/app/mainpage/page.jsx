'use client'
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../navbar/page';
import Link from 'next/link'
import Image from 'next/image'
function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlide2, setCurrentSlide2] = useState(1);
  const carouselRef = useRef(null);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (direction) => {
    const slideCount = slides.length;
    const newSlide = (currentSlide + (direction === 'prev' ? -1 : 1) ) % slideCount;

    setCurrentSlide(newSlide);
  };
  useEffect(() => {
  
    setVisibleMovies(
      slides.slice(currentIndex,currentIndex+3));
    },[currentIndex])

    useEffect(() => {
  if(currentIndex + 3 === slides.length)
    {
      setCurrentIndex(0)
    }
  const timer = setTimeout(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, 3000);

  return () => clearTimeout(timer);
}, [currentIndex])

const moveNext = () => {
  setCurrentIndex ((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));

    };
  
    const movePrev = () => {
      setCurrentIndex ((prevIndex) => Math.max(prevIndex - 1, 0));
   
    }
    
 
    const f_image=[{id:1,img:'/f_1.png'},{id:2,img:'/f_2.png'},{id:3,img:'/f_3.png'},{id:4,img:'/f_4.png'},{id:5,img:'/f_6.png'},]
  const slides = [
    { img: '/land1.jpg', alt: 'Image 1' },
    { img: '/land2.jpg', alt: 'Image 2' },
    { img: '/land3.jpg', alt: 'Image 3' },
    { img: '/land4.jpg', alt: 'Image 4' },
    { img: '/land5.jpg', alt: 'Image 5' },
    { img: '/land1.jpg', alt: 'Image 1' },
    { img: '/land2.jpg', alt: 'Image 2' },
    { img: '/land3.jpg', alt: 'Image 3' },
    
  ];
  const color=['bg-gradient-to-r from-gray-600 via-cyan-200 to-gray-700','bg-gradient-to-r from-gray-400 via-orange-200 to-gray-600', 'bg-gradient-to-r from-gray-400 via-orange-800 to-gray-600','bg-gradient-to-r from-gray-400 via-orange-400 to-gray-600','bg-gradient-to-r from-gray-600 via-blue-600 to-cyan-600','bg-gradient-to-r from-gray-400 via-orange-400 to-yellow-500','bg-gradient-to-r from-gray-400 via-orange-400 to-yellow-500','bg-gradient-to-r from-gray-400 via-orange-400 to-yellow-500']

  return (
    <div className={`w-full h-screen p-4 flex flex-col items-center ${color[currentIndex]} overflow-hidden 
    `
    }>
   <div className='w-full flex flex-row md:justify-center justify-start overflow-hidden md:hover:overflow-x-none hover:overflow-x-scroll pl-4 pr-4 text-[12px] text-yellow-300 mb-4'>
<Link href='/' className='w-1/4 md:w-1/6 flex flex-row justify-center items-center rounded-xl pt-2 pb-2 pl-4 pr-6 md:pr-4 bg-white text-black mr-4' >For You</Link>        
<Link href = '/movie_page' className='w-1/4 md:w-1/6 flex flex-row justify-center items-center  rounded-xl pt-2 pb-2 pl-4 pr-4 bg-gray-700 mr-4'>Movies</Link>        
<Link href = '/webseries' className='w-1/4 md:w-1/6 flex flex-row justify-center  items-center rounded-xl pt-2 pb-2 pl-4 pr-4 bg-gray-700 mr-4'>Webseries</Link>        
<Link href = '/anime_page' className='w-1/4 md:w-1/6 flex flex-row justify-center  items-center rounded-xl pt-2 pb-2 pl-4 pr-4 bg-gray-700 mr-4'>Anime</Link>        
<Link href = '/manga_page' className=' w-1/4 md:w-1/6 flex flex-row justify-center items-center  rounded-xl pt-2 pb-2 pl-4 pr-4 bg-gray-700 mr-4'>Manga</Link>        
        
 </div>

      <div className='w-full relative  scroll-smooth'>
        <div className='w-full flex flex-row justify-center items-center snap-x  '>
          {visibleMovies.map((slide, index) => (
            <img
              key={index}
              className={`${
                index ===  1 ? 'w-10/12 lg:w-3/4' : 'w-1/12 lg:w-1/6 scale-75'
              } lg:h-60 h-80 ml-4 aspect-w-3 aspect-h-4 snap-center rounded-lg object-cover transition duration-1000  ease-in-out transform-gpu`}
              src={slide.img}
              alt={slide.alt}
            />
          ))}
        </div>
        {/* Hide buttons on mobile devices using media queries */}
        <div className=' flex absolute top-1/2 justify-between w-full '>
          <button
            type="button"
            className=" ml-4 p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            onClick={() => {handleSlideChange('prev'); movePrev();}}
            aria-label="Previous slide"
          >
            <svg
              className="h-6 w-6 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 mr-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            onClick={() => {handleSlideChange('next'); moveNext();}}
            aria-label="Next slide"
          >
            <svg
              className="h-6 w-6 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6l-6-6" />
            </svg>
          </button>
        </div>
      </div>

    <div className=' relative w-full flex flex-row justify-center items-center h-30 mt-8 bg-black/50'

style={{zIndex:1000}}>
  {
    f_image.map((itr,index)=>(
      

<div className='w-1/3  lg:w-1/5 p-1'
style={{zIndex:1000}}
key={index}
>
<Image
unoptimized={true}
width={10}
height={10}
src={itr.img}
alt='loading...'
className='w-32 h-16'
/>
</div>
  
    ))
  }
</div>
<span className='w-full flex flex-row justify-center items-center bg-clip-text text-transparent text-[40px] font-800  setbg'>THE POMISE OF A CINEMATIC ADVENTURE</span>
    </div>
  );
}

export default LandingPage;
