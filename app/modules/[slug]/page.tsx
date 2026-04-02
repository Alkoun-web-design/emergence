import {modules} from '@/lib/modules'

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const matchingModule = modules.find(module => module.slug === slug)

    return (
    <>
        { matchingModule ?
        
        <div>My Post: {slug}
            <h1>Module Details</h1>
            <h2>Payment Link for Module if Unpaid</h2>
            <h2>Else the module access button if the user has paid.</h2>
        </div>
        :
        <div>My Post: {slug}
            <h1>Module Not Found</h1>
        </div>
        }
    </>
    )
}