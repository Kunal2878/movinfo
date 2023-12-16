
import React from 'react';
import MovieCarousel from './Components/MovieCarousel';
import Search from './Search'

  function getMovie() {
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
    const response =   fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data =   response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
  function getAcMovie() {
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
    const response =   fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data =   response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
  function getCoMovie() {
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
    const response =   fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data =   response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}
  function getSciMovie() {
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
    const response =   fetch(`${tmdbEndpoint}?${new URLSearchParams(params)}`);
    const data =   response.json();
    

    const newMovies = data.results.filter(movie => !uniqueMovies.has(movie.id));


    newMovies.forEach(movie => uniqueMovies.add(movie.id));
    movies = movies.concat(newMovies);


    params.page++;
  }

  return movies.slice(0, 100); // Return only the first 100 movies
}





export default   function BollyWood() {
  const movies =   getMovie();
  const acmovies =   getAcMovie();
  const comovies =   getCoMovie();
  const scimovies =   getSciMovie();
  const allmovies = [...movies, ...acmovies, ...comovies, ...scimovies];


  return (
     

<div className='m-2 w-full'>

<Search allMovAniMang={allmovies} Id={1}/>
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{fontFamily:'Old London'}}>Most popular</span>
<MovieCarousel movies={movies} />
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{fontFamily:'Old London'}}>Action</span>
<MovieCarousel movies={acmovies} />
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{fontFamily:'Old London'}}>Comedy</span>
<MovieCarousel movies={comovies} />
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{fontFamily:'Old London'}}>Family</span>
<MovieCarousel movies={scimovies} />


    </div>


  );
}


