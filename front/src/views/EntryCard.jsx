import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function EntryCard() {
    const [isHomeInView, setIsHomeInView] = useState(true);
    const [isFullContainerOpen, setIsFullContainerOpen] = useState(true);
    const { scrollY } = useScroll();
    const scrollYProgress = useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const nextContainerRef = useRef(null);
    const thresholdToShowButton = 0.5;

    
    const closeFullContainer = () => {
        setIsFullContainerOpen(false);
    };

    const openFullContainer = () => {
        setIsFullContainerOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = nextContainerRef.current;
            if (homeSection) {
                const homeRect = homeSection.getBoundingClientRect();
                const isVisible = homeRect.top <= window.innerHeight * thresholdToShowButton;
                setIsHomeInView(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToNextContainer = () => {
        if (nextContainerRef.current) {
            const nextContainerOffset = nextContainerRef.current.offsetTop;
            window.scrollTo({
                top: nextContainerOffset,
                behavior: 'smooth',
            });
        }
    };

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='w-full h-full bg-white backdrop-blur-xl bg-opacity-20'>
            {/* animated presence starts from this div */}
            <div className="w-100 h-100 mt-40 mx-0 md:mt-60 md:mx-60 p-10 rounded-sm bg-white bg-opacity-60 backdrop-blur-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 items-center justify-center">
                            <div className="flex items-center justify-center">
                                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-100 bg-opacity-70 text-emerald-950 shadow-sm backdrop-blur-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-11 w-11">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-2 text-center text-4xl font-semibold">
                                <h1>Arlind Maliqi</h1>
                            </div>
                            <div className="mx-8 my-4 h-1 bg-emerald-400"></div>
                            <div className="text-center text-2xl uppercase">Developer</div>
                        </div>
                    </div>
{/* to the end of here  */}
                    <div className="h-full w-full grid grid-cols-1 items-center justify-center">
                        <div className="gap-2">
                            <h1 className="text-6xl grid-cols-1 font-bold text-gradient-to-r from-green-200 to-blue-200">Hello!</h1>
                            <p className="border-t-4 border-emerald-500 bg-emerald-200 bg-opacity-40 p-1 font-light backdrop-blur-lg text-lg">Welcome to my cryptic corner of the web. I'm your friendly neighborhood web developer, here to turn caffeine into code and dreams into error messages.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2">
                            <Link to="/projects" className="text-md h-9 w-full bg-white font-semibold text-gray-700 transition-all hover:bg-slate-200 hover:shadow-sm text-center flex items-center justify-center">Projects</Link>
                            <Link to="/resume" className="text-md h-9 w-full bg-sky-100 font-semibold text-sky-950 transition-all hover:bg-sky-200 hover:shadow-sm text-center flex items-center justify-center">Resume</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center text-center mt-10 p-14'>
                <button onClick={scrollToNextContainer} className='hover:cursor-pointer hover:opacity-90 hover:scale-105 active:opacity-60 rounded-full transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 transition-transform transform active:translate-y-[25px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                {isHomeInView && (
                    <button onClick={scrollToHome} className='fixed z-10 bottom-4 right-10 hover:cursor-pointer hover:opacity-90 hover:scale-105 active:opacity-60 rounded-full active:scale-110 bg-gray-100 p-2 transition-all active:ring-4 ring-white'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-7 h-7 transition-transform transform active:translate-y-[-5px]`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                )}
            </div>

            <div className={`${isFullContainerOpen ? 'hidden' : 'bg-white backdrop-blur-lg bg-opacity-60 h-24 mt-7'}`}>
                {!isFullContainerOpen && (
                    <div className='flex justify-between items-center p-8'>
                        <h1 className='font-semibold text-2xl'>Programming is like sex: One mistake and you have to support it for the rest of your life.</h1>

                        <button
                            onClick={openFullContainer}
                            className="text-gray-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {isFullContainerOpen && (
                <div ref={nextContainerRef} className="fullcontainer mt-7 bg-white bg-opacity-60 backdrop-blur-lg">
                    <div className='flex justify-between items-center p-8'>
                        <h1 className={`font-semibold text-2xl ${isFullContainerOpen ? '' : 'animate-pulse transition-all'}`}>My Programming Skills</h1>
                        <button
                            onClick={closeFullContainer}
                            className="text-gray-500 font-bold"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 active:animate-spin transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 h-100 ">
                        <div className="grid  gap-2">
                            <div className='h-56 bg-amber-200 font-bold text-center flex items-center justify-center text-6xl text-amber-500 border-4 border-amber-100'>
                                JavaScript
                            </div>
                            <div className='h-80 bg-fuchsia-200 font-bold text-center flex items-center justify-center text-6xl text-fuchsia-500 border-4 border-fuchsia-100'>
                                Tailwind
                            </div>
                            <div className='h-60 bg-rose-200 font-bold text-center flex items-center justify-center text-6xl text-rose-500 border-4 border-rose-100'>
                                Laravel
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className='lg:h-full h-60 bg-lime-200 font-bold text-center flex items-center justify-center text-6xl text-lime-500 border-4 border-lime-100'>
                                NodeJS
                            </div>
                            <div className='lg:h-full h-72 bg-sky-200 font-bold text-center flex items-center justify-center text-6xl text-sky-500 border-4 border-sky-100'>
                                React
                            </div>
                            <div className='lg:h-full h-60 bg-violet-200 font-bold text-center flex items-center justify-center text-6xl text-violet-500 border-4 border-violet-100'>
                                MySQL
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className='lg:h-full h-80 bg-indigo-200 font-bold text-center flex items-center justify-center text-6xl text-indigo-500 border-4 border-indigo-100'>
                                PHP
                            </div>
                            <div className='lg:h-full h-40 bg-stone-200 font-bold text-center flex items-center justify-center text-6xl text-stone-500 border-4 border-stone-100'>
                                Java
                            </div>
                        </div>
                    </div>

                </div>
            )}

            <div className='bg-white backdrop-blur-lg bg-opacity-20 h-96 flex justify-center items-center'>
                <div className='grid grid-cols-1 items-center justify-center text-center p-4'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-sky-900 from-slate-900 font-bold text-6xl'>Where to find me</h1>
                    <div className='grid grid-cols-2 justify-center items-center p-12'>
                        <div className='flex justify-center items-center '>
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#0f1e34" viewBox="0 0 496 512" className='w-20 h-20 active:opacity-60'><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </Link>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='#0e2a43' viewBox="0 0 448 512" className='w-20 h-20 active:opacity-60'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </Link>
                        </div>
                    </div>
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

// If you're easily frightened by curly braces, don't worry; I have a flashlight and a sense of humor ready to guide you through the dark depths of the digital underworld.