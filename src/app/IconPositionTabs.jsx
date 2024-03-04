// // IconPositionTabs.js
'use client';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'; 
import MovieIcon from '@mui/icons-material/Movie'; 
import BookIcon from '@mui/icons-material/MenuBook'; 
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; 



const IconPositionTabs=({hollyWood,bollyWood,manga,anime})=> {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const tabComponents = [
    hollyWood,
    bollyWood,
    anime,
    manga
  

    
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
    <div className=''>
      <div className='flex w-screen  justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>
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
          label="Indian Movies"
          style={{ color: value === 1 ? 'lime' : 'cyan' }}
        />
        <Tab
          icon={iconForValue(2)}
          label="Anime"
          style={{ color: value === 2 ? 'green' : 'wheat' }}
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
export default IconPositionTabs;

