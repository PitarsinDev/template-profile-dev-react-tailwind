import React, { useState } from 'react'

function Nav() {

    const [menuopen, setMenuopen] = useState(false);

    const toggleMenu = () => {
        setMenuopen(!menuopen)
    };

  return (
    <nav className=' p-5'>
        <div className='flex justify-center'>
        <div className='w-10/12'>
        <div className="flex justify-between items-center">
            <div>
                <a href="/" className='text-xl text-purple-500'>
                    LOGO
                </a>
            </div>

            {/* button manu */}
            <div className='md:hidden items-center'>
                <button id='menu-toggle' className='text-purple-500 text-3xl pt-2' onClick={toggleMenu}>
                    <ion-icon   ion-icon name="menu-outline"></ion-icon>
                </button>
            </div>

            <ul className='hidden md:flex space-x-4 pr-5'>
                <li className='px-4'>
                    <a href="/" className='text-purple-500 flex text-lg'>
                        <span className='pt-0.5 pr-2'><ion-icon name="home-outline"></ion-icon></span>Home
                    </a>
                </li>
                <li className='px-4'>
                    <a href="/" className='text-purple-500 flex text-lg'>
                        <span className='pt-0.5 pr-2'><ion-icon name="receipt-outline"></ion-icon></span>About
                    </a>
                </li>
                <li className='px-4'>
                    <a href="/" className='text-purple-500 flex text-lg'>
                        <span className='pt-0.5 pr-2'><ion-icon name="people-outline"></ion-icon></span>Services
                    </a>
                </li>
                <li className='px-4'>
                    <a href="/" className='text-purple-500 flex text-lg'>
                        <span className='pt-0.5 pr-2'><ion-icon name="chatbubbles-outline"></ion-icon></span>Contact
                    </a>
                </li>
            </ul>
        </div>
        </div>
        </div>

        {/* 
            text nav center
            flex justify-center
        */}

        {menuopen ? (
                <ul className='flex-col md:hidden space-x-4 pt-5'>
                <li className='pb-2'>
                    <a href="/" className='text-purple-500 flex text-xl pl-4 ease-in-out hover:translate-x-1 duration-300'>
                    <span className='pt-0.5 pr-2'><ion-icon name="home-outline"></ion-icon></span>Home
                    </a>
                </li>
                <li className='pb-2'>
                    <a href="/" className='text-purple-500 flex ease-in-out hover:translate-x-1 duration-300'>
                    <span className='pt-0.5 pr-2'><ion-icon name="receipt-outline"></ion-icon></span>About
                    </a>
                </li>
                <li className='pb-2'>
                    <a href="/" className='text-purple-500 flex ease-in-out hover:translate-x-1 duration-300'>
                    <span className='pt-0.5 pr-2'><ion-icon name="people-outline"></ion-icon></span>Services
                    </a>
                </li>
                <li>
                    <a href="/" className='text-purple-500 flex ease-in-out hover:translate-x-1 duration-300'>
                    <span className='pt-0.5 pr-2'><ion-icon name="chatbubbles-outline"></ion-icon></span>Contact
                    </a>
                </li>
                </ul>
        ) : null}
        
    
    </nav>
  )
}

export default Nav