'use client'
import React, { useEffect, useState } from 'react';

function BollyWood() {
  const [movies, setMovies] = useState([]);
  const [movieIds, setMovieIds] = useState(new Set());
  const [acmovies, setacMovies] = useState([]);
  const [acmovieIds, setacMovieIds] = useState(new Set());
  const [comovies, setcoMovies] = useState([]);
  const [comovieIds, setcoMovieIds] = useState(new Set());
  const [scimovies, setsciMovies] = useState([]);
  const [scimovieIds, setsciMovieIds] = useState(new Set());
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(''); // User's search query
  const [searchResults, setSearchResults] = useState([]); // Results of the search
  const [isMovieOverviewVisible, setMovieOverviewVisible] = useState(null);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // Handle empty search query
      return;
    }
  
    // Perform the search across all arrays and return matching movies
    const allMovies = [...movies, ...acmovies, ...comovies, ...scimovies];
  
    const result = allMovies.find((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  
    if (result) {
      // Movie found
      setSearchResults(result);

      setMovieOverviewVisible('notNull');
      const movieOverview = document.getElementById('movie-overview');
      console.log(movieOverview);
      if (movieOverview) {
        movieOverview.style.display = 'block';
      }
    } else {
      // Movie not found
      setSearchResults('No data');
      const movieOverview = document.getElementById('movie-overview');
      

      if (movieOverview) {
        movieOverview.style.display = 'block';
        console.log("display block");
      } // Clear the search result
      setMovieOverviewVisible(null); 
    
      window.alert('Anime not found. Please try a different search term.');
      console.log(searchResults);
      // Set the movie overview to null or handle as per your requirement
    }
   
  };
  

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
        const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
          api_key: apiKey,
          language: 'hi-IN', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'hi', // Language code for enndi
          page: page,
         
        };

        const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
        const data = await response.json();

        if (data.results) {
          const filteredMovies = data.results.filter(movie => movie.poster_path);

          // Filter out movies with existing IDs
          const newMovies = filteredMovies.filter(movie => !movieIds.has(movie.id));

          // Add new movie IDs to the set
          newMovies.forEach(movie => movieIds.add(movie.id));

          // Update the acMovies state with new movies
          setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        }
      } catch (error) {
        console.error('Error fetcenng movies from TMDB API:', error);
      }
    };

    const totalMoviesToFetch = 100;
    const moviesPerPage = 20;
    const totalPages = Math.ceil(totalMoviesToFetch / moviesPerPage);

    for (let page = 1; page <= totalPages; page++) {
      fetchMovies(page);
    }
  }, [movieIds]); 

  useEffect(() => {
    const fetchActionMovies = async (page) => {
      try {
        const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
        const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
          api_key: apiKey,
          language: 'hi-IN', 
          sort_by: 'popularity.desc', 
          with_original_language: 'hi', 
          page: page,
          with_genres: '28'
        };

        const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
        const data = await response.json();

        if (data.results) {
          const filteredacMovies = data.results.filter(movie => movie.poster_path);

          // Filter out movies with existing IDs
          const newMovies = filteredacMovies.filter(movie => !acmovieIds.has(movie.id));

          // Add new movie IDs to the set
          newMovies.forEach(movie => acmovieIds.add(movie.id));

          // Update the acMovies state with new movies
          setacMovies((prevMovies) => [...prevMovies, ...newMovies]);
        }
      } catch (error) {
        console.error('Error fetcenng movies from TMDB API:', error);
      }
    };

    const totalMoviesToFetch = 100;
    const moviesPerPage = 20;
    const totalPages = Math.ceil(totalMoviesToFetch / moviesPerPage);

    for (let page = 1; page <= totalPages; page++) {
      fetchActionMovies(page);
    }
  }, [acmovieIds]);

  useEffect(() => {
    const fetchComedyMovies = async (page) => {
      try {
        const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
        const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
          api_key: apiKey,
          language: 'hi-IN', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'hi', // Language code for enndi
          page: page,
          with_genres: '35'
        };

        const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
        const data = await response.json();

        if (data.results) {
          const filteredcoMovies = data.results.filter(movie => movie.poster_path);

          // Filter out movies with existing IDs
          const newMovies = filteredcoMovies.filter(movie => !comovieIds.has(movie.id));

          // Add new movie IDs to the set
          newMovies.forEach(movie => comovieIds.add(movie.id));

          // Update the acMovies state with new movies
          setcoMovies((prevMovies) => [...prevMovies, ...newMovies]);
        }
      } catch (error) {
        console.error('Error fetcenng movies from TMDB API:', error);
      }
    };

    const totalMoviesToFetch = 100;
    const moviesPerPage = 20;
    const totalPages = Math.ceil(totalMoviesToFetch / moviesPerPage);

    for (let page = 1; page <= totalPages; page++) {
      fetchComedyMovies(page);
    }
  }, [comovieIds]);

  useEffect(() => {
    const fetchSciMovies = async (page) => {
      try {
        const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
        const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
          api_key: apiKey,
          language: 'hi-IN', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'hi', // Language code for enndi
          page: page,
          with_genres: '878'
        };

        const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
        const data = await response.json();

        if (data.results) {
          const filteredsciMovies = data.results.filter(movie => movie.poster_path);

          // Filter out movies with existing IDs
          const newMovies = filteredsciMovies.filter(movie => !scimovieIds.has(movie.id));

          // Add new movie IDs to the set
          newMovies.forEach(movie => scimovieIds.add(movie.id));

          // Update the acMovies state with new movies
          setsciMovies((prevMovies) => [...prevMovies, ...newMovies]);
        }
      } catch (error) {
        console.error('Error fetcenng movies from TMDB API:', error);
      }
    };

    const totalMoviesToFetch = 100;
    const moviesPerPage = 20;
    const totalPages = Math.ceil(totalMoviesToFetch / moviesPerPage);

    for (let page = 1; page <= totalPages; page++) {
      fetchSciMovies(page);
    }
  }, [scimovieIds]);

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
   
    <div className='m-2 w-screen'>
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
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Most popular</span>

 

  <div className="carousel rounded-box w-screen">
{movies.map((movie) => (
  <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

  <div className="card w-96 lg:w-60  m-2">
  <figure className="flex flex-col "><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}className='w-96 relative' style={{ maxHeight: '200px' }} alt={movie.title} />
  <div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
  <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
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
        <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(movie.overview)}>Know more</button>
      </div>
  </div>
</div>
</div>
 ))}
</div>

<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Action</span>

 

<div className="carousel rounded-box w-screen">
{acmovies.map((movie) => (
  <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

  <div className="card w-96 lg:w-60  m-2">
  <figure className="flex flex-col "><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}className='w-96 relative' style={{ maxHeight: '200px' }} alt={movie.title} />
  <div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
  <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
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
        <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(movie.overview)}>Know more</button>
      </div>
  </div>
</div>
</div>
 ))}
</div>

<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Comedy</span>


<div className="carousel rounded-box w-screen">
{comovies.map((movie) => (
  <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

  <div className="card w-96 lg:w-60  m-2">
  <figure className="flex flex-col "><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}className='w-96 relative' style={{ maxHeight: '200px' }} alt={movie.title} />
  <div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
  <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
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
        <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(movie.overview)}>Know more</button>
      </div>
  </div>
</div>
</div>
 ))}
</div>

<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sci-Fi</span>



<div className="carousel rounded-box w-screen">
{scimovies.map((movie) => (
  <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

  <div className="card w-96 lg:w-60  m-2">
  <figure className="flex flex-col "><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}className='w-96 relative' style={{ maxHeight: '200px' }} alt={movie.title} />
  <div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
  <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
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
        <button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(movie.overview)}>Know more</button>
      </div>
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

{/* </div> */}


{


isMovieOverviewVisible !==null && (
  <div className="w-10/12 lg:w-1/3 fixed  top-40 lg:top-20 left-10 flex flex-col  items-center justify-center lg:ml-40 bg-gray-900  mb-3 p-4 backdrop-filter backdrop-blur-md  rounded-md " id="movie-overview" style={{zIndex:'200', maxHeight: '300px',display:'none'}}>
 <div className="w-full flex flex-row justify-end">
            <button className="btn btn-circle btn-outline" onClick={closeMovieOverview}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
 </div>

  <div className="w-full flex flex-col font-bold justify-center items-center mt-2">
   
    <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{searchResults.title}</span></p>
    <p>⭐<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{searchResults.vote_average}</span></p>

    <img
      src={`https://image.tmdb.org/t/p/w300${searchResults.poster_path}`}
      alt={searchResults.title}
      style={{ maxHeight: '200px'}}
    />
    {
    searchResults === 'No Data' ? (
  <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Movie Not Found</span></p>
    ):
    (
  <p></p>
    )

    }
  </div>

  </div>
) 
}

    
  </div>
</div>
</div>
 ))}
 
</div>


</div>

  );
  
  function truncateText(text, maxLhigth) {
    if (text.length > maxLhigth){
      return text.substring(0, maxLhigth) + '...';
    }
    return text;
  }

}

export default BollyWood;



