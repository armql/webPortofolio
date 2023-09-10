import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className='grid-cols-1 bg-gradient-to-r from-green-200 to-blue-200'>
        <Outlet />
    </div>
  )
}
