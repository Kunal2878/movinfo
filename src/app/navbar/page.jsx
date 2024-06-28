'use client'
import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResult, setSearchResult] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState('movie');
  return (
    <div className='static flex flex-col w-full h-14 items-center  '>
    <div className='sticky top-0 flex flex-row justify-between w-full  '>

    <div className=' w-1/3 lg:w-1/4 flex flex-row justify-start items-center pl-2 pr-2'>
<Link  href='/about'>
<Image
unoptimized={true}
src={'/favicon.png'}
width={10}
height={10}
alt='loading...'
className=' w-6 h-6 rounded-full ml-2 mr-4'
/>
</Link>
<Link href='/about' className='text-[14px] p-1 lg:pl-4 lg:pr-4 border-2 border-yellow-400 text-yellow-300 rounded-xl'> Movflix</Link>
    </div>
    <div className=' w-2/3 lg:w-3/4 flex flex-row justify-start items-center p-2 text-yellow-300'>
    <select className="  w-1/4 lg:max-w-sm  border-1 border-yellow-400  rounded-lg bg-gradient-to-r   from-gray-600 to-black" id="searchOption" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option disabled selected>Select Category</option>
        <option value="movie">Movie</option>
        <option value="ANIME">Anime</option>
        <option value="MANGA">Manga</option>
      </select>

<div className=' w-3/4 flex flex-row justify-center items-center p-2 '>
      <input
      type="text"
      placeholder="Enter title for movie,anime or manga here"
      className= " w-10/12 focus:ring-2 focus:ring-yellow-600 shadow-sm shadow-yellow-400 p-1 mr-2"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{borderRadius:'40px'}}
    />

<button 
// onClick={handleSearch} 
className="size-6 rounded-full ">
    <Image
    src={'/search.svg'}
    width={20}
    height={20}
    alt='loading...'
    className='w-5 h-5'
    />
    
  </button> 

</div>





    
    </div>
    </div>
 
    </div>
  )
}

export default Navbar
