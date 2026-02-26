import Header from "@/components/Header"
import ModuleCard from "@/components/ModuleCard"
import {modules} from "@/lib/modules"
import type { Module } from "@/lib/modules"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full bg-gray-50 pb-20">
        <h1 className="col-start-2 col-end-12 text-2xl md:text-4xl text-gray-900 pt-30">
          Our Modules
        </h1>
      <div className="grid grid-cols-subgrid col-span-full">

        { modules.map((module:Module) => (
          <ModuleCard 
            name={module.name} 
            description={module.description} 
            image={module.image}
            imageAlt={module.imageAlt} 
            slug={module.slug}
            price={module.price}
            discountPrice={module.discountPrice}
          />
        ))}
        </div>
    </div>
  )
}