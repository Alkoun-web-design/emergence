import { FooterLogo } from "./Icons";
import Link from "next/link";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer() {


    return(
        <footer className="grid grid-cols-subgrid col-span-full bg-gray-300 py-10">
            <div className="col-start-2 col-end-5">
                <FooterLogo />
            </div>
            <div className="col-start-5 col-end-7">
                <h3 className="text-lg">Links</h3>
                <ul>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">All Modules</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">About Emergence</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">Contact Us</li></Link>
                </ul>
            </div>
            <div className="col-start-7 col-end-9">
                <h3 className="text-lg">Categories</h3>
                <ul>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">Jungian Psychology</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">Divination</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">Dreams</li></Link>
                </ul>
            </div>
            <div className="col-start-9 col-end-11">
                <h3 className="text-lg">Legal</h3>
                <ul>
                    <Link href="/terms-and-conditions"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">JTerms & Conditions</li></Link>
                    <Link href="/privacy-policy"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300">Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="grid col-span-full text-center mt-8">
                Copyright {currentYear.toString()}
            </div>
        </footer>
    )
}