// import {JSX} from 'react'

export type Speaker = {
    id: number,
    name: string,
    image: string,
    description: string[],
}

export type ModuleDescription = {
    overview: string[],
    orientation: string[],
    guests: string[],
    audience: string[],
}

export type Module = {
    id: number,
    name: string,
    shortDescription: string,
    description: ModuleDescription,
    image: string,
    price: string,
    discountPrice: string | null,
    registration: 'Open' | 'Closed',
    duration: string,
    dateOfCommencement: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    published: boolean,
    speakers: string[],
    modulesSold?: number,
    category?: string
}

export const speakers: Speaker[] = [
    {
        id: 0,
        name: 'Hajra Raza',
        image: "/speakers/hajra-raza.webp",
        description:[
            "Michael Soth is an integral–relational body psychotherapist, trainer, and supervisor with four decades of experience practising and teaching from an integrative perspective",
            "Drawing on concepts, values, and ways of working from a broad-spectrum range of psychotherapeutic approaches across both psychoanalytic and humanistic traditions, he understands the therapeutic relationship as a bodymind process between two people who are simultaneously wounded and whole. His work places particular emphasis on relational process, enactment, unconscious communication, and the ways in which personal history, embodied experience, and socio-cultural context shape the therapeutic field. He has written numerous articles and several book chapters, and is a frequent presenter at international conferences and professional trainings.",
            "Extracts from his published writing, along with summaries of presentations and training hand-outs, are available at www.integra-cpd.co.uk. He is co-editor of the Handbook of Body Psychotherapy and Somatic Psychology (2015).",
            "Michael Soth has been working with Pakistani psychotherapists and supervisors as a trainer and supervisor since 2010. Throughout this time, he has been a committed and generous supporter of the development of psychotherapy in Pakistan, playing an instrumental role in nurturing reflective, relational and culturally attuned clinical practice. Through sustained long-term engagement with therapists practicing both within Pakistan and across the Pakistani diaspora, he has developed a nuanced understanding of how cultural, familial, religious and socio-political contexts enter the therapeutic relationship – not as external variables to be managed, but as lived realities that shape both therapist and client. Central to his work is a focus on character transformation. His approach attends closely to unconscious processes, enactments and parallel process, inviting therapists to work with what is being lived and re-enacted in the room. His influence has contributed to a meaningful shift in how psychotherapy is thought about and practiced in Pakistan and across the world.",
            `Website: <a className="text-primary underline" href="http://soth.co.uk/">http://soth.co.uk/</a>`
        ],
    },
    {
        id: 1,
        name: 'Michael Soth',
        image: "/workshop/soth.webp",
        description: [
            "Michael Soth is an integral–relational body psychotherapist, trainer, and supervisor with four decades of experience practising and teaching from an integrative perspective.",
            "Drawing on concepts, values, and ways of working from a broad-spectrum range of psychotherapeutic approaches across both psychoanalytic and humanistic traditions, he understands the therapeutic relationship as a bodymind process between two people who are simultaneously wounded and whole. His work places particular emphasis on relational process, enactment, unconscious communication, and the ways in which personal history, embodied experience, and socio-cultural context shape the therapeutic field. He has written numerous articles and several book chapters, and is a frequent presenter at international conferences and professional trainings.",
            "Extracts from his published writing, along with summaries of presentations and training hand-outs, are available at www.integra-cpd.co.uk. He is co-editor of the Handbook of Body Psychotherapy and Somatic Psychology (2015).",
            "Michael Soth has been working with Pakistani psychotherapists and supervisors as a trainer and supervisor since 2010. Throughout this time, he has been a committed and generous supporter of the development of psychotherapy in Pakistan, playing an instrumental role in nurturing reflective, relational and culturally attuned clinical practice. Through sustained long-term engagement with therapists practicing both within Pakistan and across the Pakistani diaspora, he has developed a nuanced understanding of how cultural, familial, religious and socio-political contexts enter the therapeutic relationship – not as external variables to be managed, but as lived realities that shape both therapist and client. Central to his work is a focus on character transformation. His approach attends closely to unconscious processes, enactments and parallel process, inviting therapists to work with what is being lived and re-enacted in the room. His influence has contributed to a meaningful shift in how psychotherapy is thought about and practiced in Pakistan and across the world.",
            `Website: <a className="text-primary underline" href="http://soth.co.uk/">http://soth.co.uk/</a>`
        ]
    },
    {
        id: 3,
        name: 'Omar Tauseef',
        image: "/workshop/3.webp",
        description: [
            "Omar Tauseef is a psychotherapist and clinical supervisor with over a decade of experience working across private practice, community mental health, schools, telehealth, and outreach settings in Australia and Pakistan.",
            "His work has involved long-term therapeutic relationships, crisis support, group work, and supervision, often with people navigating trauma, identity, substance use, grief, and significant life disruption. In recent years, his focus has increasingly centred on masculine pain and complexity, with attention to how systems, attachment histories, culture, and power shape inner lives, relationships, and therapeutic encounters. This includes a growing interest in South Asian perspectives on mental health and the ongoing psychological and relational impacts of colonisation, migration, and intergenerational trauma.",
            "Alongside clinical work, Omar supervises developing therapists and brings a grounded, reflective approach that values clear thinking, ethical responsibility, and shared accountability in the work. His practice is informed by relational and systemic ways of thinking that resist individualising suffering and instead locate distress within broader social and cultural contexts.",
            "In workshops, Omar focuses on what actually holds up in the room, how therapists think, respond, and stay present when the work becomes complex, charged, or uncertain. He’s known for skipping the pleasantries, poking the elephant in the room, and saying what probably shouldn’t be said (but needs to be), a style that invites disarming, deeply human moments."
        ]
    },
    {
        id: 4,
        name: 'Hina Azfer',
        image: "/workshop/10.webp",
        description: [
            "Hina Azfar is a psychotherapist and clinical supervisor working with individuals, couples and families. Her modality is relational and integrative drawing primarily on systemic, attachment based and trauma informed approaches while integrating existential and spiritual facets.",
            "Her work is defined by a focus on cultural context, global context and intergenerational influences that impact unconscious processes that in turn curate and limit the psyche. Engaging with parallel process and enactments that manifest in the dynamics that play out in the here and now with the client, she believes that relational depth between the therapist and client is the cradle that sustains the space for an intricate balance between challenge and safety to allow any capacity to change, adapt and transform beyond debilitating limitations towards enlightenment, agency and growth.",
            "Deeply invested in bringing credence to our burgeoning community, Hina has been engaged in training and supervising therapists towards robust, ethical practice and supporting the community in educational and professional development ventures. A keen proponent of creativity in the therapeutic domain, she lays great emphasis on that being bolstered by a sound theoretical base. She also wants to support therapists in understanding and navigating their own process in order to empower and enable themselves to realise their full potential as practitioners."
        ]
    },
    {
        id: 5,
        name: 'Maryam Suheyl',
        image: "/workshop/9.webp",
        description: [
            "Maryam Suheyl holds a Master of Science in Marriage and Family Therapy from Northwestern University, USA. She has drawn on her clinical training to develop an original therapeutic framework that addresses culturally relevant issues within the Pakistani context.",
            "Her journey as a systemic therapist began when she noticed that individuals do not enter the therapy room alone, they bring their families, histories, and larger social systems with them. This curiosity and commitment to working beyond the individual led her to pursue formal training in Marriage and Family Therapy in the United States.",
            "Since then, Maryam has focused on understanding the unique dynamics of South Asian family systems and educating individuals, couples, and families about both the strengths and limitations embedded within these systems. She believes that increased awareness of systemic patterns can reduce unnecessary blame and misdirected anger, allowing couples and families to respond to one another with greater clarity, compassion, and accountability.",
            "She also holds a Diploma in Supervision from CPCAB (UK). In addition to her clinical work, Maryam supervises and trains other therapists in the field of Marriage and Family Therapy. Her work as both a therapist and supervisor is relational, systemic, and integrative, grounded in collaboration, reflection, and ethical practice.",
        ]
    },
    {
        id: 6,
        name: 'Russel Rose',
        image: "/workshop/7.webp",
        description: [
            "Russell Rose qualified as a Body Psychotherapist in 1996, following a five-year training at the Chiron Centre for Body Psychotherapy. He is accredited with the UKCP and ACHPP.",
            "It was at this time that parallel processing grabbed his interest. He applied it in his personal practice through his supervision with Michael Soth, also in group-work with residential staff teams working with clients with mental health issues and learning difficulties, and began writing articles on the subject. This elaborated over the decades into enactment theory and fractality.",
            "It was clear to him that along with all other modalities, Body Psychotherapy brought both gifts and severe limitations, for which an integration of these other modalities became an on-going journey of theoretical exploration and consideration, and a life-long process of experience, as they often offered a context, an antidote, or an elaboration that Body Psychotherapy found more tricky to navigate.",
            "He sees the psyche as fundamentally holistic, relational, systemic, and intergenerational; and understands that it is impossible to really understand or experience our selves without as many contexts as possible; and if fractality is to be believed then these contexts are by definition endless.",
            "Russell believes that while knowledge and experience can be facilitated, deep and lasting change emerges spontaneously when a safe-enough and confrontational-enough environment is facilitated. We change incrementally, but also in profound transformations that are as hard-wired into our psyche as an infant’s emerging capacity to walk. It is our relationship with these periods of emergent transformation that often define and bind-up our psyches into stagnant habituality or untethered chaos.",
            "For a decade, Russell has worked closely with Pakistani psychotherapists and clients as a psychotherapist and clinical supervisor. Over this time, he has been a steady and generous presence in the development of psychotherapy in Pakistan, offering long-term commitment, mentorship, and thoughtful clinical engagement. He brings a nuanced and deeply respectful understanding of cultural, relational, and contextual dynamics, and has been a valued supporter of the psychotherapy community, contributing quietly but significantly to how the field has taken shape and continues to grow.",
            `Website: <a className="text-primary underline" href="https://www.russellrose.co.uk">https://www.russellrose.co.uk</a>`
        ]
    },
    {
        id: 7,
        name: 'Jasmyn Rana',
        image: "/workshop/8.webp",
        description: [
            "Jasmyn Rana is the Founder of Therapy is Brown, and is a mental health counsellor and psychotherapist and clinical supervisor with 14 years experience in the field. Jasmyn has specialist interest in couples therapy but has also worked with groups and organizations over her career. Being the child of a multicultural home, she is attuned to delivering culturally sensitive therapy. Her modalities lend primarily from psychodynamic and relational work.",
            "While having a keen interest in theoretical underpinnings, Jasmyn appreciates the deeper human/spiritual awareness of what is largely unsaid and unseen, that&aposs allows elements of connection, awareness and transformation to emerge."
        ]
    },
    {
        id: 8,
        name: 'Daheem Din',
        image: "/workshop/4.webp",
        description: [
            "Daheem Din is a certified Marriage and Family Therapist and co-founder of The Therapeutic Community in Pakistan. With extensive professional experience in both the United States and Pakistan, she brings a systemic, integrative, and culturally attuned lens to her clinical and training work.",
            "Her primary modality is Relational and Integrative Psychotherapy, grounded in a strong systemic and cultural framework. Whether working with individuals, couples, or families, she understands psychological distress as inseparable from the relational, social, and cultural systems in which clients are embedded. Her clinical practice integrates psychodynamic and attachment-based approaches, systemic and family therapy, trauma-informed practice, humanistic and experiential therapies, somatic awareness, and cognitive or behavioral tools when clinically appropriate. Central to her work is close attention to the here-and-now relational field that emerges between client and therapist.",
            "In addition to her clinical work, Daheem is actively involved in supervising therapists, facilitating support and process groups, and delivering organizational and institutional trainings. She has played a key role in introducing Level 3 CPCAB courses to Pakistan, contributing significantly to the professional development and ethical grounding of emerging mental health practitioners. Her work with men’s groups and process-oriented interventions reflects a nuanced, empathic, and depth-oriented style, offering trainees and supervisees a clear understanding of her clinical perspective and methodology."
        ]
    },
    {
        id: 9,
        name: 'Sabrina Nangiana',
        image: "/workshop/5.webp",
        description: [
            "Sabrina Nangiana is an integrative psychotherapist and clinical supervisor with over ten years of experience working across clinical, educational, and corporate settings. Her work is rooted in a relational and integrative approach, with a strong commitment to understanding individuals within their socio-cultural worlds.",
            "Alongside her clinical practice, Sabrina has been deeply involved in teaching, training tutors, and facilitating process-oriented learning spaces that value reflection, dialogue, and collective growth. Her experience as a school counsellor has shaped her sensitivity to development, attachment, and the early relational contexts that continue to influence adult emotional life.",
            "Sabrina is a co-founder of The Therapeutic Community and has played a key role in introducing CPCAB Level 3 training in the country, contributing meaningfully to the ethical and professional grounding of emerging practitioners.",
            "In supervision and training spaces, Sabrina is known for bringing her full, human presence into the room. She pays close attention to the emotional atmosphere, bodily responses, and unspoken dynamics that emerge between people. Rather than working only at the level of technique, she uses feelings, resonance, and moments of discomfort as clinical material - supporting practitioners to notice what is missing, what feels difficult to name, and how the body can guide understanding when the room feels charged.",
            "Within this supervision discussion series, Sabrina brings a relational sensibility that honours vulnerability, curiosity, and shared learning, inviting therapists to slow down, stay present, and think together about the lived experience of therapeutic work."
        ]
    },
    {
        id: 10,
        name: 'Humaira Hassnain',
        image: "/workshop/2.webp",
        description: [
            "Humaira Hassnain is an integrative psychotherapist and clinical supervisor with over two decades of experience working with individuals, couples, families, and groups across a range of clinical settings. She began her professional journey as a clinical psychologist, training and working in hospital and community contexts, which continues to shape her careful attention to assessment, ethical practice, and thoughtful clinical formulation.",
            "Her work is informed by an integrative, trauma-informed approach, drawing from relational and systemic therapy, attachment-based work, parts-based approaches, mindfulness, and compassion-focused practice. She is particularly interested in emotional processes, relational patterns, and the cultural and intergenerational stories people carry with them into therapy. Her way of working values depth, curiosity, and emotional safety, allowing therapy to unfold at a pace that feels respectful and containing rather than rushed.",
            "As a supervisor, Humaira works from an integrative and relational framework informed by parts-based thinking and the 7-Eyed Model of Supervision. She offers a collaborative supervisory space where therapists can reflect on clinical work, ethical questions, and their own responses to the work with honesty and care.",
            "At the heart of her work is a commitment to slowing down, listening closely, and supporting therapists to develop clarity, confidence, and a grounded therapeutic voice—while remaining ethical, reflective, and human in the work."
        ]
    },
    {
        id: 12,
        name: 'Zahbia Sarfraz',
        image: "/workshop/1.webp",
        description: [
            "Zahbia Sarfraz is a psychotherapist and clinical supervisor with over a decade of experience working with adults across a wide range of emotional, relational and existential concerns. Her work is grounded in psychodynamic and relational orientation, with a deepening engagement with Jungian psychology, particularly the role of unconscious processes, symbolism and dreams in therapeutic work.",
            "Zahbia understands the psyche as relational and shaped across multiple layers of personal history, relationships, culture, and unconscious life. She holds that psychological distress and change cannot be understood in isolation from these contexts, and that therapeutic work requires openness to complexity rather than reliance on singular explanations or techniques.",
            "She believes that while structure, theory, and guidance are important, deep change tends to emerge through the quality of the relational space itself. When a space is both containing and able to hold challenge, moments of genuine transformation can unfold - often gradually, sometimes unexpectedly - reshaping habitual patterns and opening new ways of relating to self and others.",
            `Website: <a className="text-primary underline" href="https://zahbiasarfraz.com/">https://zahbiasarfraz.com/</a>`
        ]
    },

]

export const modules: Module[] = [
    {
        id: 0,
        name: '10-Month Therapeutic Discussion Series on Relational and Integrative Psychotherapy in Pakistan',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/water-ripples-4.webp',
        // image: '/images/workshops/1.webp',
        price: '20.00',
        discountPrice: null,
        registration: 'Open',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-pakistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Michael Soth', 'Omar Tauseef', 'Hina Azfer', 'Maryam Suheyl', 'Russel Rose', 'Jasmyn Rana', 'Daheem Din', 'Sabrina Nangiana', 'Humaira Hassnain','Zahbia Sarfraz']
    },
    {
        id: 1,
        name: 'Dancing with the devil: Accepting our inner-demons',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/workshop/1.webp',
        price: '20.00',
        discountPrice: null,
        registration: 'Closed',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: 'dancing-with-the-devil-accepting-our-inner-demons',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Omar Tauseef', 'Maryam Suheyl', 'Daheem Din', 'Sabrina Nangiana', 'Humaira Hassnain']
    },
    {
        id: 2,
        name: 'Peace and Conflict within the soul',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/workshop3.webp',
        price: '20.00',
        discountPrice: null,
        registration: 'Closed',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: 'peace-and-conflict-within-the-soul',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Omar Tauseef', 'Maryam Suheyl', 'Jasmyn Rana', 'Sabrina Nangiana','Zahbia Sarfraz']
    },
    {
        id: 3,
        name: 'The body follows the mind: How to re-program for a better you',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/workshop4.webp',
        price: '20.00',
        discountPrice: null,
        registration: 'Closed',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: 'the-body-follows-the-mind-How-to-re-program-for-a-better-you',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Hina Azfer', 'Jasmyn Rana', 'Humaira Hassnain','Zahbia Sarfraz']
    },
    {
        id: 4,
        name: 'I wish I would have never met you: How trauma shapes regret',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/workshop5.webp',
        price: '20.00',
        discountPrice: null,
        registration: 'Closed',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: 'i-wish-i-would-have-never-met-you-how-trauma-shapes-regret',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Michael Soth', 'Maryam Suheyl', 'Daheem Din', 'Zahbia Sarfraz']
    },
    {
        id: 5,
        name: 'Why love and hate are the two sides of the same coin',
        shortDescription:'This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.',
        description: {
            overview: [
                "This 10-month Therapeutic Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
                "Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training."
            ],
            orientation: [
                "Grounded in contemporary relational and integrative psychotherapy, the series understands therapy as a co-created process shaped by conscious and unconscious, emotional, embodied, and cultural dynamics. Productive, helpful and precise understanding of the therapeutic process is seen to emerge through deep engagement in relationship rather than through theories or prescription.",
                "A central focus is an extended notion of parallel process—the unconscious repetition of relational patterns across therapy and supervision - which incorporates and depends upon attention to transference, countertransference, and enactments. Although painfully problematic for client and therapist, these largely unconscious processes are understood as vital sources of relational information about the roots of the woundings which bring the client to therapy in the first place. We will use the group context as an additional matrix to both manifest, reflect upon and contain parallel processes."
            ],
            guests: [
                "The series brings together experienced relational, psychodynamic, and integrative psychotherapists who have worked as trainers and as supervisors with Pakistani clients and practitioners. While united by a relational ethos, each supervisor brings a distinct therapeutic sensibility shaped by their training, cultural context, and professional experience.",
                "This diversity reflects the realities of therapeutic practice, where no single framework can fully capture the complexity of human relationships."
            ],
            audience: [
                "Psychotherapists and counsellors at all stages of practice",
                "Trainees seeking depth beyond technique",
                "Practitioners interested in relational, integrative, and psychodynamic thinking",
                "Call for Participant",
                "This series invites practitioners who are willing to engage thoughtfully with their therapeutic work, including moments of uncertainty, stuckness, and emotional complexity. Participants are encouraged to bring curiosity, openness, and a commitment to reflective dialogue.",
                "The series offers an opportunity to develop a grounded, relational therapeutic identity within a supportive and intellectually rigorous community."
            ],
        },
        image: '/workshop6.webp',
        price: '20.00',
        discountPrice: '15.00',
        registration: 'Closed',
        duration: 'string',
        dateOfCommencement: 'string',
        slug: 'why-love-and-hate-are-the-two-sides-of-the-same-coin',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: ['Hina Azfer', 'Maryam Suheyl', 'Russel Rose', 'Jasmyn Rana','Zahbia Sarfraz']
    },
]