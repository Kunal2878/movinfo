import AniMangaCarousel from './Components/AniMangaCarousel';
import Search from './Search';
async function getAnime() {
    try {
      const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              Page(page: 1, perPage: 100) {
                media(type: ANIME, sort: POPULARITY_DESC) {
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
      return data.data.Page.media;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
async function getAcAnime() {
    try {
      const response = await fetch('https://graphql.anilist.co', {
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
      });
  
      const data = await response.json();
      return data.data.Page.media;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

async function getCoAnime() {
    try {
      const response = await fetch('https://graphql.anilist.co', {
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
      });
  
      const data = await response.json();
      return data.data.Page.media;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
async function getSciAnime() {
    try {
      const response = await fetch('https://graphql.anilist.co', {
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
      });
  
      const data = await response.json();
      return data.data.Page.media;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  





  export default async function Anime2() {
    const Anime = await getAnime();
    const acAnime = await getAcAnime();
    const coAnime = await getCoAnime();
    const sciAnime = await getSciAnime();

    const filteredAnime= Anime.filter(Anime=> Anime.coverImage);
    const filteredacAnime= acAnime.filter(acAnime=> acAnime.coverImage);
    const filteredcoAnime= coAnime.filter(coAnime=> coAnime.coverImage);
    const filteredsciAnime= sciAnime.filter(sciAnime=> sciAnime.coverImage);
    const allAnime = [...filteredAnime, ...filteredacAnime, ...filteredcoAnime, ...filteredsciAnime];

    return (
     

        <div className='m-2 w-full '>
        
        <Search allMovAniMang={allAnime} Id={2} />
        
        <AniMangaCarousel animangas ={filteredAnime} type={"Most popular"} />
        
        <AniMangaCarousel animangas ={filteredacAnime} type={"Action"}  />
        
        <AniMangaCarousel animangas ={filteredcoAnime} type={"Comedy"}  />
        
        <AniMangaCarousel animangas ={filteredsciAnime} type={"Sci fi"}  />
        
        
            </div>
        
        
          );

  }
  


  