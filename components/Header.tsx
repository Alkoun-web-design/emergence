'use client'

import Link from "next/link"
import { ArrowDown, HeaderLogo, LinkedInBlue, InstagramColored, Menu } from "@/components/Icons"
import { useState, useRef } from "react"
import { signInAction, signUpAction } from "@/app/actions/auth";

export default function Header(){

    const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);
    const [emailAddress, setEmailAddress] = useState<string>('');
    // const emailAddressRef = useRef<HTMLInputElement>(null);
    const signInModalRef = useRef<HTMLDialogElement>(null);
    const signInTabRef = useRef<HTMLButtonElement>(null);
    const signUpTabRef = useRef<HTMLButtonElement>(null);
    const [showSignInTab, setShowSignInTab] = useState(true);

    function closeSigInModal(){
        if (signInModalRef.current) signInModalRef.current.close();
    }

    function showSigInModal(){
        if (signInModalRef.current) signInModalRef.current?.showModal();
    }

    // function switchTab(e:HTMLButtonElement){
    //     // if (e.textContent === 'Sign In') {

    //     } else {

    //     }
    // }

    function changeTab() {
        setShowSignInTab(prev => !prev)
    }



    // async function signUp(e: React.MouseEvent<HTMLButtonElement>){
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('https://localhost:3000/api/sign-up', 
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //                 body: emailAddress
    //             },
    //         )
    //         const data = await response.json();
    //         return data 
    //     } catch (error) {
    //         console.log(error)
    //         return "There was a problem, We couldn't sign you in."
    //     }
    // } 

    // async function signIn(e: React.MouseEvent<HTMLButtonElement>){
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:3000/api/sign-in', 
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //                 body: emailAddress
    //             },
    //         )
    //         const data = await response.json();
    //         return data 
    //     } catch (error) {
    //         console.log(error)
    //         return "l:There was a problem, We couldn't sign you in."
    //     }
    // }

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
                {/* <ul className="col-span-3 lg:col-span-1 flex flex-row justify-center text-nowrap" onClick={showSigInModal}> */}
                <ul className="col-span-3 lg:col-span-1 flex flex-row justify-center text-nowrap">
                    <li onClick={showSigInModal} className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:cursor-pointer hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <button>Sign In</button>
                    </li>
                    {/* <li className="mx-1 bg-gray-900 text-gray-50 hover:bg-primary hover:cursor-pointer hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md">
                        <button>Sign Up</button>
                    </li> */}
                </ul>
                <ul className="col-span-2 lg:col-span-1 flex flex-row justify-around">
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
                <div className="flex flex-row">
                    <button ref={signInTabRef} onClick={changeTab} className="py-2 px-4 hover:bg-primary transition-all duration-300 hover:text-gray-100 hover:cursor-pointer">Sign In</button>
                    <button ref={signUpTabRef} onClick={changeTab} className="py-2 px-4 hover:bg-primary transition-all duration-300 hover:text-gray-100 hover:cursor-pointer">Sign Up</button>
                </div>
                {showSignInTab ? 
                <div className="border border-primary p-8 rounded-lg">
                    {/* <details open name="sign-in-sign-up" className="transition-all duration-300"> */}
                        {/* <summary>Sign In</summary> */}
                        <h2 className="mt-8 text-xl text-center">Sign In with your Email</h2>
                        <form action={signInAction} className="">
                            <div className="my-6">
                                <label htmlFor="email" className="mr-2">Email</label>
                                <input name="email" type="email" placeholder="Your email address" className="border border-primary rounded-md p-1 w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value) }></input>
                                {/* <input ref={emailAddressRef} name="email" placeholder="Your email address" type="email" className="border border-primary rounded-md p-1 w-full"></input> */}
                            </div>
                            <div className="my-6">
                                <label htmlFor="password" className="mr-2">Email</label>
                                <input name="password" type="password" placeholder="Your password" className="border border-primary rounded-md p-1 w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value) }></input>
                            </div>
                            <div className="flex my-6 justify-center">
                                {/* <button onClick={signIn} className="px-6 py-2 bg-gray-900 text-gray-50 hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-lg font-semibold hover:cursor-pointer"> */}
                                <button className="px-6 py-2 bg-gray-900 text-gray-50 hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-lg font-semibold hover:cursor-pointer">
                                    Sign in
                                </button>
                            </div>
                            <div className="flex my-6 justify-center align-end">
                                <p>Or if you dont have an account, sign up.</p>
                            </div>
                            <div className="flex my-6 justify-center">
                                <p></p>
                            </div>
                        </form>
                    {/* </details> */}
                    {/* <details name="sign-in-sign-up" className="transition-all duration-300"> */}
                        {/* <summary>Sign Up</summary> */}
                    </div>
                    :
                    <div className="border border-primary p-8 rounded-lg">
                        <h2 className="mt-8 text-xl text-center">Sign Up</h2>
                        <form action={signUpAction} className="">
                            <div className="my-6">
                                <label htmlFor="name" className="mr-2">Email</label>
                                <input name="name" type="text" placeholder="Your full name" className="border border-primary rounded-md p-1 w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value) }></input>
                            </div>
                            <div className="my-6">
                                <label htmlFor="email" className="mr-2">Email</label>
                                <input name="email" type="email" placeholder="Your email address" className="border border-primary rounded-md p-1 w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value) }></input>
                            </div>
                            <div className="my-6">
                                <label htmlFor="password" className="mr-2">Email</label>
                                <input name="password" type="password" placeholder="Your password" className="border border-primary rounded-md p-1 w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value) }></input>
                            </div>
                            <div className="flex my-6 justify-center">
                                {/* <button onClick={signIn} className="px-6 py-2 bg-gray-900 text-gray-50 hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-lg font-semibold hover:cursor-pointer"> */}
                                <button className="px-6 py-2 bg-gray-900 text-gray-50 hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-lg font-semibold hover:cursor-pointer">
                                    Sign up
                                </button>
                            </div>

                            <div className="flex my-6 justify-center">
                                <p></p>
                            </div>
                        </form>
                    {/* </details> */}
                </div>
            }
            </dialog>
        </header>
    )
}