export default function CateogryCard() {
    return (
        <div className="h-80 col-span-2 p-4 w-full mx-1 rounded-md backdrop-blur-2xl bg-gray-50 shadow-gray-900/30 border border-[#C1CAA0] mb-8 hover:shadow-lg hover:-translate-y-1.5 duration-500 transition-all">
            <h3 className="text-2xl">Cateogry</h3>
            <button className="py-2 px-4 rounded-lg bg-[#C1CAA0] hover:cursor-pointer text-gray-100">
                Open Cateogry
            </button>
        </div>
    )
}