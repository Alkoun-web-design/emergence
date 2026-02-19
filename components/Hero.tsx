import { FullLogo } from "@/components/Icons";

export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-subgrid justify-items-center col-start-2 col-end-12 ">
                <div className="col-span-full pt-80">
                    <FullLogo />
                </div>
                <div className="col-span-full pb-80">
                    <p className="text-2xl">Experience the re-awakening...</p>
                </div>
            </div>
        </>
    )
}