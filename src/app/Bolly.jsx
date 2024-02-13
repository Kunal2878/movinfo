
import React from 'react';
import MovieCarousel from './Components/MovieCarousel';
import Search from './Search'

async function getMovie() {
  const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
  const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
  const params = {
    api_key: apiKey,
    language: 'hi-IN',
    sort_by: 'popularity.desc',
    with_original_language: 'hi',
    page: 1,
  };

  const uniqueMovies = new Set();
  let movies = [];

  while (uniqueMovies.size < 100) {
    const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data = await response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
async function getAcMovie() {
  const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
  const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
  const params = {
    api_key: apiKey,
    language: 'hi-IN',
    sort_by: 'popularity.desc',
    with_original_language: 'hi',
    page: 1,
    with_genres: '28'
  };

  const uniqueMovies = new Set();
  let movies = [];

  while (uniqueMovies.size < 100) {
    const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data = await response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
async function getCoMovie() {
  const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
  const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
  const params = {
    api_key: apiKey,
    language: 'hi-IN',
    sort_by: 'popularity.desc',
    with_original_language: 'hi',
    page: 1,
    with_genres: '35'
  };

  const uniqueMovies = new Set();
  let movies = [];

  while (uniqueMovies.size < 100) {
    const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data = await response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
async function getSciMovie() {
  const apiKey = 'f847d8a74355547b393b1921d50fb6aa'; // Replace with your actual TMDB API key
  const tmdbEndpoint = 'https://api.themoviedb.org/3/discover/movie';
  const params = {
    api_key: apiKey,
    language: 'hi-IN',
    sort_by: 'popularity.desc',
    with_original_language: 'hi',
    page: 1,
    with_genres: '10751'
  };

  const uniqueMovies = new Set();
  let movies = [];

  while (uniqueMovies.size < 100) {
    const response = await fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data = await response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}





export default async function Bolly() {
  const movies = await getMovie();
  const acmovies = await getAcMovie();
  const comovies = await getCoMovie();
  const scimovies = await getSciMovie();
  const allmovies = [...movies, ...acmovies, ...comovies, ...scimovies];


  return (
     

<div className='m-2 w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>

<Search allMovAniMang={allmovies} Id={1}/>

<MovieCarousel movies={movies} type={"Most popular"}/>

<MovieCarousel movies={acmovies} type={"Action"} />

<MovieCarousel movies={comovies} type={"Comedy"}/>

<MovieCarousel movies={scimovies} type={"Family"} />


</div>


  );
}


