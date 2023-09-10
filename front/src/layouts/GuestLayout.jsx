import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'

export default function GuestLayout() {
    return (
        <div class="flex justify-center bg-gradient-to-r from-green-200 to-blue-200">
            <Navbar />
            <Outlet />
        </div>
    )
}
