import { FooterLogo } from "./Icons";
import Link from "next/link";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer() {


    return(
        <footer className="grid grid-cols-subgrid col-span-full bg-gray-700 py-10 text-gray-50">
            <div className="col-start-2 col-end-5 mr-8">
                <FooterLogo />
            </div>
            <div className="col-start-5 col-end-7 pt-5">
                <h3 className="text-lg font-semibold pb-2">Links</h3>
                <ul>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">All Modules</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">About Emergence</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Contact Us</li></Link>
                </ul>
            </div>
            <div className="col-start-7 col-end-9 pt-5">
                <h3 className="text-lg font-semibold  pb-2">Categories</h3>
                <ul>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Jungian Psychology</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Divination</li></Link>
                    <Link href="/modules"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Dreams</li></Link>
                </ul>
            </div>
            <div className="col-start-9 col-end-11 pt-5">
                <h3 className="text-lg font-semibold pb-2">Legal</h3>
                <ul>
                    <Link href="/terms-and-conditions"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Terms & Conditions</li></Link>
                    <Link href="/privacy-policy"><li className="py-2 px-4 hover:bg-primary hover:text-gray-50 transition-all duration-300 rounded-lg">Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="grid col-span-full text-center mt-12">
                Copyright {currentYear.toString()}
            </div>
        </footer>
    )
}