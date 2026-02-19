import Header from "@/components/Header"
import ModuleDetails from "@/components/ModuleDetails"

export default function Page() {
  return (
    <>
      <Header />
      <section className="grid grid-cols-subgrid col-span-full gap-2 md:gap-4 lg:gap-6">
        <h1 className="col-start-2 col-end-12 font-serif text-2xl md:text-4xl text-gray-900 pt-30">
          10-Month Therapeutic Discussion Series on Relational and Integrative Psychotherapy in Pakistan
        </h1>
        <ModuleDetails />
      </section>
    </>
  )
}