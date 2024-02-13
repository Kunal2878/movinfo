import AniMangaCarousel from './Components/AniMangaCarousel';
import Search from './Search';
async function getManga() {
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
                media(type: MANGA, sort: POPULARITY_DESC) {
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
async function getAcManga() {
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
                media(type: MANGA, genre: "Action", sort: POPULARITY_DESC) {
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

async function getCoManga() {
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
                media(type: MANGA, genre: "Comedy", sort: POPULARITY_DESC) {
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
async function getSciManga() {
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
                media(type: MANGA, genre: "Sci-fi", sort: POPULARITY_DESC) {
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
  





  export default async function Manga() {
    const Manga = await getManga();
    const acManga = await getAcManga();
    const coManga = await getCoManga();
    const sciManga = await getSciManga();

    const filteredManga= Manga.filter(Manga=> Manga.coverImage);
    const filteredacManga= acManga.filter(acManga=> acManga.coverImage);
    const filteredcoManga= coManga.filter(coManga=> coManga.coverImage);
    const filteredsciManga= sciManga.filter(sciManga=> sciManga.coverImage);
    const allManga = [...filteredManga, ...filteredacManga, ...filteredcoManga, ...filteredsciManga];

    return (
     

        <div className='m-2 w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>
        
        <Search allMovAniMang={allManga} Id={2} />
        
        <AniMangaCarousel animangas ={filteredManga} type={"Most popular"} />
        
        <AniMangaCarousel animangas ={filteredacManga} type={"Action"} />
        
        <AniMangaCarousel animangas ={filteredcoManga} type={"Comedy"} />
        
        <AniMangaCarousel animangas ={filteredsciManga} type={"Sci fi"} />
        
        
            </div>
        
        
          );

  }
  


  