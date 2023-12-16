

import React from 'react';
const LandingPage = () => {


  return (
<div className='w-full flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800 to-black'>
<div className='w-full h-[70vh] lg:h-screen p-1 flex flex-col items-center mt-2  '>
  <div className='w-11/12 h-3/4 flex flex-row justify-center items-center shadow-2xl shadow-cyan-400/40 rounded-md backdrop-blur-lg bg-black/50' style={{ backgroundImage: 'url("land2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className='w-10/12 h-3/4 shadow-lg shadow-cyan-400/40 rounded-xl' style={{ backgroundImage: 'url("land2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
</div>



  </div>
<div className='w-full flex flex-row justify-center items center p-1 mt-2'>





<iframe src="https://giphy.com/embed/rj12FejFUysTK" className='hidden lg:block lg:w-1/6  lg:p-2 lg:h-[150px] shadow-2xl shadow-green-400 rounded-full' ></iframe>

<iframe src="https://giphy.com/embed/xUOxeZUc8UFwMgH2MM" className='hidden lg:block lg:w-1/6  lg:p-2 lg:h-[150px] shadow-2xl shadow-green-400 rounded-full' ></iframe>

<iframe src="https://giphy.com/embed/0X7Bn1dSzEhPgwXoys" className='w-1/3 lg:w-1/6 h-[120px]  lg:p-2 lg:h-[150px] shadow-2xl shadow-green-400 rounded-full' ></iframe>

<iframe src="https://giphy.com/embed/j52bGrifXj6rIPEn3f" className='w-1/3 lg:w-1/6 h-[120px]  lg:p-2 lg:h-[150px] shadow-2xl shadow-green-400 rounded-full' ></iframe>

<iframe src="https://giphy.com/embed/l3vR1vV9rzkAnPTSU" className='w-1/3 lg:w-1/6 h-[120px]  lg:p-2 lg:h-[150px] shadow-2xl shadow-green-400 rounded-full' ></iframe>
<div className="w-1/8 hidden lg:flex justify-center items-center">
<svg
      className="animate-bounce flex items-center justify-center stroke-purple-500"
      fill="#800080"
      height="50px"
      width="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10l5 5 5-5z" />
</svg>
</div>

</div>
</div>
<div className='shadow-2xl shadow-pink-400'>
<h1 className="flex flex-col justify-center items-center bg-clip-text text-transparent text-[40px] lg:text-[60px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-500 to-white" style={{fontFamily:'Neon Energy X'}}> <p>The promise of a</p> <p>cinematic adventure</p></h1>
<div className='w-full flex flex-row justify-center lg:hidden'>
<svg
      className="animate-bounce  stroke-purple-500"
      fill="#800080"
      height="50px"
      width="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10l5 5 5-5z" />
</svg>
</div>
</div>
</div>
  );
};

export default LandingPage;

