export default function ModuleCard({ image, title, description, href }: {image:string; title: string; description: string; href: string;}) {
  return (
    // <div className="col-span-3 p-4 border-2 border-gray-900 rounded-md backdrop-blur-2xl bg-gray-100">
    <div className="col-span-3 p-4 border-2 rounded-md backdrop-blur-2xl bg-gray-100 shadow-2xl mb-8">
        <div className="h-48 w-full my-2">
            <img className="object-cover" src={image} alt={title} loading="lazy"/>
        </div>
        <div className="my-2">
            <h4 className="text-2xl">{title}</h4>
            <p>{description}</p>
        </div>
        <div>
            <img className="h-20 w-20 rounded-full" src="" alt="speaker"/>
        </div>
        <div className="my-2">
            <button className="py-2 px-4 rounded-lg bg-lime-800 hover:cursor-pointer text-gray-100">Enroll Now</button>
        </div>
    </div>
  )
}