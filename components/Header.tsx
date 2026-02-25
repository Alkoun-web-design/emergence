'use client'

import Link from "next/link"
import { ArrowDown, FullLogo, LinkedInBlue, InstagramColored } from "@/components/Icons"
import { useState, useRef } from "react"

export default function Header(){

    const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);
    const [emailAddress, setEmailAddress] = useState('');
    const signInModalRef = useRef(null);

    function closeSigInModal(){
        if (signInModalRef !== null) signInModalRef.current?.close();
    }

    function showSigInModal(){
        if (signInModalRef !== null) signInModalRef.current?.showModal();
    }

    async function signIn(){
        try {
            const response = await fetch('', 
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: emailAddress,
                },
            )
            const data = await response.json();
            return data 
        } catch (error) {
            return "There was a problem, We couldn't sign you in."
        }
    }

    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center px-4 pt-4">
            <span className="col-span-2">
                <FullLogo />
            </span>
            <nav className="inline-grid grid-cols-subgrid col-span-10 justify-content-around my-auto font-semibold align-middle">
                <ul className="col-span-7 flex flex-row justify-around text-nowrap">
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/">Home</Link></li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md" onMouseEnter={() => setIsHoverMenuVisible(true)} onMouseLeave={() => setIsHoverMenuVisible(false)}><Link href="/modules">Our Modules</Link><ArrowDown/>
                        <ul className={ isHoverMenuVisible ? `absolute z-10 w-fit h-fit border border-primary text-gray-900 rounded-lg top-16 bg-gray-50` : `hidden w-fit h-fit border border-primary text-gray-50`}>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">All Modules</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 1</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 2</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 3</li></Link>
                            <Link href="/modules"><li className="py-4 px-8 hover:bg-primary hover:text-gray-50">Category 4</li></Link>
                        </ul>
                    </li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/about-emergence">About Emergence</Link></li>
                    <li className="mx-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/contact-us">Contact Us</Link></li>
                </ul>
                <ul className="col-span-1 flex flex-row justify-center text-nowrap" onClick={showSigInModal}>
                    <li className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:cursor-pointer hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"></li>
                    <button >Sign In</button>
                </ul>
                <ul className="col-span-2 flex flex-row justify-around">
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md"><Link href="/"><InstagramColored/></Link></li>
                    <li className="mx-1 hover:text-primary transition-all duration-300 px-2 py-2 rounded-md"><Link href="/"><LinkedInBlue/></Link></li>
                </ul>
            </nav>
            <dialog id="sigin-modal" ref={signInModalRef} className="backdrop-blur border border-primary rounded-lg py-8 px-12 w-fit h-hit shadow-xl shadow-gary-900/40 mx-auto mt-20">
                <form method="dialog" className="mt-2 mb-8">
                    <button onClick={closeSigInModal} className="bg-gray-900 text-gray-50 rounded-md px-3 py-1 font-semibold hover:cursor-pointer hover:bg-primary transition-all duration-300" formMethod="dialog" value="close">
                        X
                    </button>
                </form>
                <h2 className="text-xl text-center">Sign In with your Email</h2>
                <form className="">
                    <div className="my-6">
                        <label htmlFor="email" className="mr-2">Email</label>
                        <input name="email" type="email"className="border border-primary rounded-md p-1" onChange={(e) => setEmailAddress(e)}></input>
                    </div>
                    <div className="flex my-6 justify-center">
                        <button onClick={signIn} className="block px-4 py-2 bg-gray-900 text-gray-50 hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-lg font-semibold hover:cursor-pointer">
                            Sign in
                        </button>
                        <p></p>
                    </div>
                </form>
            </dialog>
        </header>
    )
}