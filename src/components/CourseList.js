import React from 'react'

export default function CourseList() {
  return (
    <div>
        
        <ul className="mb-8 mt-3 space-y-3 text-left text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
                <svg className="flex w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <p className="font-semibold text-xs lg:text-base">Web Development/Web Enterprise</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pl-2 lg:pl-5'>
                        <div>
                            <p className="text-gray-400 mb-2 text-xs lg:text-base">Core Tech Stack </p>
                            <div className='h-12 flex mb-3'>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/html.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/css3.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/javascript.svg'} alt="react logo"/>
                                <img className='w-8 lg:w-12 mt-3 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/php.svg'} alt="react logo"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-2 text-xs lg:text-base">Libraries and Frameworks</p>
                            <div className='h-12 grid grid-rows-2 lg:grid-rows-none grid-flow-col gap-6 lg:gap-1 mb-10 lg:mb-0'>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/laravel.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/bootstrap.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/sass.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/mui.svg'} alt="react logo"/>
                                <img className='w-8 lg:w-12 pointer-events-none mt-1 lg:mt-3' src={process.env.PUBLIC_URL + '/icons/materialize.svg'} alt="react logo"/>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-gray-400 mb-2 text-xs lg:text-base">Applications for UI Design</p>
                            <div className='h-12 flex mb-3 lg:mb-0'>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/xd.svg'} alt="react logo"/>
                                <img className='h-6 lg:h-12 mt-1 lg:mt-0 w-8 lg:w-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/figma.svg'} alt="react logo"/>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-2 text-xs lg:text-base">Database Management Systems</p>
                            <div className='h-12 flex'>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/mysql.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/xampp.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/wamp.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/firebase.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pt-2 overflow-x-hidden pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/mongodb.svg'} alt="react logo"/>
                            </div>
                        </div>

                        <div>
                            <p className="mt-3 text-gray-400 mb-2 text-xs lg:text-base">Content Management System Stack</p>
                            <div className='h-12 flex'>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/wordpress.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/elementor-icon.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/sage.svg'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/acf.png'} alt="react logo"/>
                           </div>
                        </div>
                       
                    </div>
                    
                </div>
            </li>
            <li className="flex mt-10 items-startspace-x-2">
                <svg className=" mt-5 flex w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <div className='block'>
                    <p className="mt-5 ml-2 font-semibold text-xs lg:text-base">Mobile Application using Google Android Platform</p>
                    <div className=' pl-4 lg:pl-7'>
                        <p className="text-gray-400 mb-2 text-xs lg:text-base">Stack</p>
                        <div className='h-12 flex mb-3'>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/Java.png'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/android.png'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/sqlite.svg '} alt="react logo"/>
                               
                        </div>
                    </div>
                    <div className=' pl-4 lg:pl-7'>
                        <p className="text-gray-400 mb-2 text-xs lg:text-base">Currently learning React Native and Flutter</p>
                    </div>
                    
                </div>
                

                
            </li>
            <li className="flex items-start space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <div className='block'>
                    <p className="font-semibold text-xs lg:text-base">Java Programming - OOP, Data Structures and Algorithm in Java</p>
                    <div className='pl-2 lg:pl-7'>
                        <p className="text-gray-400 mb-2 text-xs lg:text-base">Stack</p>
                        <div className='h-12 flex mb-3'>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/Java.png'} alt="react logo"/>
                                <img className='h-8 lg:h-12  pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/netbeans.png'} alt="react logo"/>
                                
                        </div>
                    </div>
                    
                </div>

            </li>
            <li className="flex items-start space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <div className='block'>
                    <p className="font-semibold text-xs lg:text-base">.NET Framework with MySQL</p>
                    <div className=' pl-2 lg:pl-7'>
                        <p className="text-gray-400 mb-2 text-xs lg:text-base">Stack</p>
                        <div className='h-12 flex mb-3'>
                            <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/net.svg'} alt="react logo"/>  
                            <img className='h-8 lg:h-12 pointer-events-none mr-5' src={process.env.PUBLIC_URL + '/icons/visual studio.svg'} alt="react logo"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        
    </div>
  )
}
