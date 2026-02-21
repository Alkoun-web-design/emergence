import { FullLogo } from "./Icons";

export default function Footer() {
    return(
        <footer className="grid grid-cols-subgrid col-span-full">
            <div className="col-start-2 col-end-5">
                <FullLogo />
            </div>
            <div className="col-start-6 col-end-8">
                Links
            </div>
            <div className="col-start-9 col-end-11">
                Recent Modules
            </div>
        </footer>
    )
}