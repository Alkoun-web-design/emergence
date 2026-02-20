import ModuleCard from "./ModuleCard"
import Link from "next/link"

export default function BestSelling() {
    return (
        <>
        <div className="grid grid-cols-subgrid col-span-full justify-content-center">
            <h2 className="col-span-full text-3xl text-center my-16">Best Selling</h2>
            <div className="grid grid-cols-12 col-start-2 col-end-12 gap-4 justify-content-center">
                <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
                <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
                <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
                {/* <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
                <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/> */}
                <button className="w-fit text-nowrap py-4 px-8 my-16 bg-gray-900 text-gray-100 rounded-xl shadow-gray-900/40 shadow-lg hover:cursor-pointer">
                    Explore Modules
                </button>
            </div>
        </div>
        </>
    )
}