import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);
  
    useEffect(() => {
      const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
      
      const capitalizedSegments = pathSegments.map((segment) => {
        if (segment.toLowerCase() === 'home') {
          return null;
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1);
      });

      const breadcrumbElements = capitalizedSegments.map((segment, index) => (
        <div key={index} className="font-bold text-xl flex gap-2">
          /
          <Link to={`/${segment}`} className="font-normal hover:opacity-70">
            {segment}
          </Link>
        </div>
      ));
  
      setBreadcrumbs(breadcrumbElements);
    }, [location.pathname]);
  
    return (
        <div className="grid grid-cols-1">
            <div className="fixed z-10 top-100 right-0 left-0 h-24 grid-cols-2 items-start justify-end bg-white bg-opacity-80 backdrop-blur-lg">
                <div className='flex h-24 gap-2 items-center justify-between text-3xl p-4 font-medium'>
                    <h1>Arlind Maliqi <span className='font-light text-2xl text-slate-500'>/ Developer</span></h1>

                    <div className='flex justify-around text-xl gap-4'>
                        <Link to="about" className='hover:text-emerald-800 active:opacity-50 transition-all'>
                            About me
                        </Link>
                        <div className='text-emerald-300 font-bold'>
                        |
                        </div>
                        <Link to="projects" className='hover:text-emerald-800 active:opacity-50 transition-all'>
                            Projects
                        </Link>
                        <div className='text-emerald-200 font-bold'>
                        |
                        </div>
                        <Link to="resume" className='hover:text-emerald-800 active:opacity-50 transition-all'>
                            Resume
                        </Link>
                        <div className='text-sky-200 font-bold'>
                        |
                        </div>
                        <Link to="contact" className='hover:text-emerald-800 active:opacity-50 transition-all'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className='fixed top-28 left-4'>
                <div className='flex gap-2'>
                <Link to="home" className='text-xl hover:opacity-70'>Home</Link>
                <div className=''>
                    {breadcrumbs}
                </div>
                </div>
            </div>
        </div>
    )
}
