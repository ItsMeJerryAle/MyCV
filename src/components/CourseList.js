import React from 'react'

export default function CourseList() {
  return (
    <div>
        
        <ul className="mb-8 mt-3 space-y-3 text-left text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
                <svg className="flex w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                
                <div className='block'>
                    <p className="font-semibold">Web Development/Web Enterprise</p>
                    <p className="text-gray-400">Core Tech Stack </p>
                    <div className='h-12 flex mb-3'>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/html.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/css3.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/javascript.svg'} alt="react logo"/>
                        <img className='w-12 mt-3 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/php.svg'} alt="react logo"/>
                    </div>
                    <p className="text-gray-400 mt-5 mb-2">Libraries and Frameworks</p>
                    <div className='h-12 flex'>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/laravel.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/bootstrap.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/sass.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/mui.svg'} alt="react logo"/>
                        <img className='w-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/materialize.svg'} alt="react logo"/>
                    </div>

                    <p className="text-gray-400 mt-5 mb-2">Applications</p>
                    <div className='h-12 flex'>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/xd.svg'} alt="react logo"/>
                        <img className='h-10 mt-1 w-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/figma.svg'} alt="react logo"/>
                    </div>

                    <p className="text-gray-400 mt-5 mb-2">Database Management Systems</p>
                    <div className='h-12 flex'>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/mysql.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                        <img className='h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/xd.svg'} alt="react logo"/>
                        <img className='h-10 mt-1 w-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/figma.svg'} alt="react logo"/>
                    </div>
                </div>
            </li>
            <li className="flex items-center space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Mobile Application using Google Android Platform</span>
            </li>
            <li className="flex items-center space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Java Programming - OOP<span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
            </li>
            <li className="flex items-center space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Data Structures and Algorithm in Java <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
            <li className="flex items-center space-x-2">
                
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>.Net Framework with MySQL <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
            </li>
        </ul>

    </div>
  )
}
