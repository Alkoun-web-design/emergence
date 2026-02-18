export default function ModuleDetails(){

    const showAll = true;

    return (
        <div className="grid grid-cols-subgrid col-span-full bg-gray-300">
            <div className="col-start-2 col-end-12 bg-gray-100">
                {/* <h1>{title}</h1> */}
                <h1>Module title</h1>
            </div>
            <div className="shadow-lg grid grid-cols-subgrid col-span-full bg-gray-50 rounded-lg p-8 text-gray-900">
                <div className="col-span-full h-80 md:h-full w-full md:col-span-6 bg-[url(/water-ripples-4.webp)] md:bg-contain bg-no-repeat bg-cover bg-fixed rounded-md">
                    <div className={`${showAll ? 'h-fit col-span-full md:col-span-6 overflow-hidden' : 'h-80 md:h-116 lg:h-160 xl:h-180 col-span-full md:col-span-6 overflow-hidden' } `}>
                       <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Overview</h2>
                       <p className="my-4 text-gray-600 text-sm md:text-base">This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training.</p>

                       <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Orientation and Focus</h2>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes.</p>

                       <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Guest Supervisors</h2>
                       <p className="my-4 text-gray-600 text-sm md:text-base">The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships.</p>

                       <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Who Is This Series For?</h2>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Psychotherapists and counsellors at all stages of practice</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Trainees seeking depth beyond technique</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Practitioners interested in relational, integrative, and psychodynamic thinking</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">Call for Participants</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.</p>
                       <p className="my-4 text-gray-600 text-sm md:text-base">The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community.</p>
                    </div>
                    <div className="col-start-7 col-end-12">
                       <button className="text-nowrap text-sm md:text-base cursor-pointer px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md mx-auto my-4">
                            Enroll Now
                       </button>
                    </div>
                </div>
            </div>

        </div>
    )
}