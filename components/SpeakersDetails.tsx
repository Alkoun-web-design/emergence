'use client'

import {useState} from 'react'

export default function Speakers({name, image, description} : {name:string, image:string, description:string[]}) {
   
   const [showDetails, setShowDetails] = useState(false)
   
   return (
        <div className={`py-2 px-2 transition-all duration-500 ease-in-out ${showDetails ? 'h-fit' : 'h-40 overflow-hidden'}`}>
           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
              <div className="justify-start">
                 <img loading="lazy" className="ring-5 ring-primary w-20 h-20 md:w-28 md:h-28 rounded-full" src={image} alt={name} />
                 {/* <h3 className="my-1 text-primary text-lg lg:text-2xl">{name}</h3> */}
                 <h3 className="font-semiboldmy-1 text-gray-900 text-lg lg:text-2xl">{name}</h3>
              </div>
              <div className="my-auto ml-auto">
                 <button onClick={() => {setShowDetails(prev => !prev)}} className="font-semibold hover:cursor-pointer text-nowrap text-sm md:text-base px-4 py-2 bg-gray-900 hover:text-gray-100 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-gray-50 rounded-md">
                  { showDetails ? <p>Close Profile</p> :  <p>Read Profile</p>}
                  </button> 
              </div>
           </div>
           <div className="text-sm md:text-base">
                {description.map((para:string, index:number) => <p key={index} className="my-4 text-gray-600">{para}</p>) }
           </div>
        </div>
    )
}