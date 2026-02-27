import Link from "next/link"

export default function ModuleCard({ name, image, description, price, discountPrice, slug }: {name: string; image:string; description: string; price: string, discountPrice: string | null, slug: string;}) {
  return (
    <div className="flex flex-col col-span-4 w-full mx-1 rounded-md backdrop-blur-2xl bg-gray-100 shadow-gray-900/30 border border-primary mb-8 hover:shadow-lg hover:-translate-y-1.5 duration-500 transition-all">
        <div className="mb-2">
            <img className="object-cover h-76" src={image} alt={name} loading="lazy"/>
        </div>
        <div className="p-2">
            <div className="p-2">
                <h3 className="my-1 text-lg text-justify font-semibold leading-6">{name}</h3>
                <p className="my-1 text-xs">Date: </p>
            </div>
            <div className="p-2 h-30 w-full text-wrap truncate">
                <p className='my-2 text-gray-600 text-sm md:text-base'>{description}</p>
            </div>
            {/* <Link className="justify-end ml-auto" href="/test">
                    <button className="mb-auto py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-300">
                        Read Details
                    </button>
                </Link> */}
            <div className="m-2">
                <img className="h-16 w-16 rounded-full" src="/" alt="speaker"/>
            </div>
            <div className="flex flex-row my-2 p-2">
                <Link className="justify-start" href="/enroll">
                    <button className="mb-auto py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-300">
                        Enroll Now { discountPrice ? <><span className="mx-1">{price}</span><span className="mx-1">{discountPrice}USD</span></> : <span className="mx-2">{price}USD</span> }
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}