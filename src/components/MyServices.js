import React from 'react'

export default function MyServices() {
  return (
    <div>
        
        <div id="services" className='w-full bg-[#1c1c1c] h-fit'>
            <div className='container mx-auto py-12'>
                <div className='text-center text-slate-200 font-bold text-3xl mb-16'>
                    <h2>
                        My Services
                    </h2>
                </div>

                <div className='grid grid-cols-3 gap-10 '>
                    <div className='flex ease-in-out duration-100 flex-col justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                            <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor' viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
                            <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >UI/UX Design</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Frontend design to your responsive websites or mobile applications using any of the following tools or framework
                            </p>
                            <div className='flex flex-wrap gap-1 mt-5 justify-center text-center'>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/xd.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/figma.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/mui.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/materialize.svg'} alt="react logo"/>
                                </div>
                                <div>
                                    <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/sass.svg'} alt="react logo"/>
                                </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                            <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor' viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                            <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Graphic Design</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Graphic arts, photo manipulation and digital poster designs
                            </p>
                            <div className='flex flex-wrap gap-1 mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                        <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor'  viewBox="0 0 640 512"><path d="M616 352H24C10.75 352 0 362.8 0 376v16C0 440.5 39.47 480 88 480h464c48.53 0 88-39.47 88-88v-16C640 362.8 629.3 352 616 352zM552 432H88c-19.31 0-35.48-13.77-39.2-32h542.4C587.5 418.2 571.3 432 552 432zM112 88c0-4.406 3.594-8 8-8h400c4.406 0 8 3.594 8 8V320H576V88C576 57.13 550.9 32 520 32H120C89.13 32 64 57.13 64 88V320h48V88zM365.9 262.2C369.8 266.1 374.9 268 380 268s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 241.7 358 254.4 365.9 262.2zM274.1 137.9c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C249.8 266.1 254.9 268 260 268S270.2 266.1 274.1 262.2c7.812-7.812 7.812-20.5 0-28.31L240.3 200L274.1 166.2C281.1 158.4 281.1 145.7 274.1 137.9z"/></svg><h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Web Development</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Create responsive single-page applications or dynamic websites for business/ecommerce using any of the following development stack
                            </p>
                            <div className='flex flex-wrap gap-1 mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/wordpress.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/laravel.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/php.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/html.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/css3.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/javascript.svg'} alt="react logo"/>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                    <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor'  viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
                    <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Mobile Development</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Develop and build apps for various technologies such as Android and IOS using the following development stack
                            </p>
                            <div className='flex flex-wrap gap-1 mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/java.png'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/android.png'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/sqlite.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/firebase.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/react-native.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/flutter.svg'} alt="react logo"/>
                                   
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                    <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor'  viewBox="0 0 448 512"><path d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"/></svg>
                     <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Branding and Identity</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Design and create your business logo with mockups to define your promise of value and to build your own identity in the market
                            </p>
                            <div className='flex flex-wrap gap-1 shrink-0  mt-5 justify-center text-center'>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                <img className='h-8 pointer-events-none mr-3 group-hover:grayscale' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                                         
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex ease-in-out duration-100 flex-col  justify-start items-center border border-indigo-700   px-4 py-6  hover:bg-indigo-700 group'>
                    <svg className=' h-10 w-10 text-indigo-700 group-hover:text-slate-300' fill='currentColor'  viewBox="0 0 640 512"><path d="M192 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
                     <h2 className='text-indigo-700 my-4 group-hover:text-slate-300 font-semibold' >Coding Tutorials</h2>

                        <div className='text-slate-400 text-sm '>
                            <p className='text-center'>
                                Teaching java programming, graphic design, web development tools and web ops
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
