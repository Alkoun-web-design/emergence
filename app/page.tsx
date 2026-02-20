import BestSelling from "@/components/BestSelling";
import Hero from "../components/Hero";
import Stats from "@/components/Stats";
import ModuleCard from "@/components/ModuleCard";
import NewCourses from "@/components/NewCourses";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-subgrid col-span-full bg-gray-100 pb-20">
        <NewCourses  />
      </div>
      <div className="grid grid-cols-subgrid col-span-full bg-gray-100 pb-20">
        <BestSelling />
      </div>
      <Stats />
    </>
  );
}
