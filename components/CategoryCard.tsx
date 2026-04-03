export default function CateogryCard() {
    return (
        <div className="w-full h-80 col-span-5 md:col-span-3 lg:col-span-2 p-4 rounded-md backdrop-blur-2xl bg-gray-50 shadow-gray-900/30 border border-primary mb-8 hover:shadow-lg hover:-translate-y-1.5 duration-500 transition-all">
            <h3 className="text-2xl">Category</h3>
            <button className="py-2 px-4 rounded-lg bg-gray-900 hover:bg-primary hover:cursor-pointer text-gray-100 font-semibold transition-all duration-all">
                Open Cateogry
            </button>
        </div>
    )
}