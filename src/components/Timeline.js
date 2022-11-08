import React, {} from 'react'
import Blackmarket from './Blackmarket'
import CourseList from './CourseList'
import Designation from './Designation'
import Thrane from './Thrane'
import Trainings from './Trainings'


export default function Timeline() {

  return (
    <div>
        <div id="career" className='career container mx-auto 2xl:px-64 lg:px-32 xs:px-4 py-12'>
                <div className='text-center text-slate-200 font-bold text-lg lg:text-3xl mb-16'>
                    <h2>
                        My Career Timeline
                    </h2>
                </div>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-6">            
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-xs lg:text-lg font-semibold text-indigo-600 dark:text-white uppercase "> State University IT Instructor 
                        <span className="normal-case bg-blue-100 text-blue-800 font-medium text-xs lg:text-sm xs:px-1 lg:px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1 lg:ml-3">Present</span></h3>
                        <time className="block mb-2 text-xs lg:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 1, 2018 - December 9, 2022</time>
                        <p className="mb-4 prose-sm lg:prose-lg font-normal text-gray-300 dark:text-gray-400">
                            Teaching core subjects for Information Technology and Computer Science courses of the <a href='https://bisubalilihan.com/' target="_blank" rel="noreferrer" className="text-teal-300">Bohol Island State University - Balilihan Campus.</a>
                        </p>
                        <div className='flex items-center align-middle '>
                            <svg className="w-3 h-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <p className='ml-2 uppercase text-xs lg:text-base font-medium text-white'>Subjects Handled</p>
                        </div>
                        
                        <CourseList/>
                        
                        <div id="position" className='flex items-center align-middle scroll-my-10 '>
                            <svg className="w-3 h-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <p className='ml-2 uppercase  text-xs lg:text-base font-medium text-white'>Assigned Position/s</p>
                            
                        </div>
                        <Designation />

                        <div id="trainings" className='flex items-center align-middle  scroll-my-10'>
                            <svg className="w-3 h-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            <p className='ml-2 uppercase  text-xs lg:text-base font-medium text-white'>Trainings, Seminars and Other Works</p>
                            
                        </div>
                        <Trainings/>

                        <a href="https://bisubalilihan.com/about-bisu/campus-officials/" target="_blank" rel="noreferrer" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>See University Profile</a>
                    </li>



                    <li id="designer" className="mb-10 ml-6 scroll-my-10">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-xs lg:text-lg font-semibold text-indigo-600 dark:text-white uppercase "> web designer and developer</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2016 - May 2017</time>
                        <p className="mb-4 prose-sm lg:prose-lg font-normal text-gray-300 dark:text-gray-400">
                            Web Developer and Web Designer of the Denmark based company <a href='https://www.facebook.com/thraneweb/' target="_blank" rel="noreferrer" className="text-teal-300">Thrane Web Development and Services</a>
                        </p>
                        <Thrane />
                    </li>
                
                    <li id="ojt" className="ml-6 my-12 scroll-my-10">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-xs lg:text-lg font-semibold text-indigo-600 dark:text-white uppercase ">ON-THE-JOB TRAINEE</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2015 - February 2016</time>
                        <p className="mb-4 prose-sm lg:prose-lg font-normal text-gray-300 dark:text-gray-400">
                            On-the-trainee of a DTI registered technology firm pioneered software development outsourcing in the province of bohol   <a href='https://auza.net/' target="_blank" rel="noreferrer" className="text-teal-300">Auza.net</a>
                        </p>
                    </li>
                    <li id="graphic" className="ml-6 scroll-my-10">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-xs lg:text-lg font-semibold text-indigo-600 dark:text-white uppercase  ">graphic artist<span className="normal-case bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Part-Time Job</span></h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2015 - December 2017</time>
                        <p className="mb-4 prose-sm lg:prose-lg font-normal text-gray-300 dark:text-gray-400">
                            Graphic Artist of the <a href='https://www.facebook.com/BlackMarketPrintnet' target="_blank" rel="noreferrer" className="text-teal-300">BlackMarket Printnet</a>
                        </p>
                        <Blackmarket />
                    </li>
                </ol>
            </div>


            <div className="w-full" >
                <div className='relative '>
                    <img className='lg:absolute xs:hidden -left-80 -mt-96 -top-96 p-0 h-72 -rotate-90  pointer-events-none'  src={process.env.PUBLIC_URL + '/icons/Shape.svg'} alt="gmail"/> 
                </div>
            </div>
    </div>
    
  )
}