import Header from "@/components/Header"
import ModuleCard from "@/components/ModuleCard"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full bg-gray-50 pb-20">
        <h1 className="col-start-2 col-end-12 text-2xl md:text-4xl text-gray-900 pt-30">
          Our Modules
        </h1>
      <div className="grid grid-cols-subgrid col-span-full">
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/1.jpg" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/2.jpg" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/3.jpg" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/4.jpg" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />      
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/5.jpg" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />
        <ModuleCard 
          name="Hey there" 
          description="Things arent always what they seem" 
          image="/images/workshops/6.png" 
          slug="/test"
          price="24.00"
          discount={true}
          discountPrice="18.00"
        />
      </div>
    </div>
  )
}