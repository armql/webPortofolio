import React from 'react'

export default function EntryCard() {
    return (
        <div class="m-24 grid-cols-2 items-start justify-end rounded-sm bg-white bg-opacity-80 backdrop-blur-lg">
            <div class="w-100 h-100 p-4">
                <div class="grid grid-cols-2 justify-between">
                    <div class="grid grid-cols-1 items-center justify-center gap-2 p-6">
                        <div class="flex items-center justify-center">
                            <div class="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-100 bg-opacity-70 text-emerald-950 shadow-sm backdrop-blur-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-11 w-11">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="p-2 text-center text-3xl font-semibold">
                            <h1>Arlind Maliqi</h1>
                        </div>
                        <div class="mx-8 my-4 h-1 bg-emerald-400"></div>
                        <div class="text-center text-xl uppercase">Developer</div>
                    </div>
                    <div class="h-full w-full">
                        <div class="gap-2">
                            <h1 class="text-3xl">Hello!</h1>
                            <p class="border-t-4 border-emerald-500 bg-emerald-200 bg-opacity-40 p-1 font-light backdrop-blur-lg">Welcome to my portofolio as a web developer</p>
                        </div>
                        <div class="grid grid-cols-2 gap-2 py-2">
                            <button class="text-md h-9 w-full bg-white font-semibold text-gray-700 transition-all hover:bg-slate-200 hover:shadow-sm">Projects</button>
                            <button class="text-md h-9 w-full bg-sky-100 font-semibold text-sky-950 transition-all hover:bg-sky-200 hover:shadow-sm">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
