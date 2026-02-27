'use client'
import {motion} from "motion/react"
import { HeroLogo } from "@/components/Icons";
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-subgrid justify-items-center col-start-2 col-end-12 ">
                <div className="col-span-full pt-70">
                    <HeroLogo />
                </div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}} 
                    transition={{duration: 1, delay: 5}} 
                    className="col-span-full pb-80 text-center w-fit">
                    <p className="text-2xl mt-4">Discover and Understand Yourself</p>
                    <p className="text-gray-700 mt-2">Gain a better understanding through our module's, taught by expert speakers.</p>
                    <Link href="/modules"><button className="font-semibold text-lg px-8 py-4 bg-primary text-gray-50 mx-4 rounded-lg mt-16 hover:bg-gray-900 hover:text-gray-50 hover:-translate-y-1 hover:cursor-pointer shadow-gray-900/50 hover:shadow-lg transition-all duration-300">Explore Modules</button></Link>
                </motion.div>
            </div>
        </>
    )
}