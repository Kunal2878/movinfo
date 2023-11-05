// IconPositionTabs.js
'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'; // Icon for Bollywood
import MovieIcon from '@mui/icons-material/Movie'; // Icon for Hollywood
import BookIcon from '@mui/icons-material/MenuBook'; // Icon for Manga
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Icon for Anime
import BollyWood from './BollyWood';
import HollyWood from './HollyWood';
import Anime from './Anime';
import Manga from './Manga';


export default function IconPositionTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const tabComponents = [
    <HollyWood/>,
    <BollyWood/>,
    <Anime/>,
    <Manga/>
  
    // <BollywoodComponent />,
    // <AnimeComponent />,
    // <MangaComponent />,
  ];
  
  const iconForValue = (value) => {
    switch (value) {
      case 0:
        return <MovieIcon />;
      case 1:
        return <LocalMoviesIcon />;
      case 2:
        return <VideoLibraryIcon />;
      case 3:
        return <BookIcon />;
      default:
        return null;
    }
  };

   return (
    <div>
      <div className='flex W-screen justify-center'>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      
      >
        <Tab
          icon={iconForValue(0)}
          label="Hollywood"
          style={{ color: value === 0 ? 'red' : 'crimson' }}
        />
        <Tab
          icon={iconForValue(1)}
          label="Bollywood"
          style={{ color: value === 1 ? 'blue' : 'cyan' }}
        />
        <Tab
          icon={iconForValue(2)}
          label="Anime"
          style={{ color: value === 2 ? 'wheat' : 'green' }}
        />
        <Tab
          icon={iconForValue(3)}
          label="Manga"
          style={{ color: value === 3 ? 'purple' : 'yellow' }}
        />
      </Tabs>
      </div>
      
<div className='w-screen overflow-hidden p-2 m-2'>{tabComponents[value]}</div>
      
    </div>

  );
}
