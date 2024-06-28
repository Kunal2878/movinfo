
import Link from 'next/link';
function AnimeName({anime_data, anime_genre_data}) {








  return (
    <div className=' w-full  flex flex-col items-center p-4 bg-gradient-to-tr via-cyan-700 to bg-gray-800'>
      <div className="w-full flex flex-col items-center ">
      {anime_data!== null ? (
        <div className="w-full lg:w-2/3 h-50  mt-8 flex flex-col shadow-xl shadow-cyan-400 items-center align-middle justify-center lg:ml-40 bg-gray-900 mb-3 bg-cover overflow-hidden hover:overflow-y-auto" style={{ zIndex: '200', backgroundImage: `url('${anime_data?.coverImage?.large}')`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
          <div className='w-full flex-col items-center backdrop-blur-sm bg-black/50 p-4'>
            <div className="w-full flex-col ">
              <div className="w-full flex flex-row font-bold justify-center items-center gap-6 p-2">
                <img
                  src={anime_data.coverImage.large}
                  alt={anime_data.title.english}
                  className="rounded-lg"
                  style={{ maxHeight: '200px' }}
                />
                <div className='w-1/2 p-4 inline-block align-middle gap-4 font-black'>
                  <p><span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{anime_data.title.english}</span></p>
                  <p>⭐⭐⭐⭐<span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{anime_data.averageScore / 10}</span></p>
                </div>
              </div>
              <p className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 opacity-90 rounded-md p-4'><span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200 bg-clip-text text-transparent font-black">{(anime_data.description.includes('<br>') ? anime_data.description.substring(0, anime_data.description.indexOf('<br>')) : anime_data.description)}</span></p>
            </div>
          </div>
        </div>
      ):
     ( <div className="  p-2  w-full lg:w-2/4 h-40 top-1/2  text-[20px] bg-gray-900 shadow-lg shadow-slate-200 flex flex-row justify-center items-center  font-400 text-yellow-400">No record found for the search</div>
     )
    }
      </div>
       <span className="w-full flex flex-row justify-start text-[20px] mt-4">You must like..</span>
      <div className='w-full  flex flex-row justify-center items-center  mt-4 overflow-hidden hover:overflow-x-scroll '>
        {
        (anime_genre_data !== null || anime_genre_data!== undefined) ?(
          <div className='w-full flex-col gap-y-4 justify-center items-center'>
          
          
           
<div className='w-full flex flex-row items-center p-4 '>
  {
  
          anime_genre_data.map((itr, index) => (
            <div key={index} className="carousel-item w-1/3 lg:w-1/5  overflow-none">
    
    <div className="  card w-96 lg:w-60  m-2  ">
    <figure className="static flex flex-col shadow-2xl shadow-cyan-500">
      <Link   href={{
              pathname: `/anime/${itr.title.english}`,

            }}className="aspect-w-3 aspect-h-4">
 
          
 

    <img
      src={itr.coverImage.large}
      alt={itr.title.english || itr.title.romaji}
      className="object-cover w-full h-full"
    />
  </Link>
    <div className="w-10 h-10 rounded-full placeholder   flex justify-end  absolute ml-2 bottom-0 right-0" style={{zIndex:1000}}>
    <div className=" w-full h-full text-neutral-content  flex flex-row justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 to-gray-800">
    <span className="text-sm font-black flex flex-row justify-center">⭐{(itr.averageScore / 10).toFixed(1)}</span>
    </div>
    </div>
    </figure>
    
  
    </div>
    </div>
            ))
          }
          </div>
            </div>
          ):(
            <div className="  p-2  w-full lg:w-2/4 h-40 top-1/2  text-[20px] bg-gray-900 shadow-lg shadow-slate-200 flex flex-row justify-center items-center  font-400 text-yellow-400">No records found</div>
          )
        }
      </div>
    </div>
  );
}

export default AnimeName;
