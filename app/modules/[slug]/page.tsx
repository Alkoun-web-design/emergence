import {modules} from '@/lib/modules'
import type {Module} from '@/lib/modules'
import ModuleDetails from '@/components/ModuleDetails'
import {headers} from 'next/headers';
import {auth} from "@/auth" 

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const matchingModule:Module | undefined= modules.find(module => module.slug === slug)
    
    const session = await auth.api.getSession({
      headers: await headers()
    })

    return (
        <div className='grid grid-cols-subgrid col-span-full'>
            { matchingModule ?
            <div className='grid grid-cols-subgrid col-span-full'>
                <ModuleDetails 
                    name={matchingModule.name} 
                    description={matchingModule.description}
                    image={matchingModule.image}
                    price={matchingModule.price}
                    discountPrice={matchingModule.discountPrice}
                    registration={matchingModule.registration}
                    duration={matchingModule.registration}
                    moduleSpeakers={matchingModule.speakers} 
                    session={session}    
                />
            </div>
            :
            <div className='grid grid-cols-subgrid col-span-full'>
                <h1>Module Not Found</h1>
                <h2>{slug}</h2>
            </div>
            }
        </div>
    )
}