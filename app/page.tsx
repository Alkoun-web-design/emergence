import BestSelling from "@/components/BestSelling";
import Hero from "../components/Hero";
import ModuleCard from "@/components/ModuleCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-subgrid col-span-full bg-gray-200">
        <BestSelling />
      </div>
      
    </>
  );
}
