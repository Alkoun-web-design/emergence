'use client'

import { HeroLogo } from "@/components/Icons";

export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-subgrid justify-items-center col-start-2 col-end-12 ">
                <div className="col-span-full pt-60">
                    <HeroLogo />
                </div>
                <div className="col-span-full pb-80 text-center">
                    <p className="text-2xl mt-4">Discover and Understand Yourself</p>
                    <p className="text-gray-700 mt-2">Gain a better understanding through our module's, taught by expert speakers.</p>
                    <button className="px-8 py-4 border border-[#C1CAA0] bg-[#C1CAA0] text-gray-50 mx-4 rounded-lg mt-8 hover:bg-gray-50 hover:text-[#C1CAA0] hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg transition-all duration-300">Modules</button>
                    <button className="px-8 py-4 border border-[#C1CAA0] text-[#C1CAA0] bg-gray-50 mx-4 rounded-lg mt-8 hover:bg-[#C1CAA0] hover:text-gray-50 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg transition-all duration-300">Categories</button>
                </div>
            </div>
        </>
    )
}