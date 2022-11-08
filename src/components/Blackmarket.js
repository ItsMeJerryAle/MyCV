import React from 'react'

export default function Blackmarket() {
  return (
    <div>
         <div className='flex items-center align-middle '>
                    <svg className="w-3 h-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <p className='ml-2 uppercase font-medium text-white text-sm md:text-base'>My Responsibilities</p>
                    
        </div>

         <ul className="mb-8 mt-3 space-y-3 text-left text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0  w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold text-sm md:text-base">Design tarpaulin and poster layouts</p>
                    </div>               
                </div>
            </li>
            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0  w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold text-sm md:text-base">Design Tshirt layouts and Souvenir designs</p>
                    </div>               
                </div>
            </li>
            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0  w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold text-sm md:text-base">Design logo brandings and mockups</p>
                    </div>               
                </div>
            </li>
           
        </ul>

        <div className='flex items-center align-middle '>
                    <svg className="w-3 h-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <p className='ml-2 uppercase font-medium text-white text-sm md:text-base'>Stack</p>
                    
        </div>

        <ul className="mb-8 mt-3 space-y-3 text-left text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
               
                <div className='block'>
                    <div className='grid grid-cols-2 pl-5'>
                        <div>
                            <p className="text-gray-400 mb-2 text-sm md:text-base">Design Stack</p>
                            <div className='h-12 flex mb-3'>
                            <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/photoshop.svg'} alt="react logo"/>
                            <img className='h-8 lg:h-12 pointer-events-none mr-3' src={process.env.PUBLIC_URL + '/icons/illustrator.svg'} alt="react logo"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </li>
        </ul>
    </div>
  )
}
