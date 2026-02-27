import {JSX} from 'react'

export type Speaker = {
    name: string,
    image: string,
    description: string,
}

export type Module = {
    name: string,
    description: string,
    image: string,
    price: string,
    discountPrice: string | null,
    status: string,
    slug: string,
    createdAt:  string,
    updatedAt: string,
    id?: string,
    published: boolean,
    speakers: Speaker[],
    modulesSold?: number,
}

export const speakers: Speaker[] = [
    {
        name: 'Hajra Raza',
        image: "/speakers/hajra-raza.webp",
        description: 'string',
    },

]

export const modules: Module[] = [
    {
        name: '10-Month Therapeutic Discussion Series on Relational and Integrative Psychotherapy in Pakistan',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",
        image: '/images/workshops/1.jpg',
        price: '20.00',
        discountPrice: null,
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
    {
        name: 'Dancing with the devil: Accepting our inner-demons',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",        
        image: '/images/workshops/2.jpg',
        price: '20.00',
        discountPrice: null,
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
    {
        name: 'Peace and Conflict within the soul',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",        
        image: '/images/workshops/3.jpg',
        price: '20.00',
        discountPrice: null,
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
    {
        name: 'The body follows the mind: How to re-program for a better you',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",        
        image: '/images/workshops/4.jpg',
        price: '20.00',
        discountPrice: null,
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
    {
        name: 'I wish I would have never met you: How trauma shapes regret',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",        
        image: '/images/workshops/5.jpg',
        price: '20.00',
        discountPrice: null,
        status: 'Complete',
        slug: '10-month-therapeutic-discussion-series-on-relational-and-integrative-psychotherapy-in-akistan',
        createdAt: '2023-02-01T00:00:00.000Z',
        updatedAt: '2023-02-01T00:00:00.000Z',
        published: true,
        speakers: []
    },
    {
        name: 'Why love and hate are the two sides of the smae coin',
        description: "This 10-month Therapeutic  Discussion Series offers a reflective space for psychotherapists, counsellors, and trainees in Pakistan to engage with their work through a relational and integrative lens. The series responds to the relative isolation many practitioners experience and the limited opportunities for sustained, thoughtful dialogue across levels of experience and diverse therapeutic orientations.",        
        image: '/images/workshops/6.png',
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