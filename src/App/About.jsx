import React from 'react'

import { FaReact } from "react-icons/fa";

function About() {
  return (
    <div className='pt-20 pb-20'>
        <div>

                <div>
                    <div className='px-4'>
                        <h1 className='2xl:text-6xl md:text-4xl text-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>
                            Welcome to my Full Stack Developer profile
                        </h1>
                    </div>
                    <div className='px-4'>
                        <p className='text-center text-zinc-400 pt-4 md:text-lg sm:text-sm text-xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minus!
                        </p>
                    </div>
                    <div className='flex justify-center pt-10'>
                        <a href="/" className='md:text-base text-sm border border-purple-500 text-purple-500 px-5 py-3 md:rounded-xl rounded-2xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:text-white duration-300'>
                            Get Started
                        </a>
                    </div>
                </div>

            <div className='flex justify-center pt-20'>
                <div className='w-10/12'>
                    <div>
                        <h1 className='text-purple-500 md:text-4xl text-2xl pb-4'>
                            Front end
                        </h1>
                    </div>
                    <div className='max-w-2xl'>
                        <p className='text-zinc-500 md:text-base text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint amet deserunt commodi vero doloremque adipisci corporis non minima repellat vitae cumque magnam eius fuga nobis voluptas iusto assumenda eveniet, animi quo aliquam consequuntur aspernatur tenetur aperiam? Et deleniti expedita temporibus optio nulla obcaecati accusamus officiis possimus. Quo, itaque dolorum!
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-20'>
                <div className='w-10/12'>
                    <div className='flex justify-end'>
                    <div>
                    <div>
                        <h1 className='text-purple-500 text-end md:text-4xl text-2xl pb-4'>
                            Back end
                        </h1>
                    </div>
                    <div className='max-w-2xl'>
                        <p className='text-zinc-500 text-end md:text-base text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint amet deserunt commodi vero doloremque adipisci corporis non minima repellat vitae cumque magnam eius fuga nobis voluptas iusto assumenda eveniet, animi quo aliquam consequuntur aspernatur tenetur aperiam? Et deleniti expedita temporibus optio nulla obcaecati accusamus officiis possimus. Quo, itaque dolorum!
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-20'>
                <div className='w-10/12'>
                    <div>
                        <h1 className='text-purple-500 md:text-5xl text-3xl pb-5 text-center'>
                            Full Stack Developer
                        </h1>
                    </div>
                    <div className='flex justify-center'>
                    <div className='max-w-2xl'>
                        <p className='text-zinc-500 text-center md:text-base text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint amet deserunt commodi vero doloremque adipisci corporis non minima repellat vitae cumque magnam eius fuga nobis voluptas iusto assumenda eveniet, animi quo aliquam consequuntur aspernatur tenetur aperiam? Et deleniti expedita temporibus optio nulla obcaecati accusamus officiis possimus. Quo, itaque dolorum!
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About