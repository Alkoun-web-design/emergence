'use client'

import Link from "next/link"
import { ArrowDown, FullLogo, LinkedInBlue, InstagramColored } from "@/components/Icons"
import { useState } from "react"

export default function Header(){

    const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);

    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center px-4 pt-4 pb-2">
            <span className="col-span-2">
                <FullLogo />
            </span>
            <nav className="inline-grid grid-cols-subgrid col-span-10 justify-content-around my-auto font-medium">
                <ul className="col-span-7 flex flex-row justify-around text-nowrap">
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/">Home</Link></li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/modules" onMouseEnter={() => setIsHoverMenuVisible(true)} onMouseLeave={() => setIsHoverMenuVisible(false)} >Our Modules</Link><ArrowDown/></li>
                    <ul className={ isHoverMenuVisible ? `hidden w-full h-30 border border-primary` : `absolute z-10 w-fit h-fit border border-primary p-4`}>
                        <li className="p-2">All Modules</li>
                        <li className="p-2">Category 1</li>
                        <li className="p-2">Category 2</li>
                        <li className="p-2">Category 3</li>
                        <li className="p-2">Category 4</li>
                    </ul>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/about-emergence">About Emergence</Link></li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/contact-us">Contact Us</Link></li>
                </ul>
                <ul className="col-span-1 flex flex-row justify-center text-nowrap">
                    <li className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">Sign In</li>
                </ul>
                <ul className="col-span-2 flex flex-row justify-around">
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md"><Link href="/"><InstagramColored/></Link></li>
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md"><Link href="/"><LinkedInBlue/></Link></li>
                </ul>
            </nav>
        </header>
    )
}