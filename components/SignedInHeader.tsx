'use client'

import Link from "next/link"
import { ArrowDown, HeaderLogo, LinkedInBlue, InstagramColored, Menu } from "@/components/Icons"
import { useState, useRef } from "react"
import signOutAction from "@/app/actions/auth";

export default function SignedInHeader(){

    const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);
    const signInModalRef = useRef<HTMLDialogElement>(null);

    function closeSigInModal(){
        if (signInModalRef.current) signInModalRef.current.close();
    }

    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center px-4 pt-4">
            <span className="col-span-5 lg:col-span-2">
                <HeaderLogo />
            </span>
            <nav className="inline-grid grid-cols-subgrid col-span-7 lg:col-span-10 justify-content-around my-auto font-semibold align-middle">
                <ul className="hidden lg:flex lg:col-span-7 flex-row justify-around text-nowrap">
                    <li className="mx-2 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/">Home</Link></li>
                    <li className="mx-2 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md" onMouseEnter={() => setIsHoverMenuVisible(true)} onMouseLeave={() => setIsHoverMenuVisible(false)}>
                        <Link href="/modules">Our Modules</Link><ArrowDown/>
                        <ul className={ isHoverMenuVisible ? `absolute z-10 w-fit h-fit border border-primary text-gray-900 rounded-lg top-16 bg-gray-50` : `hidden w-fit h-fit border border-primary text-gray-50`}>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">All Modules</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 1</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 2</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 3</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 4</li></Link>
                        </ul>
                    </li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <Link href="/about-emergence">About Emergence</Link>
                    </li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <button popoverTarget="nav-menu" className="col-span-1 lg:hidden p-2 hover:cursor-pointer rounded-md w-fit h-fit hover:bg-primary hover:text-white transition-all duration-300">
                    <Menu />
                </button>
                <ul popover="auto" id="nav-menu" className="inset-0 rounded-md border border-primary h-fit w-fit overflow-visible lg:hidden flex-col justify-around text-nowrap">
                    <li className="hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/">Home</Link></li>
                    <li className="hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md" onMouseEnter={() => setIsHoverMenuVisible(true)} onMouseLeave={() => setIsHoverMenuVisible(false)}>
                        <Link href="/modules">Our Modules</Link><ArrowDown/>
                        <ul className={ isHoverMenuVisible ? `absolute z-10 w-fit h-fit border border-primary text-gray-900 rounded-lg top-16 bg-gray-50` : `hidden w-fit h-fit border border-primary text-gray-50`}>
                            <Link href="/modules"><li className="py-2 px-6 hover:bg-primary hover:text-gray-50">All Modules</li></Link>
                            <Link href="/modules"><li className="py-2 px-6 hover:bg-primary hover:text-gray-50">Category 1</li></Link>
                            <Link href="/modules"><li className="py-2 px-6 hover:bg-primary hover:text-gray-50">Category 2</li></Link>
                            <Link href="/modules"><li className="py-2 px-6 hover:bg-primary hover:text-gray-50">Category 3</li></Link>
                            <Link href="/modules"><li className="py-2 px-6 hover:bg-primary hover:text-gray-50">Category 4</li></Link>
                        </ul>
                    </li>
                    <li className="hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <Link href="/about-emergence">About Emergence</Link>
                    </li>
                    <li className="hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <ul className="col-span-3 lg:col-span-1 flex flex-row justify-center text-nowrap">
                    <li className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:cursor-pointer hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <button>User</button>
                    </li>
                </ul>
                <ul className="col-span-2 lg:col-span-2 flex flex-row justify-around">
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md">
                        <Link href="/"><InstagramColored/></Link>
                    </li>
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md">
                        <Link href="/"><LinkedInBlue/></Link>
                    </li>
                </ul>
            </nav>
            <dialog id="sigin-modal" ref={signInModalRef} className="backdrop-blur border border-primary rounded-lg py-8 px-12 w-fit h-hit shadow-xl shadow-gary-900/40 mx-auto mt-20">
                <form method="dialog" className="mt-2 mb-8">
                    <button onClick={closeSigInModal} className="bg-gray-900 text-gray-50 rounded-md px-3 py-1 font-semibold hover:cursor-pointer hover:bg-primary transition-all duration-300" formMethod="dialog" value="close">
                        X
                    </button>
                </form>
                <h2 className="text-xl text-center">User Profile</h2>
                <form action={signOutAction}>
                    <button type="submit" className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:cursor-pointer hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        Sign Out
                    </button>
                </form>
            </dialog>
        </header>
    )
}