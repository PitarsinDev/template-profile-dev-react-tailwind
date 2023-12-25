import React from 'react'

function Header() {
  return (
    <div className='pt-10'>
        <div className='flex justify-center'>

            <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl md:w-10/12 w-11/12 shadow-md py-10'>

                    <div className='sm:pl-10 px-5'>
                        <div className='md:pb-5 pb-2'>
                            <h1 className='text-white lg:text-5xl text-3xl'>
                                I'm a Full Stack Developer
                            </h1>
                        </div>
                        <div className='lg:max-w-2xl md:max-w-lg max-w-sm'>
                            <p className='text-zinc-300 lg:text-base text-xs'>
                                Welcome to my Full Stack Developer profile 🚀 I'm Jao, a student taking on challenges in the world of front-end and back-end software development with endless passion and flexibility!
                            </p>
                        </div>
                        <div className='pt-10'>
                            <a href="/" className='text-purple-500 bg-white rounded-xl px-5 py-3 mr-4 lg:text-base sm:text-sm text-xs'>
                                Get Started
                            </a>
                            <a href="/" className='text-white border border-white rounded-xl px-5 py-3 lg:text-base sm:text-sm text-xs'>
                                Read more
                            </a>
                        </div>
                    </div>

            </div>

        </div>
    </div>
  )
}

export default Header