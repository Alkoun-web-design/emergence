import CateogryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <div className="grid grid-cols-subgrid col-span-full justify-content-center">
      <h2 className="col-span-full text-3xl text-center my-16">Categories</h2>
      <div className="grid grid-cols-subgrid col-start-2 col-end-12 place-content-center">
        <CateogryCard />
        <CateogryCard />
        <CateogryCard />
        <CateogryCard />
        <CateogryCard />
      </div>
    </div>
  );
}