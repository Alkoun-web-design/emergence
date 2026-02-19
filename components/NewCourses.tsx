import ModuleCard from "./ModuleCard"

export default function NewCourses() {
    return (
        <div className="grid grid-cols-subgrid col-span-full justify-items-center bg-gray-100">
            <h2 className="col-span-full text-3xl my-16">New Additions</h2>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <ModuleCard title="Hey there" description="Things arent always what they seem" image="/cardimage.jpg" href="/"/>
            <button className="col-span-full py-4 px-8 my-16 bg-gray-900 text-gray-100 rounded-xl shadow-gray-900/40 shadow-lg hover:cursor-pointer">
                Explore Modules
            </button>
        </div>
    )
}