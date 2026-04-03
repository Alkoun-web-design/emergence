import Link from "next/link"
import {speakers} from '@/lib/modules'
import Image from "next/image"

export default function ModuleCard({ name, image, shortDescription, price, discountPrice, slug, registration, dateOfCommencement, moduleSpeakers }: {name: string, image:string, shortDescription:string, price:string, discountPrice:string | null, slug:string, registration:'Open' | 'Closed', dateOfCommencement:string, moduleSpeakers:string[]}) {

    const filteredSpeakers = speakers.filter(speaker => moduleSpeakers.includes(speaker.name));

    return (
        <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 w-full mx-1 rounded-md backdrop-blur-2xl bg-gray-100 shadow-gray-900/30 border border-primary mb-8 hover:shadow-lg hover:-translate-y-1.5 duration-500 transition-all">
            <div className={`mb-2 h-70 w-full bg-[url(${image})] bg-no-repeat bg-cover`}>
                <h3 className="font-semibold text-lg text-gray-100 text-justify leading-6 bg-gray-900/40 p-2">{name}</h3>
                {/* <img className="object-cover h-76" src={image} alt={name} loading="lazy"/> */}
                {/* <Image objectFit="cover" width={400} height={120} src={image} alt={name} loading="lazy"/> */}
            </div>
            <div className="p-2">
                {/* <div className="p-2"> */}
                    <div className="pt-4 pb-2">
                        <p className={`${registration === 'Open' ? 'text-green-600 y-1 text-xs ' : 'text-gray-900 y-1 text-xs'}`}>
                            Registration: {registration} 
                        </p>
                        <p className="my-1 text-xs">
                            Commencement Date: {dateOfCommencement}
                        </p>
                    </div>
                {/* </div> */}
                <div className="px-4 mt-2 mb-4 h-30 w-full text-wrap truncate">
                    <p className='text-gray-600 text-sm md:text-base'>{shortDescription}</p>
                </div>
                {/* <Link className="justify-end ml-auto" href="/test">
                        <button className="mb-auto py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-300">
                            Read Details
                        </button>
                    </Link> */}
                <div className="flex flex-row mx-2 overflow-hidden">
                    <p className="my-1 text-xs">Speakers:</p>
                </div>
                <div className="flex flex-row mx-2 my-2 overflow-hidden">
                    {filteredSpeakers.map(filteredSpeaker => (
                        // <img key={filteredSpeaker.name} className="h-14 w-14 rounded-full -mr-4" src={filteredSpeaker.image} alt={filteredSpeaker.name} loading="lazy"/>
                        <Image key={filteredSpeaker.name} height={50} width={50} className="rounded-full hover:-translate-y-1 duration-300 transition-all -mr-4" src={filteredSpeaker.image} alt={filteredSpeaker.name} loading="lazy"/>
                    ))}
                </div>
                <div className="flex flex-row my-2 p-2 justify-center">
                    {/* <Link className="justify-start" href="/enroll"> */}
                        {/* <button className="mb-auto py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-300">
                            Enroll Now { discountPrice ? <><span className="mx-1">{price}</span><span className="mx-1">{discountPrice}USD</span></> : <span className="mx-2">{price}USD</span> }
                        </button> */}
                    {/* </Link> */}
                    <Link className="justify-start" href={`/modules/${slug}`} >
                        <button className="mb-auto py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-300">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}