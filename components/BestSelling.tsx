import ModuleCard from "./ModuleCard"

export default function BestSelling() {
    return (
        <div className="grid grid-cols-subgrid col-start-2 col-end-12 justify-items-center">
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
        </div>
    )
}