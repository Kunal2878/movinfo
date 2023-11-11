'use client'

import React, { useState, useEffect } from 'react';

function Anime() {
  const [Anime, setAnime] = useState([]);
  const [acAnime, setacAnime] = useState([]);
  const [coAnime, setcoAnime] = useState([]);
  const [sciAnime, setsciAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); // Results of the search
  const [isAnimeOverviewVisible, setAnimeOverviewVisible] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // Handle empty search query
      return;
    }
  
    // Perform the search across all arrays and return matching movies
    const allAnime = [...filteredAnime, ...filteredacAnime, ...filteredcoAnime, ...filteredsciAnime];

  const result = allAnime.find((anime) => {
    const animeTitle = anime.title.english
  //  console.log(animeTitle);
    if (animeTitle && typeof animeTitle === 'string') {
     
      return animeTitle.toLowerCase().includes(searchQuery.toLowerCase());

    }
  });
  console.log(result);
  
    if (result) {
      
      setSearchResults(result);
  
      setAnimeOverviewVisible('notNull');
  // console.log("hsh");
      const movieOverview = document.getElementById('mv');
      // console.log(movieOverview);
      if (movieOverview) {
        console.log("display block")
        movieOverview.style.display = 'block';
      }
    } else {
      // Movie not found
      setSearchResults('No data');
      const movieOverview = document.getElementById('mv');
      

      if (movieOverview) {
        movieOverview.style.display = 'block';
      } // Clear the search result
      setAnimeOverviewVisible(null); 
    
      window.alert('Anime  not found. Please try a different search term.');
      console.log("user",isAnimeOverviewVisible);
      // Set the movie overview to null or handle as per your requirement
    }
    console.log("user",isAnimeOverviewVisible);
  };


  useEffect(() => {
    fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            Page(page: 1, perPage: 100) {
              media(type: ANIME,sort: POPULARITY_DESC) {
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
    })
      .then(response => response.json())
      .then(data => setAnime(data.data.Page.media))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
        fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                Page(page: 1, perPage: 100) {
                  media(type: ANIME, genre: "Action", sort: POPULARITY_DESC) {
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
        })
          .then(response => response.json())
          .then(data => setacAnime(data.data.Page.media))
          .catch(error => console.error(error));
      }, []);

  useEffect(() => {
        fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                Page(page: 1, perPage: 100) {
                  media(type: ANIME, genre: "Comedy", sort: POPULARITY_DESC) {
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
        })
          .then(response => response.json())
          .then(data => setcoAnime(data.data.Page.media))
          .catch(error => console.error(error));
      }, []);

  useEffect(() => {
        fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                Page(page: 1, perPage: 100) {
                  media(type: ANIME, genre: "Sci-fi", sort: POPULARITY_DESC) {
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
        })
          .then(response => response.json())
          .then(data => setsciAnime(data.data.Page.media))
          .catch(error => console.error(error));
      }, []);

      const filteredAnime= Anime.filter(Anime=> Anime.coverImage);
      const filteredacAnime= acAnime.filter(acAnime=> acAnime.coverImage);
      const filteredcoAnime= coAnime.filter(coAnime=> coAnime.coverImage);
      const filteredsciAnime= sciAnime.filter(sciAnime=> sciAnime.coverImage);
      
    
      const toggleMovieOverview = (Movie) => {
        if (Movie.length === 0) {
          setSelectedMovie('No Data Available');
          const p=document.getElementById('mv')
          if(p)
          { console.log("dispaly .......");
            p.style.display='block';
          }
        
        } else {
          setSelectedMovie(Movie);
          console.log(Movie)
        }
      };
    
      const closeMovieOverview = () => {
        setSelectedMovie(null);
setAnimeOverviewVisible(null);
    
    
      };
  return (

    <div className='m-3 w-screen'>
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
{filteredAnime.map(anime => (
<div key={anime.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

<div className="card w-96 lg:w-60  m-2">
<figure className="flex flex-col "><img src={anime.coverImage.large} alt={anime.title.english || anime.title.romaji} className='w-96 relative' style={{ maxHeight: '200px' }} />
<div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
<div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
<span className="text-sm font-black">⭐{anime.averageScore / 10}</span>
</div>
</div>
</figure>

<div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
<div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
<h4 className="flex justify-center font-semibold">
{truncateText(anime.title.english || anime.title.romaji, 14)}
</h4>
<h4 className="text-yellow-400 font-normal flex justify-center">📆{formatStartDate(anime.startDate)}</h4>

</div>
<div className="card-actions justify-center">
<button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(anime.description)}>Know more</button>
</div>

</div>
</div>
</div>
))}
</div>

<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Action </span>


<div className="carousel rounded-box w-screen">
{filteredacAnime.map(anime => (
<div key={anime.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

<div className="card w-96 lg:w-60  m-2">
<figure className="flex flex-col "><img src={anime.coverImage.large} alt={anime.title.english || anime.title.romaji} className='w-96 relative' style={{ maxHeight: '200px' }} />
<div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
<div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
<span className="text-sm font-black">⭐{anime.averageScore / 10}</span>
</div>
</div>
</figure>

<div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
<div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
<h4 className="flex justify-center font-semibold">
{truncateText(anime.title.english || anime.title.romaji, 14)}
</h4>
<h4 className="text-yellow-400 font-normal flex justify-center">📆{formatStartDate(anime.startDate)}</h4>

</div>
<div className="card-actions justify-center">
<button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(anime.description)}>Know more</button>
</div>

</div>
</div>
</div>
))}
</div>
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Comedy </span>


<div className="carousel rounded-box w-screen">
{filteredcoAnime.map(anime => (
<div key={anime.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

<div className="card w-96 lg:w-60  m-2">
<figure className="flex flex-col "><img src={anime.coverImage.large} alt={anime.title.english || anime.title.romaji} className='w-96 relative' style={{ maxHeight: '200px' }} />
<div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
<div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
<span className="text-sm font-black">⭐{anime.averageScore / 10}</span>
</div>
</div>
</figure>

<div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
<div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
<h4 className="flex justify-center font-semibold">
{truncateText(anime.title.english || anime.title.romaji, 14)}
</h4>
<h4 className="text-yellow-400 font-normal flex justify-center">📆{formatStartDate(anime.startDate)}</h4>

</div>
<div className="card-actions justify-center">
<button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(anime.description)}>Know more</button>
</div>
</div>
</div>
</div>
))}
</div>
<span className="ml-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sci-Fi </span>


<div className="carousel rounded-box w-screen">
{filteredsciAnime.map(anime => (
<div key={anime.id} className="carousel-item w-1/3 lg:w-1/5 m-2">

<div className="card w-96 lg:w-60  m-2">
<figure className="flex flex-col "><img src={anime.coverImage.large} alt={anime.title.english || anime.title.romaji} className='w-96 relative' style={{ maxHeight: '200px' }} />
<div className="avatar placeholder absolute w-full flex justify-end z-40 mt-44 ml-2">
<div className=" text-neutral-content rounded-full w-10 bg-gradient-to-r from-indigo-500 to-gray-800">
<span className="text-sm font-black">⭐{anime.averageScore / 10}</span>
</div>
</div>
</figure>

<div className="flex flex-col align-middle w-100 mt-6 lg:mt-3">
<div className="flex flex-nowrap flex-col text-sm lg:text-base bg-black-800 mb-3">
<h4 className="flex justify-center font-semibold">
{truncateText(anime.title.english || anime.title.romaji, 14)}
</h4>
<h4 className="text-yellow-400 font-normal flex justify-center">📆{formatStartDate(anime.startDate)}</h4>

</div>
<div className="card-actions justify-center">
<button className="btn btn-primary text-sm lg:text-base" onClick={() => toggleMovieOverview(anime.description)}>Know more</button>
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

{


isAnimeOverviewVisible !==null && (

  <div className="w-10/12 lg:w-1/3 fixed  top-40 lg:top-20 left-10 flex flex-col  items-center justify-center lg:ml-40 bg-gray-900  mb-3 p-4 backdrop-filter backdrop-blur-md  rounded-md "  style={{zIndex:'200', maxHeight: '300px'}}>

 <div className="w-full flex flex-row justify-end">
            <button className="btn btn-circle btn-outline" onClick={closeMovieOverview}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
 </div>

  <div className="w-full flex flex-col font-bold justify-center items-center mt-2">
   
    <p><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{searchResults.title.english}</span></p>
    <p>⭐<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{searchResults.averageScore / 10}</span></p>

    <img
    
    src={searchResults.coverImage.large} 
    alt={searchResults.title.english || searchResults.title.romaji}
      
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
)}
</div>
</div>
</div>


))}
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
function truncateText(text, maxLength) {
  if (text.length > maxLength){
    return text.substring(0, maxLength)+ '...';
  }
  return text;
}
}

export default Anime;

