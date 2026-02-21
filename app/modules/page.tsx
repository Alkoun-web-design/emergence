import Header from "@/components/Header"
import ModuleCard from "@/components/ModuleCard"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <Header />
      <h1 className="text-3xl text-center">Modules</h1>
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
  )
}