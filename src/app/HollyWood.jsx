'use client'
import React, { useEffect, useState } from 'react';

function HollyWood() {
  const [movies, setMovies] = useState([]);
  const [movieIds, setMovieIds] = useState(new Set());
  const [acmovies, setacMovies] = useState([]);
  const [acmovieIds, setacMovieIds] = useState(new Set());
  const [comovies, setcoMovies] = useState([]);
  const [comovieIds, setcoMovieIds] = useState(new Set());
  const [scimovies, setsciMovies] = useState([]);
  const [scimovieIds, setsciMovieIds] = useState(new Set());

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
        const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
        const params = {
          api_key: apiKey,
          language: 'en-US', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'en', // Language code for enndi
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
          language: 'en-US', 
          sort_by: 'popularity.desc', 
          with_original_language: 'en', 
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
          language: 'en-US', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'en', // Language code for enndi
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
          language: 'en-US', // Language code for enndi
          sort_by: 'popularity.desc', // You can adjust the sorting criteria
          with_original_language: 'en', // Language code for enndi
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






  return (
   
    <div className='m-2 w-screen'>
    <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Most popular</span>
 

  <div className="carousel rounded-box w-screen">
{movies.map((movie) => (
  <div key={movie.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

  <div className="card w-96 lg:w-60  m-2">
  <figure className="flex flex-col "><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}className='w-96 relative' style={{ maxHeight: '200px' }} alt={movie.title} />
  <div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
  <div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
    <span className="text-sm font-black">⭐{movie.vote_average}</span>
  </div>
</div>
  </figure>
  
  <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
    <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
    <h4 className="flex justify-center font-semibold">
    {truncateText(movie.title, 14)} {/* Adjust the number to control the truncation length */}
  </h4>
    <h4 className="text-yellow-400 font-normal flex justify-center">📆 {movie.release_date}</h4>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
    <span className="text-sm font-black">⭐{movie.vote_average}</span>
  </div>
</div>
  </figure>
  
  <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
    <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
    <h4 className="flex justify-center font-semibold">
    {truncateText(movie.title, 14)} {/* Adjust the number to control the truncation length */}
  </h4>
    <h4 className="text-yellow-400 font-normal flex justify-center">📆 {movie.release_date}</h4>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
    <span className="text-sm font-black">⭐{movie.vote_average}</span>
  </div>
</div>
  </figure>
  
  <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
    <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
    <h4 className="flex justify-center font-semibold">
    {truncateText(movie.title, 14)} {/* Adjust the number to control the truncation length */}
  </h4>
    <h4 className="text-yellow-400 font-normal flex justify-center">📆 {movie.release_date}</h4>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
    <span className="text-sm font-black">⭐{movie.vote_average}</span>
  </div>
</div>
  </figure>
  
  <div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
    <div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
    <h4 className="flex justify-center font-semibold">
    {truncateText(movie.title, 14)} {/* Adjust the number to control the truncation length */}
  </h4>
    <h4 className="text-yellow-400 font-normal flex justify-center">📆 {movie.release_date}</h4>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
    </div>
  </div>
</div>
</div>
 ))}
</div>

</div>

  );
  function truncateText(text, maxLength) {
    if (text.length > maxLength){
      return text.substring(0, maxLength)+ '...';
    }
    return text;
  }
}

export default HollyWood;



