import React from 'react'
import Web_show from '../Components/showWebseries'
async function Webseries(){


async function fetchMultipleWebseries() {
    const webseries = [];

  
    for (let i = 1; i <=20 ;i++) {
  
      const url = `https://api.tvmaze.com/shows?${i}`; // Construct URL with page and page size
  
      const response = await fetch(url);
      const data = await response.json();
  
      webseries.push(...data); 
    }
  
    return webseries;
  }

  var result = await fetchMultipleWebseries()

  return (
    <div className='w-full h-full'>< Web_show Trend ={result} /></div>
  )
}
export default Webseries
