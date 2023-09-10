import React from 'react'

export default function EntryCard() {
    return (
        <div>
            <div className="mt-40 p-10 grid-cols-2 items-start justify-end rounded-sm bg-white bg-opacity-80 backdrop-blur-lg">
                <div className="grid grid-cols-2 justify-between">
                    <div className="grid grid-cols-1 items-center justify-center gap-2 p-6">
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
                    <div className="h-full w-full">
                        <div className="gap-2">
                            <h1 className="text-6xl grid-cols-1 font-bold text-gradient-to-r from-green-200 to-blue-200">Hello!</h1>
                            <p className="border-t-4 border-emerald-500 bg-emerald-200 bg-opacity-40 p-1 font-light backdrop-blur-lg text-lg w-96 ">Welcome to my cryptic corner of the web. I'm your friendly neighborhood web developer, here to turn caffeine into code and dreams into error messages. If you're easily frightened by curly braces, don't worry; I have a flashlight and a sense of humor ready to guide you through the dark depths of the digital underworld.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-2">
                            <button className="text-md h-9 w-full bg-white font-semibold text-gray-700 transition-all hover:bg-slate-200 hover:shadow-sm">Projects</button>
                            <button className="text-md h-9 w-full bg-sky-100 font-semibold text-sky-950 transition-all hover:bg-sky-200 hover:shadow-sm">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20 p-14'>
                <button className='hover:cursor-pointer hover:opacity-90 hover:scale-105 active:opacity-60 rounded-full hover:bg-gray-100 p-2 transition-all'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
