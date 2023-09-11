import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    const { scrollY } = useScroll();
    const scrollYProgress = useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const data = [
        {
            id: 1,
            title: 'Food Online Delivery System',
            description: 'Developed a fully customizable food delivery system with real-time order tracking. The system is user-friendly and responsive to meet customer requirements.',
            stacks: ['React', 'Vite', 'Laravel', 'MySQL', 'Tailwind CSS'],
        },
        {
            id: 2,
            title: 'Electronic Store E-Commerce',
            description: 'Created an E-Commerce website for AT Electronics with real-time order tracking and a highly customizable content management system. Designed for user-friendliness and responsiveness.',
            stacks: ['React', 'Vite', 'Laravel', 'MySQL', 'Tailwind CSS'],
        },
        {
            id: 3,
            title: 'Furniture Shop Website',
            description: 'Developed a user-friendly and responsive website for Kartell, a furniture shop. The content is fully manageable and customizable to meet user requirements.',
            stacks: ['JavaScript', 'PHP', 'MySQL'],
        },
        {
            id: 4,
            title: 'Discord Clone Application',
            description: 'Built a Discord clone, an online communication platform, featuring text, voice, and video chat functionalities. Used modern technologies for seamless connectivity and collaboration.',
            stacks: ['React', 'Next.js', 'Prisma', 'MySQL', 'Socket.io'],
        },
    ];


    return (
        <div className=''>
            <div className='h-44 bg-white backdrop-blur-lg bg-opacity-40'></div>
            <div className='grid grid-cols-1 items-center justify-center bg-white backdrop-blur-lg bg-opacity-40'>
                <div className='grid grid-cols-1 items-center justify-center p-4'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-200 from-sky-700 font-bold text-6xl  text-center pb-2'>Projects</h1>
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-4 gap-6'>
                    {data.map((project) => (
                        <div key={project.id} className='grid grid-cols-1 bg-white'>
                            <div className='w-full h-96 bg-gray-400'></div>
                            <div className=' grid items-top w-full border-red-500 border-4 h-10 justify-center'><button><div className='w-24 h-1.5 bg-gray-300'></div></button></div>
                            <h1 className='font-bold tracking-tighter text-4xl pt-4 pb-2.5'>{project.title}</h1>
                            <div className='flex items-center justify-center'><button><div className=' w-72 h-0.5 bg-gray-300'></div></button></div>
                            <p className='text-lg p-2'>
                                {project.description}
                            </p>
                            <div className='grid items-center justify-evenly px-4 pb-2 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-center tracking-tighter '>
                                {project.stacks.map((stack, index) => (
                                    <p key={index} className='text-xl uppercase tracked-tighter whitespace-nowrap'>{stack}</p>
                                ))}
                            </div>
                            <div className='flex items-start justify-between pb-2 px-4'>
                                <div className='flex justify-center items-center '>
                                    <Link to="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-8 h-8 active:opacity-60'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                    </Link>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Link to="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 active:opacity-60">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <motion.div
                className="h-0.5 bg-emerald-400 fixed top-24 left-0 right-0 z-20"
                style={{ scaleX: scaleX }}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </div>
    )
}
