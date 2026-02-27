import ModuleCard from "./ModuleCard"
import {modules} from "@/lib/modules"
import type { Module } from "@/lib/modules"
import Link from "next/link"

const filteredModules = modules.filter((module:Module) => Number(module.createdAt) < (1000 * 60 * 60 * 24 * 30))

export default function NewCourses() {
    return (
        <div className="grid grid-cols-subgrid col-span-full justify-content-center">
            <h2 className="col-span-full text-3xl text-center my-16">New Additions</h2>
            <div className="grid grid-cols-12 col-start-2 col-end-12 gap-4 justify-content-center">
            {   filteredModules.slice(0, 3).map((module:Module) => (
                    <ModuleCard 
                        key={module.name}
                        name={module.name} 
                        description={module.description} 
                        image={module.image}
                        slug={module.slug}
                        price={module.price}
                        discountPrice={module.discountPrice}
                      />  
            ))}
                <Link href="/modules"><button className="font-semibold w-fit text-nowrap py-4 px-8 my-16 bg-gray-900 text-gray-100 rounded-xl shadow-gray-900/40 hover:shadow-md hover:cursor-pointer hover:bg-[#C1CAA0] hover:-translate-y-1 transition-all duration-300">
                    Explore Modules
                </button></Link>
            </div>
        </div>
    )
}