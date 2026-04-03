export default function Speakers({name, image, description} : {name:string, image:string, description:string}) {
    return (
        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
              <div className="justify-start">
                 <img loading="lazy" className="ring-5 ring-primary w-20 h-20 md:w-28 md:h-28 rounded-full" src={image} alt={name} />
                 {/* <h3 className="my-1 text-primary text-lg lg:text-2xl">{name}</h3> */}
                 <h3 className="font-semiboldmy-1 text-gray-900 text-lg lg:text-2xl">{name}</h3>
              </div>
              <div className="my-auto ml-auto">
                 <button className="hover:cursor-pointer text-nowrap text-sm md:text-base px-4 py-2 bg-gray-900 hover:text-gray-100 hover:bg-primary hover:-translate-y-1 transition-all duration-300 text-gray-50 rounded-md"></button> 
              </div>
           </div>
           <div className="text-sm md:text-base">
                {description}
              {/* <p className="my-4 text-gray-600">Humaira Hassnain is an integrative psychotherapist and clinical supervisor with over two decades of experience working with individuals, couples, families, and groups across a range of clinical settings. She began her professional journey as a clinical psychologist, training and working in hospital and community contexts, which continues to shape her careful attention to assessment, ethical practice, and thoughtful clinical formulation.</p>
              <p className="my-4 text-gray-600">Her work is informed by an integrative, trauma-informed approach, drawing from relational and systemic therapy, attachment-based work, parts-based approaches, mindfulness, and compassion-focused practice. She is particularly interested in emotional processes, relational patterns, and the cultural and intergenerational stories people carry with them into therapy. Her way of working values depth, curiosity, and emotional safety, allowing therapy to unfold at a pace that feels respectful and containing rather than rushed.</p>
              <p className="my-4 text-gray-600">As a supervisor, Humaira works from an integrative and relational framework informed by parts-based thinking and the 7-Eyed Model of Supervision. She offers a collaborative supervisory space where therapists can reflect on clinical work, ethical questions, and their own responses to the work with honesty and care.</p>
              <p className="my-4 text-gray-600">At the heart of her work is a commitment to slowing down, listening closely, and supporting therapists to develop clarity, confidence, and a grounded therapeutic voice—while remaining ethical, reflective, and human in the work.</p> */}
           </div>
        </div>
    )
}