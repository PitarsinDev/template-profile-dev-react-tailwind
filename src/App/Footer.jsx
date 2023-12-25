import React from 'react'

import { RiMetaFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md py-10'>

            <div>
                <div>
                    <h1 className='text-center text-white md:text-3xl text-xl pb-2'>
                        Footer Developer
                    </h1>
                </div>
                <div className='px-5'>
                    <p className='text-center text-zinc-400 md:text-base text-xs'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero aperiam quisquam tempore? Veritatis nam aspernatur, ea aperiam sequi vero?
                    </p>
                </div>
                <div className='flex justify-center pt-5'>
                    <a href="/" className='mx-2'>
                        <span className='text-zinc-400 hover:text-white duration-300 text-xl'>
                        <RiMetaFill />
                        </span>
                    </a>
                    <a href="/" className='mx-2'>
                        <span className='text-zinc-400 hover:text-white duration-300 text-xl'>
                        <FaGithub />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer