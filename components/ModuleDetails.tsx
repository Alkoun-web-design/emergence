import { div } from "motion/react-client";

export default function ModuleDetails(){

    const showAll = true;

    return (
        <>
                    <div className="shadow-lg grid grid-cols-subgrid col-start-2 col-end-12 bg-gray-50 rounded-lg p-8 text-gray-900">

                        <div className="col-span-full h-80 md:h-full w-full md:col-span-5 bg-[url(/water-ripples-4.webp)] md:bg-contain bg-no-repeat bg-cover bg-fixed rounded-md">
                            {/* <img className="lg:p-4" src="" alt="Workshop Image" /> */}
                        </div>

                        <div className={`${showAll ? 'h-fit col-span-full md:col-span-5 overflow-hidden' : 'h-80 md:h-116 lg:h-160 xl:h-180 col-span-full md:col-span-6 overflow-hidden' } `}>
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
                                Read More
                            </button>
                       </div>
                    </div>

                    <div className="shadow-lg grid-cols-subgrid col-span-full lg:col-start-2 lg:col-end-8 bg-gray-50 rounded-lg p-8 text-gray-900">
                        <h2 className="text-2xl lg:text-3xl mb-4 border-b-2 border-transparent border-b-gray-300">Guest Supervisors</h2>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/soth.webp" alt="Michael Soth" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Michael Soth</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Michael Soth is an integral–relational body psychotherapist, trainer, and supervisor with four decades of experience practising and teaching from an integrative perspective.</p>
                              <p className="my-4 text-gray-600">Drawing on concepts, values, and ways of working from a broad-spectrum range of psychotherapeutic approaches across both psychoanalytic and humanistic traditions, he understands the therapeutic relationship as a bodymind process between two people who are simultaneously wounded and whole. His work places particular emphasis on relational process, enactment, unconscious communication, and the ways in which personal history, embodied experience, and socio-cultural context shape the therapeutic field. He has written numerous articles and several book chapters, and is a frequent presenter at international conferences and professional trainings.</p>
                              <p className="my-4 text-gray-600">Extracts from his published writing, along with summaries of presentations and training hand-outs, are available at www.integra-cpd.co.uk. He is co-editor of the Handbook of Body Psychotherapy and Somatic Psychology (2015).</p>
                              <p className="my-4 text-gray-600">Michael Soth has been working with Pakistani psychotherapists and supervisors as a trainer and supervisor since 2010. Throughout this time, he has been a committed and generous supporter of the development of psychotherapy in Pakistan, playing an instrumental role in nurturing reflective, relational and culturally attuned clinical practice. Through sustained long-term engagement with therapists practicing both within Pakistan and across the Pakistani diaspora, he has developed a nuanced understanding of how cultural, familial, religious and socio-political contexts enter the therapeutic relationship – not as external variables to be managed, but as lived realities that shape both therapist and client. Central to his work is a focus on character transformation. His approach attends closely to unconscious processes, enactments and parallel process, inviting therapists to work with what is being lived and re-enacted in the room. His influence has contributed to a meaningful shift in how psychotherapy is thought about and practiced in Pakistan and across the world.</p>
                              <p className="my-4 text-gray-600">Website: <a className="text-[#4A90A3] underline" href="http://soth.co.uk/">http://soth.co.uk/</a></p>
                           </div>
                        </div>     

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy" className="ring-1 ring-[#4A90A3] w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/3.webp" alt="Omer Tauseef" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Omar Tauseef</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Omar Tauseef is a psychotherapist and clinical supervisor with over a decade of experience working across private practice, community mental health, schools, telehealth, and outreach settings in Australia and Pakistan.</p>
                              <p className="my-4 text-gray-600">His work has involved long-term therapeutic relationships, crisis support, group work, and supervision, often with people navigating trauma, identity, substance use, grief, and significant life disruption. In recent years, his focus has increasingly centred on masculine pain and complexity, with attention to how systems, attachment histories, culture, and power shape inner lives, relationships, and therapeutic encounters. This includes a growing interest in South Asian perspectives on mental health and the ongoing psychological and relational impacts of colonisation, migration, and intergenerational trauma.</p>
                              <p className="my-4 text-gray-600">Alongside clinical work, Omar supervises developing therapists and brings a grounded, reflective approach that values clear thinking, ethical responsibility, and shared accountability in the work. His practice is informed by relational and systemic ways of thinking that resist individualising suffering and instead locate distress within broader social and cultural contexts.</p>
                              <p className="my-4 text-gray-600">In workshops, Omar focuses on what actually holds up in the room, how therapists think, respond, and stay present when the work becomes complex, charged, or uncertain. He’s known for skipping the pleasantries, poking the elephant in the room, and saying what probably shouldn’t be said (but needs to be), a style that invites disarming, deeply human moments.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"   className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/10.webp" alt="Hina Azfer" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Hina Azfar</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Hina Azfar is a psychotherapist and clinical supervisor working with individuals, couples and families. Her modality is relational and integrative drawing primarily on systemic, attachment based and trauma informed approaches while integrating existential and spiritual facets.</p>
                              <p className="my-4 text-gray-600">Her work is defined by a focus on cultural context, global context and intergenerational influences that impact unconscious processes that in turn curate and limit the psyche. Engaging with parallel process and enactments that manifest in the dynamics that play out in the here and now with the client, she believes that relational depth between the therapist and client is the cradle that sustains the space for an intricate balance between challenge and safety to allow any capacity to change, adapt and transform beyond debilitating limitations towards enlightenment, agency and growth.</p>
                              <p className="my-4 text-gray-600">Deeply invested in bringing credence to our burgeoning community, Hina has been engaged in training and supervising therapists towards robust, ethical practice and supporting the community in educational and professional development ventures. A keen proponent of creativity in the therapeutic domain, she lays great emphasis on that being bolstered by a sound theoretical base. She also wants to support therapists in understanding and navigating their own process in order to empower and enable themselves to realise their full potential as practitioners.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2  w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/9.webp" alt="Maryam Suheyl" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Maryam Suheyl</h3> 
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Maryam Suheyl holds a Master of Science in Marriage and Family Therapy from Northwestern University, USA. She has drawn on her clinical training to develop an original therapeutic framework that addresses culturally relevant issues within the Pakistani context.</p>
                              <p className="my-4 text-gray-600">Her journey as a systemic therapist began when she noticed that individuals do not enter the therapy room alone, they bring their families, histories, and larger social systems with them. This curiosity and commitment to working beyond the individual led her to pursue formal training in Marriage and Family Therapy in the United States.</p>
                              <p className="my-4 text-gray-600">Since then, Maryam has focused on understanding the unique dynamics of South Asian family systems and educating individuals, couples, and families about both the strengths and limitations embedded within these systems. She believes that increased awareness of systemic patterns can reduce unnecessary blame and misdirected anger, allowing couples and families to respond to one another with greater clarity, compassion, and accountability.</p>
                              <p className="my-4 text-gray-600">She also holds a Diploma in Supervision from CPCAB (UK). In addition to her clinical work, Maryam supervises and trains other therapists in the field of Marriage and Family Therapy. Her work as both a therapist and supervisor is relational, systemic, and integrative, grounded in collaboration, reflection, and ethical practice.</p>
                           </div>
                        </div>     

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full transition-all" src="/workshop/7.webp" alt="Ruseel Rose" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Russell Rose</h3>        
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Russell Rose qualified as a Body Psychotherapist in 1996, following a five-year training at the Chiron Centre for Body Psychotherapy. He is accredited with the UKCP and ACHPP.</p>
                              <p className="my-4 text-gray-600">It was at this time that parallel processing grabbed his interest. He applied it in his personal practice through his supervision with Michael Soth, also in group-work with residential staff teams working with clients with mental health issues and learning difficulties, and began writing articles on the subject. This elaborated over the decades into enactment theory and fractality.</p>
                              <p className="my-4 text-gray-600">It was clear to him that along with all other modalities, Body Psychotherapy brought both gifts and severe limitations, for which an integration of these other modalities became an on-going journey of theoretical exploration and consideration, and a life-long process of experience, as they often offered a context, an antidote, or an elaboration that Body Psychotherapy found more tricky to navigate.</p>
                              <p className="my-4 text-gray-600">He sees the psyche as fundamentally holistic, relational, systemic, and intergenerational; and understands that it is impossible to really understand or experience our selves without as many contexts as possible; and if fractality is to be believed then these contexts are by definition endless.</p>
                              <p className="my-4 text-gray-600">Russell believes that while knowledge and experience can be facilitated, deep and lasting change emerges spontaneously when a safe-enough and confrontational-enough environment is facilitated. We change incrementally, but also in profound transformations that are as hard-wired into our psyche as an infant’s emerging capacity to walk. It is our relationship with these periods of emergent transformation that often define and bind-up our psyches into stagnant habituality or untethered chaos.</p>
                              <p className="my-4 text-gray-600">For a decade, Russell has worked closely with Pakistani psychotherapists and clients as a psychotherapist and clinical supervisor. Over this time, he has been a steady and generous presence in the development of psychotherapy in Pakistan, offering long-term commitment, mentorship, and thoughtful clinical engagement. He brings a nuanced and deeply respectful understanding of cultural, relational, and contextual dynamics, and has been a valued supporter of the psychotherapy community, contributing quietly but significantly to how the field has taken shape and continues to grow.</p>
                              <p className="my-4 text-gray-600">Website: <a className="text-[#4A90A3] underline" href="https://www.russellrose.co.uk">https://www.russellrose.co.uk</a>/</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/8.webp" alt="Jasmyn Raza" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Jasmyn Rana</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Jasmyn Rana is the Founder of Therapy is Brown, and is a mental health counsellor and psychotherapist and clinical supervisor with 14 years experience in the field. Jasmyn has specialist interest in couples therapy but has also worked with groups and organizations over her career. Being the child of a multicultural home, she is attuned to delivering culturally sensitive therapy. Her modalities lend primarily from psychodynamic and relational work.</p>
                              <p className="my-4 text-gray-600">While having a keen interest in theoretical underpinnings, Jasmyn appreciates the deeper human/spiritual awareness of what is largely unsaid and unseen, that's allows elements of connection, awareness and transformation to emerge.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/4.webp" alt="Daheem Din" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Daheem Din</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Daheem Din is a certified Marriage and Family Therapist and co-founder of The Therapeutic Community in Pakistan. With extensive professional experience in both the United States and Pakistan, she brings a systemic, integrative, and culturally attuned lens to her clinical and training work.</p>
                              <p className="my-4 text-gray-600">Her primary modality is Relational and Integrative Psychotherapy, grounded in a strong systemic and cultural framework. Whether working with individuals, couples, or families, she understands psychological distress as inseparable from the relational, social, and cultural systems in which clients are embedded. Her clinical practice integrates psychodynamic and attachment-based approaches, systemic and family therapy, trauma-informed practice, humanistic and experiential therapies, somatic awareness, and cognitive or behavioral tools when clinically appropriate. Central to her work is close attention to the here-and-now relational field that emerges between client and therapist.</p>
                              <p className="my-4 text-gray-600">In addition to her clinical work, Daheem is actively involved in supervising therapists, facilitating support and process groups, and delivering organizational and institutional trainings. She has played a key role in introducing Level 3 CPCAB courses to Pakistan, contributing significantly to the professional development and ethical grounding of emerging mental health practitioners. Her work with men’s groups and process-oriented interventions reflects a nuanced, empathic, and depth-oriented style, offering trainees and supervisees a clear understanding of her clinical perspective and methodology.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"   className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/5.webp" alt="Sabrina Nangiana" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Sabrina Nangiana</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Sabrina Nangiana is an integrative psychotherapist and clinical supervisor with over ten years of experience working across clinical, educational, and corporate settings. Her work is rooted in a relational and integrative approach, with a strong commitment to understanding individuals within their socio-cultural worlds.</p>
                              <p className="my-4 text-gray-600">Alongside her clinical practice, Sabrina has been deeply involved in teaching, training tutors, and facilitating process-oriented learning spaces that value reflection, dialogue, and collective growth. Her experience as a school counsellor has shaped her sensitivity to development, attachment, and the early relational contexts that continue to influence adult emotional life.</p>
                              <p className="my-4 text-gray-600">Sabrina is a co-founder of The Therapeutic Community and has played a key role in introducing CPCAB Level 3 training in the country, contributing meaningfully to the ethical and professional grounding of emerging practitioners.</p>
                              <p className="my-4 text-gray-600">In supervision and training spaces, Sabrina is known for bringing her full, human presence into the room. She pays close attention to the emotional atmosphere, bodily responses, and unspoken dynamics that emerge between people. Rather than working only at the level of technique, she uses feelings, resonance, and moments of discomfort as clinical material - supporting practitioners to notice what is missing, what feels difficult to name, and how the body can guide understanding when the room feels charged.</p>
                              <p className="my-4 text-gray-600">Within this supervision discussion series, Sabrina brings a relational sensibility that honours vulnerability, curiosity, and shared learning, inviting therapists to slow down, stay present, and think together about the lived experience of therapeutic work.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/2.webp" alt="Humaira Hassnain" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Humaira Hassnain</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base">
                              <p className="my-4 text-gray-600">Humaira Hassnain is an integrative psychotherapist and clinical supervisor with over two decades of experience working with individuals, couples, families, and groups across a range of clinical settings. She began her professional journey as a clinical psychologist, training and working in hospital and community contexts, which continues to shape her careful attention to assessment, ethical practice, and thoughtful clinical formulation.</p>
                              <p className="my-4 text-gray-600">Her work is informed by an integrative, trauma-informed approach, drawing from relational and systemic therapy, attachment-based work, parts-based approaches, mindfulness, and compassion-focused practice. She is particularly interested in emotional processes, relational patterns, and the cultural and intergenerational stories people carry with them into therapy. Her way of working values depth, curiosity, and emotional safety, allowing therapy to unfold at a pace that feels respectful and containing rather than rushed.</p>
                              <p className="my-4 text-gray-600">As a supervisor, Humaira works from an integrative and relational framework informed by parts-based thinking and the 7-Eyed Model of Supervision. She offers a collaborative supervisory space where therapists can reflect on clinical work, ethical questions, and their own responses to the work with honesty and care.</p>
                              <p className="my-4 text-gray-600">At the heart of her work is a commitment to slowing down, listening closely, and supporting therapists to develop clarity, confidence, and a grounded therapeutic voice—while remaining ethical, reflective, and human in the work.</p>
                           </div>
                        </div>

                        <div x-data="{ profileIsVisible: false }" className="py-2 transition-all duration-500 ease-in-out">
                           <div className="border-b-2 border-transparent border-b-gray-300 flex flex-row">
                              <div className="justify-start">
                                 <img loading="lazy"  className="ring-2 w-20 h-20 md:w-28 md:h-28 rounded-full" src="/workshop/1.webp" alt="Zahbia Saffraz" />
                                 <h3 className="my-1 text-[#4A90A3] text-lg lg:text-2xl">Zahbia Sarfraz</h3>
                              </div>
                              <div className="my-auto ml-auto">
                                 <button   className="text-nowrap text-sm md:text-base px-4 py-2 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md"></button> 
                              </div>
                           </div>
                           <div  className="text-sm md:text-base" >
                              <p className="my-4 text-gray-600">Zahbia Sarfraz is a psychotherapist and clinical supervisor with over a decade of experience working with adults across a wide range of emotional, relational and existential concerns. Her work is grounded in psychodynamic and relational orientation, with a deepening engagement with Jungian psychology, particularly the role of unconscious processes, symbolism and dreams in therapeutic work.</p>
                              <p className="my-4 text-gray-600">Zahbia understands the psyche as relational and shaped across multiple layers of personal history, relationships, culture, and unconscious life. She holds that psychological distress and change cannot be understood in isolation from these contexts, and that therapeutic work requires openness to complexity rather than reliance on singular explanations or techniques.</p>
                              <p className="my-4 text-gray-600">She believes that while structure, theory, and guidance are important, deep change tends to emerge through the quality of the relational space itself. When a space is both containing and able to hold challenge, moments of genuine transformation can unfold - often gradually, sometimes unexpectedly - reshaping habitual patterns and opening new ways of relating to self and others.</p>
                              <p className="my-4 text-gray-600">Website: <a className="text-[#4A90A3] underline" href="https://zahbiasarfraz.com/">https://zahbiasarfraz.com/</a></p>
                           </div>
                        </div>
                    </div>

                    <div className="shadow-lg col-span-full lg:sticky lg:top-16 lg:col-start-8 lg:col-end-12 bg-gray-50 h-fit rounded-lg p-8 text-gray-900">
                       <h2 className="text-2xl lg:text-3xl border-b-2 border-transparent border-b-gray-300">Format</h2>
                       <ul className="list-disc text-sm md:text-base py-8">
                          <li className="my-2 text-gray-600">10 monthly sessions</li>
                          <li className="my-2 text-gray-600">a supervision demonstration provides focus, to keep the exploration experience- and practice-near</li>
                          <li className="my-2 text-gray-600">participatory supervision-based discussions</li>
                          <li className="my-2 text-gray-600">open-ended, relationally responsive format</li>
                          <li className="my-2 text-gray-600">emphasis on live material and reflective dialogue</li>
                          <li className="my-2 text-gray-600">Sessions are intentionally loosely structured, allowing supervisors and participants to work with what emerges in the relational field. Supervisors model how complexity can be held, reflected upon, and used constructively in therapeutic work.</li>
                       </ul>
                       <div className="flex justify-center my-4">
                          <a href="https://forms.gle/7wpiJXNioFoaYKtz9" className="text-nowrap text-sm md:text-base cursor-pointer px-6 py-4 transition-all border border-[#4A90A3] hover:bg-gray-50 hover:text-[#4A90A3] bg-[#4A90A3] text-gray-50 rounded-md">Register</a>
                       </div>
                    </div>
        </>
    )
}