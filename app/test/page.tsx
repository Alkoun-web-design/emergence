import Header from "@/components/Header"
import ModuleDetails from "@/components/ModuleDetails"

export default function Page() {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <Header />
      <h1>Modules</h1>
      <ModuleDetails />
    </div>
  )
}