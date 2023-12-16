// components/MovieCarousel.js
'use client'

import React, { useState, useEffect } from 'react';
const MovieCarousel = ({ movies }) => {
  const [searchResults, setSearchResults] = useState([]); // Results of the search
  const [isMovieOverviewVisible, setMovieOverviewVisible] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const toggleMovieOverview = (Movie) => {
    if (Movie.length === 0) {
      setSelectedMovie('No Data Available');
   
    
    } else {
      setSelectedMovie(Movie);
      console.log(Movie)
    }
  };
  const closeMovieOverview = () => {
    setSelectedMovie(null);
    const movieOverview = document.getElementById('movie-overview');
    if (movieOverview) {
      console.log(isMovieOverviewVisible,"display None");
      movieOverview.style.display = 'none';
    }
    setMovieOverviewVisible(false);


  };



  return (
    <div className='w-full overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>
    <div className="w-full carousel rounded-box" style={{ boxSizing:'border-box'}}>
      {movies.map((movie) => (
        <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">
          <div className="card w-96 lg:w-60 m-2">
            <figure className="flex flex-col shadow-2xl shadow-pink-500">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                className="w-96 relative"
                style={{ maxHeight: '200px' }}
                alt={movie.title}
              />
              <div className="avatar placeholder absolute w-full flex justify-end z-40 lg:mt-44 mt-36  ml-2">
                <div className="text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
                  <span className="text-sm font-black">⭐{movie.vote_average === 0 ? 5 : movie.vote_average}</span>
                </div>
              </div>
            </figure>

            <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
              <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
                <h4 className="flex justify-chiter font-semibold">
                  {truncateText(movie.title, 14)} {/* Adjust the number to control the truncation lhigth */}
                </h4>
                <h4 className="text-yellow-400 font-normal flex justify-chiter">📆 {movie.release_date}</h4>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(movie.overview)}>
                  Know more
                </button>
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
    {selectedMovie === 'No Data Available' ? (
  <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">No Data Avaiable</span></p>
    ) : (
      <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{selectedMovie}</span></p>
    )}



  </div>
)}

    </div>
    </div>
  );

  function truncateText(text, maxLhigth) {
    if (text.length > maxLhigth){
      return text.substring(0, maxLhigth) + '...';
    }
    return text;
  }
};

export default MovieCarousel;
