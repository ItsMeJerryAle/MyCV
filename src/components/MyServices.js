import React from 'react'

export default function MyServices() {
  return (
    <div>
        
        <div className='w-full bg-[#1c1c1c] h-fit'>
            <div className='container mx-auto py-12'>
                <div className='text-center text-slate-200 font-bold text-3xl mb-16'>
                    <h2>
                        My Services
                    </h2>
                </div>

                <div className='grid grid-cols-3 gap-10 '>
                    <div className='flex ease-in-out duration-100 flex-col justify-center items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                            <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor' viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
                            <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >UI/UX Design</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Frontend design to your responsive websites or mobile applications using any of the following tools or framework
                            </p>
                            <div className='flex mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/xd.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/figma.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/mui.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/materialize.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/sass.svg'} alt="react logo"/>
                           
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col justify-center items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                            <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor' viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                            <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Graphic Design</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Graphic arts, photo manipulation and digital poster designs
                            </p>
                            <div className='flex mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        Web Development
                    </div>
                    
                    <div>
                        Mobile Development
                    </div>
                    
                    <div>
                        Branding & Identity
                    </div>
                    
                    <div>
                        Coding Tutorials
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
