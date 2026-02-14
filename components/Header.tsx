import Link from "next/link"

export default function Header(){
    return (
        <header className="col-span-full">
            <span className="inline-block">emergence</span>
            <nav className="inline-block">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/modules">Modules</Link>
            </nav>
        </header>
    )
}