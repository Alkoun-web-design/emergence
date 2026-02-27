import Header from "@/components/Header"
import ModuleCard from "@/components/ModuleCard"
import {modules} from "@/lib/modules"
import type { Module } from "@/lib/modules"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full bg-gray-50 pb-20">
      <div className="grid grid-cols-subgrid col-span-full justify-content-center">
        <h1 className="col-span-full text-3xl text-center my-16">
          Our Modules
        </h1>
        <div className="grid grid-cols-12 col-start-2 col-end-12 gap-4 justify-content-center">
          { modules.map((module:Module) => (
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
        </div>
      </div>
    </div>
  )
}