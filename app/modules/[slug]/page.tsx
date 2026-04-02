import {modules, speakers} from '@/lib/modules'
import type {Module, Speaker} from '@/lib/modules'
import ModuleDetails from '@/components/ModuleDetails'

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const matchingModule:Module | undefined= modules.find(module => module.slug === slug)

    return (
        <div className='grid grid-cols-subgrid col-span-full'>
            { matchingModule ?
            <div className='grid grid-cols-subgrid col-span-full'>
                <ModuleDetails module={matchingModule} />
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