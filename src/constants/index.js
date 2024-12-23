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
    placeholderCompany,
    postgresql,
    python,
    reactjs,
    typescript,
    unity,
    unreal,
    ieee,
    lisa, komikult, war, robbery, feastify
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
        name: 'IEEE Kenya',
        description: `Created a website for IEEE Kenya section.`,
        tags: [],
        image: ieee,
        repo: '',
        demo: 'https://ieeekenya.or.ke',
    },
    {
        id: 'project-2',
        name: 'Psych Lisa',
        description: `Bringing mental health within reach for all`,
        tags: [],
        image: lisa,
        repo: '',
        demo: 'https://lisa.webdivine.co.ke/',
    },
    {
        id: 'project-3',
        name: 'Serine POS',
        description: 'A demo of a Point of Sale system for a restaurant.',
        tags: [],
        image: serine,
        repo: 'https://github.com/MichaelGift/Hotel-POS',
        demo: 'https://hotel-pos.vercel.app/',
    },
    {
        id: 'project-4',
        name: 'The Feastify',
        description: `Proof of concept for chefs and event booking platform.`,
        tags: [],
        image: feastify,
        repo: '',
        demo: 'https://github-production-user-asset-6210df.s3.amazonaws.com/120593172/395339224-9e1f0abe-5db1-4c2a-a4a9-63b819fab6ff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241223%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241223T092716Z&X-Amz-Expires=300&X-Amz-Signature=b32e1d46c451e69945fd7adc07a30d9766ebd35d965fdc164b6755f062191435&X-Amz-SignedHeaders=host',
    },
    {
        id: 'project-5',
        name: 'Meridian',
        description: 'An app that makes social media educational and interactive.',
        tags: [],
        image: meridian,
        repo: '',
        demo: "https://play.google.com/store/apps/details?id=com.myth.meridian&pli=1",
    },
    {
        id: 'project-6',
        name: 'Events App',
        description: 'This is a proof of concept for an event finder application. ' +
            'It allows users to search for events in their area.',
        tags: [],
        image:eventapp,
        repo: 'https://github.com/MichaelGift/Event-Finder-App',
        demo: '',
    },
    {
        id: 'project-7',
        name: 'Chase Animation',
        description: `Sample project to show unity's realtime animation capabilities.`,
        tags: [],
        image: animation,
        repo: '',
        demo: 'https://www.youtube.com/watch?v=kvpIoT5MRiI',
    },
    {
        id: 'project-8',
        name: 'Heist Animation',
        description: `A unity realtime animated cinematic`,
        tags: [],
        image: robbery,
        repo: '',
        demo: 'https://youtu.be/HNBHSxUaMqo',
    },
];

export {services, technologies, experiences, projects};
