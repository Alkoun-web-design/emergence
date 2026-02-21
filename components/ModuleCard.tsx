export default function ModuleCard({ image, name, description, price, discount, discountPrice, slug }: {image:string; name: string; description: string; price: string, discount: boolean, discountPrice: string, slug: string;}) {
  return (
    // <div className="col-span-3 p-4 border-2 border-gray-900 rounded-md backdrop-blur-2xl bg-gray-100">
    <div className="col-span-4 p-4 w-full mx-1 rounded-md backdrop-blur-2xl bg-gray-100 shadow-gray-900/30 border border-[#C1CAA0] mb-8 hover:shadow-lg hover:-translate-y-1.5 duration-500 transition-all">
        <div className="h-48 w-full my-2">
            <img className="object-cover" src={image} alt={name} loading="lazy"/>
        </div>
        <div className="my-2">
            <h4 className="text-2xl">{name}</h4>
            <p>{description}</p>
        </div>
        <div>
            <img className="h-20 w-20 rounded-full" src="/" alt="speaker"/>
        </div>
        <div className="flex my-2">
            <button className="py-2 px-4 rounded-lg bg-[#C1CAA0] hover:cursor-pointer text-gray-100">Enroll Now</button>
            { discount ? (
                <><span className="mx-2">{price}</span><span className="mx-2">{discountPrice}</span></>
            ) : (
            <span className="mx-2">{price}</span>
            )}
        </div>
    </div>
  )
}