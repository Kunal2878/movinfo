import React from 'react'
import AnimeName from '../../Components/showAnime'
 async function Name({params}) {
  const { name } = params

  const anilistEndpoint = 'https://graphql.anilist.co';
async function Search_anime(){


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
            media(search: "${name}", type: ANIME) {
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
              genres
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
}
async function Search_genre(genre){


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
            media(genre: "${genre}", type: ANIME, sort: POPULARITY_DESC) {
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
              genres
            }
          }
        }
      `,
      }),
    });

    const data = await response.json();
// console.log(data.data.Page.media[0])

    return data.data.Page.media.length > 0 ? data.data.Page.media : null;
  } catch (error) {
    console.error('Error searching for anime:', error);
    return null;
  }
}


async function Search_popular_anime(){


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
            media(sort: POPULARITY_DESC, type: ANIME ) {
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
              genres
            }
          }
        }
      `,
      }),
    });

    const data = await response.json();
// console.log(data.data.Page.media[0])

    return data.data.Page.media.length > 0 ? data.data.Page.media : null;
  } catch (error) {
    console.error('Error searching for anime:', error);
    return null;
  }
}

const result = await(Search_anime())

if(result===null || result=== undefined){
  var result2 = await(Search_popular_anime())


}
if(result !== null || result!== undefined){
  if(result?.genres === null || result?.genres ===undefined ){
    var result2 = await(Search_popular_anime())
  }
  else{
    var result2 = await(Search_genre(result.genres[0]))

  }

}
  return (
    <div className='w-screen text-white'>
    <AnimeName anime_data={result} anime_genre_data ={result2} />
    </div>
  )
}

export default Name
