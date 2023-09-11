import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'

export default function GuestLayout() {
    return (
        <div class="relative flex justify-center bg-gradient-to-r from-green-200 to-blue-200">
            <div
                className="absolute inset-0 z-0 overflow-hidden blur-10xl"
                aria-hidden="true"
                style={{
                    background: 'linear-gradient(to bottom right, #81a792, #8599af)',
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            <Navbar />
            <Outlet />
        </div>
    )
}
