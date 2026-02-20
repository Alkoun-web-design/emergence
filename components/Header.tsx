import Link from "next/link"
import { Logo } from "@/components/Icons"

export default function Header(){
    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center px-4 py-2">
            <span className="col-span-2">
                <Logo />
            </span>
            <nav className="grid grid-cols-subgrid col-span-10 justify-content-around my-auto">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/modules">Modules</Link>
            </nav>
        </header>
    )
}