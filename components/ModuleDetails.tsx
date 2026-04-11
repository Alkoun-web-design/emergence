'use client'

// import { div } from "motion/react-client";
import { useState } from "react"
import { motion } from "motion/react"
import Speakers from "@/components/SpeakersDetails"
import {speakers} from '@/lib/modules'
import Link from "next/link"
import type { ModuleDescription } from "@/lib/modules"
// import type {Module, Speaker} from "@/lib/modules";

type session = {
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    };
} | null

export default function ModuleDetails({name, description, image, price, discountPrice, moduleSpeakers, registration, duration, session} : {name:string, description:ModuleDescription, image:string, price:string, discountPrice:string | null, moduleSpeakers: string[], registration:'Open'|'Closed', duration:string, session:session}) {

   const [showModuleDetails, setShowModuleDetails] = useState(false)
   const speakersSet = new Set(moduleSpeakers)
   const filteredSpeakers = speakers.filter(speaker => speakersSet.has(speaker.name))

   return (
      <>        
         <h1 className="text-center mx-8 mt-20 text-3xl grid col-span-full place-items-center mb-4">{name}</h1>
         <motion.div
            layout 
            // className="shadow-lg grid grid-cols-subgrid col-start-2 col-end-12 bg-gray-100 rounded-lg p-8 text-gray-900 overflow-hidden">
            className={`shadow-lg grid grid-cols-subgrid col-start-2 col-end-12 bg-gray-50 rounded-lg p-8 text-gray-900 ${showModuleDetails ? 'h-fit' : 'h-140 overflow-hidden' } `}>
            {/* <div className={`col-span-full h-80 md:h-full w-full md:col-span-5 bg-[url(/water-ripples-4.webp)] md:bg-contain bg-no-repeat bg-cover bg-fixed rounded-md`}> */}
            <div className='col-span-full h-80 md:h-full w-full md:col-span-5 rounded-md'>
                <img className="sticky w-full h-auto top-10" src={image} alt="Workshop Image" />
            </div>
            <motion.div
               layout
               // initial={{height: '10rem', overflow: 'hidden'}}
               // animate={{height: 'fit-content', transition: { duration: 0.8 }}}
               className={`col-span-full md:col-span-5 ${showModuleDetails ? 'h-fit' : 'h-100 overflow-hidden' } `}>
               <p>Registration is {registration}</p>
               <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">
                  Overview
               </h2>
               {description.overview.map((overview:string, idx:number) => <p key={idx} className="my-4 text-gray-600 text-sm md:text-base">{overview}</p>)}
               <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">
                  Orientation and Focus
               </h2>
               {description.orientation.map((orientation:string, idx:number) => <p key={idx} className="my-4 text-gray-600 text-sm md:text-base">{orientation}</p>)}
               <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">
                  Guest Supervisors
               </h2>
               {description.guests.map((guests:string, idx:number) => <p key={idx} className="my-4 text-gray-600 text-sm md:text-base">{guests}</p>)}
               <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">
                  Who Is This Series For?
               </h2>
               {description.audience.map((audience:string, idx:number) => <p key={idx} className="my-4 text-gray-600 text-sm md:text-base">{audience}</p>)}
            </motion.div>
            <div className="col-start-7 col-end-12">
               <button onClick={() => {setShowModuleDetails(prev => !prev)}}className="font-semibold text-nowrap text-sm md:text-base hover:cursor-pointer px-6 py-4 my-4 bg-gray-900 hover:text-gray-100 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-gray-50 rounded-md">
                  {showModuleDetails ? <p>Read Less</p> : <p>Read More</p>}
               </button>
            </div>
         </motion.div>

         <div className="shadow-lg grid-cols-subgrid col-start-2 col-end-12 lg:col-start-2 lg:col-end-8 bg-gray-50 rounded-lg p-8 text-gray-900 my-4">
            <h2 className="text-2xl lg:text-3xl mb-4 border-b-2 border-transparent border-b-gray-300">
               Guest Supervisors
            </h2>
               { moduleSpeakers ?
                  filteredSpeakers.map((speaker) => (
                     <Speakers 
                        key={speaker.name}
                        name={speaker.name} 
                        image={speaker.image} 
                        description={speaker.description} 
                     />
                  ))
               :
                  <div>
                     <h3>Speakers are yet to be decided.</h3>
                  </div>
               }
         </div>

         <div className=" my-4 shadow-lg col-start-2 col-end-12 lg:sticky lg:top-16 lg:col-start-8 lg:col-end-12 bg-gray-50 h-fit rounded-lg p-8 text-gray-900">
            <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Format</h2>
            <ul className="list-disc text-sm md:text-base py-8">
               <li className="my-2 text-gray-600">10 monthly sessions</li>
               <li className="my-2 text-gray-600">a supervision demonstration provides focus, to keep the exploration experience- and practice-near</li>
               <li className="my-2 text-gray-600">participatory supervision-based discussions</li>
               <li className="my-2 text-gray-600">open-ended, relationally responsive format</li>
               <li className="my-2 text-gray-600">emphasis on live material and reflective dialogue</li>
               <li className="my-2 text-gray-600">Sessions are intentionally loosely structured, allowing supervisors and participants to work with what emerges in the relational field. Supervisors model how complexity can be held, reflected upon, and used constructively in therapeutic work.</li>
            </ul>
            <div className="flex justify-center my-4">
               <Link href="https://forms.gle/7wpiJXNioFoaYKtz9" className="font-semibold text-nowrap text-sm md:text-base cursor-pointer px-6 py-4 bg-gray-900 hover:text-gray-100 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-gray-50 rounded-md">
                  Register
               </Link>
            </div>
         </div>
      </>
   )
}