import React from 'react'
import Bolly from '../Bolly'
import HollyWood from '../HollyWood';
function Movie_page() {
  return (
    <div className='static w-full h-full text-white flex flex-col '>
        <span className='bg-gradient-to-r from-indigo-500 to-gray-800 sticky top-0 w-full flex flex-row justify-start mb-4'>English movies</span>
      <HollyWood/>
      <span className=' sticky top-0 bg-gradient-to-r from-indigo-500 to-gray-800  w-full flex flex-row justify-start mb-4'>Hindi movies</span>
      <Bolly/>

    </div>
  )
}

export default Movie_page
