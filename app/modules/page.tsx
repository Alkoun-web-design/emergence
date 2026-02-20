import Header from "@/components/Header"
import ModuleCard from "@/components/ModuleCard"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <Header />
      <h1>Modules</h1>
      <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
      <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
      <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
      <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
      <ModuleCard name="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" slug="/"/>
    </div>
  )
}