import Link from "next/link"
import { Logo } from "@/components/Icons"

export default function Header(){
    return (
        <header className="grid grid-cols-subgrid col-span-full place-content-center">
            <span className="col-span-2">
                <Logo />
            </span>
            <nav className="grid grid-cols-subgrid col-span-full justify-content-around">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/modules">Modules</Link>
            </nav>
        </header>
    )
}