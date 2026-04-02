import {modules} from '@/lib/modules'
import ModuleDetails from '@/components/ModuleDetails'

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const matchingModule = modules.find(module => module.slug === slug)

    return (
        <div className='grid grid-cols-subgrid col-span-full'>
            { matchingModule ?
            <div className='grid grid-cols-subgrid col-span-full'>
                <h1>{slug}</h1>
                <h2>Payment Link for Module if Unpaid</h2>
                <h2>Else the module access button if the user has paid.</h2>
                <ModuleDetails />
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