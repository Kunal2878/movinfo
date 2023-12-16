'use client'
import React, { useEffect, useState } from 'react';
const Search = ({allMovAniMang,Id}) => {
const [searchQuery, setSearchQuery] = useState(''); // User's search query
const [searchResults, setSearchResults] = useState([]); // Results of the search
const [isMovieOverviewVisible, setMovieOverviewVisible] = useState(null);
const [selectedMovie, setSelectedMovie] = useState(null); 
const [close, setClose] = useState(null);

const handleSearch = () => {
    setSearchResults([]);
    setMovieOverviewVisible(null);
    setClose(null);
    if (searchQuery.trim() === '') {
      
      return;
    }
  

  const result = allMovAniMang.find((movie) => {
    let movieTitle = movie.title
    if(Id===2)
    {
       movieTitle = movie.title.english
    }

    if (movieTitle && typeof movieTitle === 'string') {
     
  
      return movieTitle.toLowerCase().startsWith(searchQuery.toLowerCase());

    }
  });

  
    if (result) {
      
      setSearchResults(result);
      setMovieOverviewVisible('notNull');
      
      
    } else {
      
      setClose('notNull');
      setSearchResults('No data');
  

    

  
    }

  };
  useEffect(() => {
  if (searchQuery.trim() === '') {
 
    
    }
    handleSearch();
  }, [searchQuery]);

  const closeMovieOverview = () => {
    setSelectedMovie(null);
    setMovieOverviewVisible(null);
    setClose(null);


  };
  return (
    <div className='m-2 w-full'>
      
      <div className="w-full flex justify-start  lg:justify-end mr-4">

      <div className="w-1/2 navbar">

  <div className="flex-none gap-2">

    <div className="form-control">
    <input
            type="text"
            placeholder="Enter movie name here"
            className="input input-bordered input-info w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
              <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Movie Not Found</span></p>
              </div>
              </div>
              )
             
              
              }


{isMovieOverviewVisible !==null && (

<div className="w-11/12 lg:w-3/4 shadow-xl shadow-green-500/40 top-40 lg:top-20 left-6 flex flex-col items-center justify-center lg:ml-40 bg-gray-900 mb-3 bg-cover" style={{ zIndex: '200', maxHeight: '150vh', backgroundImage: `url('${Id === 2 ? `${searchResults?.coverImage?.large}` : `https://image.tmdb.org/t/p/w300${searchResults.poster_path}`}')`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>



<div className='w-full lg:w-full flex-col items-center backdrop-blur-sm bg-black/50 p-4'>

 <div className="w-full flex flex-row justify-end ">
            <button className="btn btn-circle btn-outline" onClick={closeMovieOverview}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
 </div>
<div className="w-full flex-col">
  <div className="w-full flex flex-row font-bold justify-center items-center mt-2  gap-6 p-2">

    <img
      src={Id===1 ?`https://image.tmdb.org/t/p/w300${searchResults.poster_path}`:searchResults.coverImage.large}
      alt={Id===1 ? searchResults.title:searchResults.title.english}
      className="rounded-lg"
      style={{ maxHeight: '200px'}}
    />
   <div className='w-1/2 p-4 inline-block align-middle gap-4 font-black' >
    <p><span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{Id===1 ? searchResults.title:searchResults.title.english}</span></p>
    <p>⭐⭐⭐⭐<span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{Id===1? searchResults.vote_average : searchResults.averageScore / 10}</span></p>

  </div>

  </div>
  <p className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 opacity-90 rounded-md p-4'><span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200 bg-clip-text text-transparent font-black">{Id===1 ? searchResults.overview : (searchResults.description.includes('<br>') ? searchResults.description.substring(0, searchResults.description.indexOf('<br>')) : searchResults.description)}</span></p>
  </div>

  </div>
  </div>

)}

    </div>
  )
}

export default Search
