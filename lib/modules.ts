import {JSX} from 'react'

type Module = {
    name: string,
    // description: JSX.Element,
    description: string,
    image?: string,
    imageAlt?: string,
    price: string,
    discountPrice?: string,
    status?: string,
    slug?: string,
    createdAt?:  string,
    updatedAt?: string,
    id?: string,
    published?: boolean,
    speakers?: string[],
}

export const modules: Module[] = [
    // {
    //     name: "10 years of experience",
    //     description: <p className='my-4 text-gray-600 text-sm md:text-base'>This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.</p>
    //         <p className='my-4 text-gray-600 text-sm md:text-base'>Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training.</p>,
    // },
    {
        name: '10-Month Therapeutic Discussion Series on Relational and Integrative Psychotherapy in Pakistan',
        description: 
            `<p class="my-4 text-gray-600 text-sm md:text-base">This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.</p>
            <p class="my-4 text-gray-600 text-sm md:text-base">Rather than promoting a single “correct” model of psychotherapy, the series creates space for complexity, uncertainty, and ambivalence - central realities of therapeutic practice that are often marginalised in skills-based or technique-driven training.</p>`,
        image: '/images/projects/ssi.webp',
        imageAlt: 'Counselling With Iqras website',
        price: '20.00',
        discountPrice: '15.00',
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
]