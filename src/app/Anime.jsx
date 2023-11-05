'use client'

import React, { useState, useEffect } from 'react';

function Anime() {
  const [Anime, setAnime] = useState([]);
  const [acAnime, setacAnime] = useState([]);
  const [coAnime, setcoAnime] = useState([]);
  const [sciAnime, setsciAnime] = useState([]);

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
              media(sort: POPULARITY_DESC) {
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
  return (

    <div className='m-3 w-screen'>

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
 <button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
<button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
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
      <button className="btn btn-primary text-sm lg:text-base">Know more</button>
    </div>
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

