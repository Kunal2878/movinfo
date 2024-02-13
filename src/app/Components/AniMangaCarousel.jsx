// components/MovieCarousel.js
'use client'

import React, { useState, useEffect } from 'react';
const AniMangaCarousel = ({ animangas,type }) => {

  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleMangas, setVisibleMangas] = useState([]);
  const moveNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4 , animangas.length - 1));
    console.log(animangas.length)
    console.log(currentIndex)
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  }


  useEffect(() => {
  
      const isLargeScreen = window.innerWidth >= 640;
      setVisibleMangas(isLargeScreen ?
        animangas.slice(currentIndex, currentIndex + 5) : animangas);
  

 
  }, [animangas, currentIndex]);



  const toggleMovieOverview = (Movie) => {
    if (Movie.length === 0) {
      setSelectedMovie('No Data Available');
   
    
    } else {
      setSelectedMovie(Movie);
      
    }
  };
  const closeMovieOverview = () => {
    setSelectedMovie(null);




  };



  return (
    <div className='w-full overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>
       <div className="w-full flex justify-between mt-4">
     <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{fontFamily:'Old London'}}>{type}</span>
      <div className="hidden lg:flex lg:transition-opacity justify-end mr-40 ">
      {currentIndex !== 0 && (
 <button onClick={movePrev} disabled={currentIndex === 0} className='w-[40px] h-[40px] mr-20 rounded-full bg-gradient-to-r from-yellow-300 to-purple-600'>
 <img src="backward.svg" className='w-full' />
</button>
)}
      {currentIndex + 5 <= animangas.length && (
        <button onClick={moveNext} disabled={currentIndex + 5 >= animangas.length} className='w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'> <img src="forward_arrow.svg" className='w-full' /></button>
)}

       
        
      </div>
      </div>
    <div className=" w-full carousel rounded-box" style={{ boxSizing:'border-box'}}>

    {visibleMangas.map((Manga) => (
    <div key={Manga.id} className="carousel-item w-1/3 lg:w-1/5  overflow-none">
    
    <div className="card w-96 lg:w-60  m-2  ">
    <figure className="flex flex-col shadow-2xl shadow-cyan-500"><img src={Manga.coverImage.large} alt={Manga.title.english || Manga.title.romaji} className='w-96 relative' style={{ maxHeight: '200px' }} />
    <div className="avatar placeholder absolute w-full flex justify-end z-40 lg:mt-44 mt-36 ml-2">
    <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
    <span className="text-sm font-black">⭐{(Manga.averageScore / 10).toFixed(1)}</span>
    </div>
    </div>
    </figure>
    
    <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
    <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
    <h4 className="flex justify-center font-semibold">
    {truncateText(Manga.title.english || Manga.title.romaji, 14)}
    </h4>
    <h4 className="text-yellow-400 font-normal flex justify-center">📆{formatStartDate(Manga.startDate)}</h4>
    
    </div>
    <div className="card-actions justify-center">
    <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(Manga.description)}>Know more</button>
    </div>
    
    
    </div>
    </div>
    </div>
    
    
    ))}

{selectedMovie !== null && (
  <div className="w-10/12 lg:w-1/2 fixed  top-40 lg:top-20 left-10 flex flex-col items-center justify-center lg:ml-40 bg-gray-900 p-4 backdrop-filter backdrop-blur-md  rounded-md movie-overview" style={{zIndex:'200'}}>
     <div className="w-full flex flex-row justify-end">
            <button className="btn btn-circle btn-outline" onClick={closeMovieOverview}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
    {selectedMovie === 'No Information Available' ? (
  <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">No Data Avaiable</span></p>
  ) : (
      <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{(selectedMovie.includes('<br>') ? selectedMovie.substring(0, selectedMovie.indexOf('<br>')) : selectedMovie)} </span></p>
      )}



  </div>
)}
</div>
</div>
    

  );

  function formatStartDate(startDate) {
    if (startDate.year && startDate.month && startDate.day) {
      return `${startDate.year}-${startDate.month}-${startDate.day}`;
    } else {
      return 'N/A';
    }
  }

  function truncateText(text, maxLhigth) {
    if (text.length > maxLhigth){
      return text.substring(0, maxLhigth) + '...';
    }
    return text;
  }
};

export default AniMangaCarousel;
