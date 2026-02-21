import Link from "next/link"
import { ArrowDown, FullLogo, LinkedInBlue, InstagramColored } from "@/components/Icons"

export default function Header(){
    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center px-4 pt-4 pb-2">
            <span className="col-span-2">
                <FullLogo />
            </span>
            <nav className="inline-grid grid-cols-subgrid col-span-10 justify-content-around my-auto font-medium">
                <ul className="col-span-8 flex flex-row justify-around text-nowrap">
                    <li className="mx-4 hover:bg-[#C1CAA0] hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/">Home</Link></li>
                    <li className="mx-4 hover:bg-[#C1CAA0] hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/modules">Our Modules</Link><ArrowDown/></li>
                    <li className="mx-4 hover:bg-[#C1CAA0] hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/about-emergence">About Emergence</Link></li>
                    <li className="mx-4 hover:bg-[#C1CAA0] hover:text-gray-50 transition-all duration-300 px-4 py-2 rounded-md"><Link href="/contact-us">Contact Us</Link></li>
                </ul>
                <ul className="col-span-2 flex flex-row justify-around">
                    <li className="mx-4 hover:text-[#C1CAA0] transition-all duration-300 px-4 py-2 rounded-md"><Link href="/"><InstagramColored/></Link></li>
                    <li className="mx-4 hover:text-[#C1CAA0] transition-all duration-300 px-4 py-2 rounded-md"><Link href="/"><LinkedInBlue/></Link></li>
                </ul>
            </nav>
        </header>
    )
}