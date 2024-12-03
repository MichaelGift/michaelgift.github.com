import {
    bootstrap,
    cloud,
    csharp,
    docker,
    documentation,
    frontend,
    gamedev,
    java,
    javascript,
    kotlin,
    kubernetes,
    meridian,
    serine,
    animation,
    eventapp,
    nodejs,
    nyeusi,
    placeholderCompany,
    postgresql,
    python,
    reactjs,
    typescript,
    unity,
    unreal,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
];

const services = [
    {
        title: 'Full Stack Developer',
        icon: frontend,
    },
    {
        title: 'Game Developer',
        icon: gamedev,
    },
    {
        title: 'Cloud Engineer',
        icon: cloud,
    },
    {
        title: 'Technical Writer',
        icon: documentation,
    }
];

const technologies = [
    {
        name: 'Bootstrap',
        icon: bootstrap,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Java',
        icon: java,
    },
    {
        name: 'Python',
        icon: python,
    },
    {
        name: 'C#',
        icon: csharp,
    },
    {
        name: 'Kotlin',
        icon: kotlin,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Unity',
        icon: unity,
    },
    {
        name: 'Unreal Engine',
        icon: unreal,
    },
    {
        name: 'postgresql',
        icon: postgresql,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    }
];

const experiences = [
    {
        title: 'Lead Software Engineer',
        company_name: 'Meridian',
        icon: placeholderCompany,
        iconBg: '#333333',
        date: 'Aug 2023 - Sep 2024',
    },
    {
        title: 'Software Developer',
        company_name: 'Jowi Inc',
        icon: placeholderCompany,
        iconBg: '#333333',
        date: 'Jan 2022 - Jun 2023',
    },
    {
        title: 'Software Developer',
        company_name: 'Magnus Studios',
        icon: placeholderCompany,
        iconBg: '#333333',
        date: 'Nov 2018 - Oct 2021',
    },
];

const projects = [
    {
        id: 'project-1',
        name: 'Serine POS',
        description: 'A demo of a Point of Sale system for a restaurant.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'bootstrap',
                color: 'pink-text-gradient',
            },
        ],
        image: serine,
        repo: 'https://github.com/MichaelGift/Hotel-POS',
        demo: 'https://hotel-pos.vercel.app/',
    },
    {
        id: 'project-2',
        name: 'Meridian',
        description:
            'An app that makes social media educational and interactive.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: meridian,
        repo: '',
        demo: "https://play.google.com/store/apps/details?id=com.myth.meridian&pli=1",
    },
    {
        id: 'project-3',
        name: 'Event Finder App',
        description: 'This is a proof of concept for an event finder application. ' +
            'It allows users to search for events in their area.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image:eventapp,
        repo: 'https://github.com/MichaelGift/Event-Finder-App',
        demo: '',
    },
    {
        id: 'project-4',
        name: 'Unity Realtime animation',
        description: `Sample project to show unity's realtime animation capabilities.`,
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: animation,
        repo: '',
        demo: 'https://www.youtube.com/watch?v=kvpIoT5MRiI',
    },
];

export {services, technologies, experiences, projects};
