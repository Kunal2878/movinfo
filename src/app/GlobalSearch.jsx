'use client'
import React, { useState,useEffect } from 'react';

const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState('movie');
  const [close, setClose] = useState(null);

  const searchByTitle = async (title, category) => {
    switch (category) {
      case 'movie':
        return searchMovieByTitle(title);
      case 'ANIME'||'MANGA':
        return searchAniMangByTitle(title,category);
 
      default:
        console.error('Invalid search category');
        return null;
    }
  };

  const searchMovieByTitle = async (title) => {
console.log(title);
    const apiKey = 'f847d8a74355547b393b1921d50fb6aa';
    const tmdbEndpoint = 'https://api.themoviedb.org/3/search/movie';

    try {
      const response = await fetch(`${tmdbEndpoint}?api_key=${apiKey}&query=${title}`);
      const data = await response.json();


      return data.results.length > 0 ? data.results[0] : null;
    } catch (error) {
      console.error('Error searching for movies:', error);
      return null;
    }
  };

  const searchAniMangByTitle = async (title,category) => {
  

    const anilistEndpoint = 'https://graphql.anilist.co';
    console.log(title, category);
    try {
      const response = await fetch(anilistEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query {
            Page(page: 1, perPage: 100) {
              media(search: "${title}", type: ${category}) {
                id
                title {
                  romaji
                  english
                }
                startDate {
                  year
                  month
                  day
                }
                coverImage {
                  large
                }
                averageScore
                description
              }
            }
          }
        `,
        }),
      });

      const data = await response.json();

      return data.data.Page.media.length > 0 ? data.data.Page.media[0] : null;
    } catch (error) {
      console.error('Error searching for anime:', error);
      return null;
    }
  };


  const handleSearch = async () => {
    try {
      const result = await searchByTitle(searchQuery, selectedOption);
      console.log(result)
      if (result) {
        setSearchResult(result);
      } else {
        setSearchResult(null);
        setClose("notnull");
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };


  const closeMovieOverview = () => {


    setSearchResult(null);
    setClose(null);


  };  
  return (
    <div className='w-full block'>
    <div className='m-2 w-full p-4  flex justify-center items-center'>

  <div className=' w-full flex  justify-center'>
<div className=' flex justify-center items-center bg-gradient-to-r from-cyan-400 to-blue-500 w-1/4 mr-4 rounded-md'>
      

      <select className=" select-info w-full max-w-md bg-gradient-to-r from-cyan-400 to-blue-500" id="searchOption" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option disabled selected>Select Category</option>
        <option value="movie">Movie</option>
        <option value="ANIME">Anime</option>
        <option value="MANGA">Manga</option>
      </select>

    </div>

    <div className=" w-3/4 flex flex-row justify-center lg:gap-2">

<div className="w-11/12 lg:w-full">
<input
      type="text"
      placeholder="Enter title for movie,anime or manga here"
      className=" bg-gradient-to-r from-purple-600 to-black font-black input input-bordered input-info w-full"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{borderRadius:'40px'}}
    />
</div>
<button onClick={handleSearch} className="btn btn-ghost btn-circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
  </button> 

</div>
</div>













  







{
              close !==null && (
              <div className="w-10/12 lg:w-1/3 fixed  top-40 lg:top-20 left-10 flex flex-col  items-center justify-center lg:ml-40 bg-gray-900  mb-3 p-4 backdrop-filter backdrop-blur-md  rounded-md "  style={{zIndex:'200', maxHeight: '300px'}}>
               <div className="w-full flex flex-row justify-end">
                      <button className="btn btn-circle btn-outline" onClick={() => setClose(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
              </div>
              
              <div className="w-full flex flex-col font-bold justify-center items-center mt-2">
              <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">No Information Avaiable</span></p>
              </div>
              </div>
              )
             
              
              }


      {searchResult && (

<div className="w-11/12 lg:w-3/4 absolute top-40 lg:top-80 left-6 flex flex-col shadow-xl shadow-cyan-400 items-center align-middle justify-center lg:ml-40 bg-gray-900 mb-3 bg-cover" style={{ zIndex: '200', maxHeight: '150vh', backgroundImage: `url('${selectedOption === 'movie' ? `https://image.tmdb.org/t/p/w300${searchResult.poster_path}` : `${searchResult?.coverImage?.large}`}')`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>



<div className='w-full lg:w-full flex-col items-center backdrop-blur-sm bg-black/50 p-4'>

<div className="w-full flex flex-row justify-end ">
            <button className="btn btn-circle btn-outline" onClick={closeMovieOverview} >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
 </div>
<div className="w-full flex-col ">
  <div className="w-full flex flex-row font-bold justify-center items-center   gap-6 p-2">

    <img
      src={selectedOption === 'movie' ?`https://image.tmdb.org/t/p/w300${searchResult.poster_path}`:searchResult.coverImage.large}
      alt={selectedOption === 'movie' ? searchResult.title:searchResult.title.english}
      className="rounded-lg"
      style={{ maxHeight: '200px'}}
    />
   <div className='w-1/2 p-4 inline-block align-middle gap-4 font-black' >
    <p><span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{selectedOption === 'movie' ? searchResult.title:searchResult.title.english}</span></p>
    <p>⭐⭐⭐⭐<span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{selectedOption === 'movie'? searchResult.vote_average : searchResult.averageScore / 10}</span></p>

  </div>

  </div>
  <p className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 opacity-90 rounded-md p-4'><span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200 bg-clip-text text-transparent font-black">{selectedOption === 'movie' ? searchResult.overview : (searchResult.description.includes('<br>') ? searchResult.description.substring(0, searchResult.description.indexOf('<br>')) : searchResult.description)}</span></p>
  </div>

  </div>
  </div>

)}

</div>
<div className="w-full overflow-hidden"><marquee>⚠⚠As movies are sourced from TMDB Api, It is  currently experiencing API issues. Please stay tuned for updates.⚠⚠</marquee></div>
    </div>
  );
};

export default GlobalSearch;
