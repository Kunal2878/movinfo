import React from 'react'
import MovieName from '../../Components/showmovie'
async function show_movie({params}) {

    const { name } = params
    const apiKey = 'a1261f51'; // Replace with your actual OMDb API key
    const url = `https://www.omdbapi.com/?s=${name}&apikey=${apiKey}`;
  
    const searchMovieByTitle = async () => {

    
        try {
          const response = await fetch(url);
          const data = await response.json();
        
    
          return (data && data.Search.length > 0) ? data.Search: null;
        } catch (error) {
          console.error('Error searching for movies:', error);
          return null;
        }
      };

   const result = await   searchMovieByTitle();
   if (Array.isArray(result)) {
    var [result1, ...result2] = result;
  } else {
    var result1 = null;
    var result2 = null;
  }
   


  return (
    <div className='w-screen text-white'>
    <MovieName anime_data={result1} anime_genre_data ={result2} />
    </div>
  )
}

export default show_movie
