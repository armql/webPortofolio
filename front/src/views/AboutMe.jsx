import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/sm.jpg'
export default function AboutMe() {
    const { scrollY } = useScroll();
    const scrollYProgress = useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className='bg-white backdrop-blur-lg bg-opacity-70 w-full '>
            <div className='h-40'></div>
            <div className='bg-image' style={{ backgroundImage: `url(${img})` }}>
                <div className='container mx-auto p-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='text-lg h-full'>
                            <div className='bg-emerald-200 backdrop-blur-lg bg-opacity-60 shadow-lg h-full'>
                                <h1 className='font-bold text-6xl text-center border-b-8 bg-white p-4 border-emerald-500'>
                                    About Me
                                </h1>
                                <p className='p-4 text-2xl mb-8 text-emerald-950' >
                                    Welcome to my corner of the internet! I'm Arlind, a 20-year-old coding enthusiast from Gjilan, Kosovo, who spends most of their time in Prishtina, diligently studying at the University of Business and Technology.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-emerald-400 backdrop-blur-md bg-opacity-40 p-4 shadow-lg '>
                                <h2 className='font-bold text-emerald-500 text-2xl mb-2'>
                                    My Academic Adventures
                                </h2>
                                <p className='text-emerald-200'>
                                    As a professional student (seriously, they should give out degrees for this), I'm currently majoring in Computer Science. Think of me as a perpetual learner, always on the quest for the perfect code.
                                </p>
                            </div>
                            <div className='bg-emerald-400 backdrop-blur-md bg-opacity-40 p-4 mt-4'>
                                <h2 className='font-bold text-emerald-500 text-2xl mb-2'>
                                    The Nerd Tech
                                </h2>
                                <p className='text-emerald-200'>
                                    Went in the wild tried them all, still do; Java, JavaScript, PHP, React, Laravel, and MySQL. lately I sprinkle a little Tailwind CSS magic to make things look snazzy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-60 backdrop-blur-lg p-8 mt-8'>
                        <h2 className='font-bold text-3xl mb-4'>
                            The Human Behind the Code
                        </h2>
                        <p>
                            Believe it or not, there's a life beyond the screens. When I'm not conjuring code, you might catch me gaming or watching movies. Yes, I do have a life... sometimes.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                        <div className='bg-blue-400 backdrop-blur-lg bg-opacity-50 text-white p-4 shadow-lg'>
                            <h2 className='font-bold text-2xl mb-2'>
                                Top-Secret Projects
                            </h2>
                            <p>I may not be on the corporate payroll (they just can't handle my awesomeness), but I have plenty of ideas. Stay tuned; they are definitely a few commits away...
                            </p>
                        </div>
                        <div className='bg-rose-500 backdrop-blur-lg bg-opacity-40 text-white p-4 shadow-lg'>
                            <h2 className='font-bold text-2xl mb-2'>
                                Hemophiliac Extraordinaire
                            </h2>
                            <p>
                                Oh, and did I mention I have superpowers? Well, I'm a hemophiliac, which means I've mastered the art of bleeding gracefully. Life's challenges make us stronger, right?
                            </p>
                        </div>
                    </div>
                    <div className='bg-lime-600  text-white bg-opacity-60 backdrop-blur-lg p-8 mt-8'>
                        <h2 className='font-bold text-3xl mb-4'>
                            Future Conquests
                        </h2>
                        <p>
                            In the grand scheme of things, my journey is just a snippet of the code. Who knows? I might be coding your future favorite app.
                        </p>
                    </div>
                    <div className='bg-emerald-950 backdrop-blur-lg bg-opacity-50 p-8 mt-8'>
                        <h2 className='font-bold text-3xl mb-4 text-lime-200'>
                            Beam Me Up
                        </h2>
                        <p className='text-lime-50 text-lg'>
                            If you want to chat or collaborate projects, drop me an email at <a className='underline' href='mailto:arlindmaliqi28@gmail.com'>arlindmaliqi28@gmail.com</a>. You can also stalk me (I mean, connect with me) on <Link className='underline' to='#'>LinkedIn</Link>. Thanks for visiting my little corner of the web.
                        </p>
                    </div>
                </div>
            </div>
            <motion.div
                className="h-0.5 bg-emerald-400 fixed top-24 left-0 right-0 z-20"
                style={{ scaleX: scaleX }}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </div>
    );
}
