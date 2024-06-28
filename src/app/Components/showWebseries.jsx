
import * as React from "react";

import Image from "next/image";

export default function Web_show({Trend}) {
  return (
    <div className="w-full flex flex-col justify-center items-center  bg-white text-gray-900 dark:bg-gray-900 dark:text-white p-2 ">
      {Trend.map((itr,index) => (
        <>
        
            <div
              key={index}
              className="p-0 w-full h-60 md:h-80 flex flex-row justify-start items-center aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9 mb-2 "
              style={{
                backgroundImage: `url(${itr.image.medium
                  
                })`,
                backgroundSize: "cover",
                objectFit:"cover"
              }}
            >
              <div className="w-1/4  h-full aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 flex justify-start z-100">
                <Image
                  unoptimized={true}
                  width={10}
                  height={10}
                  src={itr.image.medium || "/grad_pos.jpg"}
                  alt="Loading"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-3/4 h-full flex flex-col justify-center items-center backdrop-blur-md bg-black/20 p-2 hover:bg-slate-600 overflow-hidden hover:overflow-y-auto transition ease-in-out delay-400 duration-1000">
                <div className="w-full flex flex-row text-[18px] md:text-[20px] font-800 text-white">
                  {itr.name}
                </div>
                <div className="w-full flex flex-row justify-between text-[10px] text-yellow-400 font-600">
                  ⭐🌟⭐⭐{itr.rating.average}
                </div>
                <div className="w-full flex flex-row text-[12px] text-slate-200 font-600">
                  {itr.summary.replace(/<\/?p>|<\/?b>/g, '')}
                </div>
              </div>
            </div>
 
        </>
      ))}
    </div>
  );
}
