import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Drawer() {

    
  const [open, setOpen] = useState(false)


  return (
    <div>
        

        <button
                type="button"
                className="fixed top-5 right-5 z-10 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-white"
                onClick={() => setOpen(true)}
                >
                <span className="sr-only">Open panel</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>

     <Transition.Root show={open} as={Fragment}>
        
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Navigate</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 sm:px-6">
                      <div>
                        <ul>
                          <li className='group'>
                          <a href="#profile" className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                          <svg className="group-hover:ease-in-out duration-500 w-4 h-4 text-indigo-700 text-lg font-normal mr-3 group-hover:text-slate-200" fill='currentColor' viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            My Profile
                            </a>
                          </li>
                          <li className='group'>
                           <a href="#tools" className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                           <svg className="group-hover:ease-in-out duration-500 w-4 h-4 text-indigo-700 text-lg font-normal mr-3 group-hover:text-slate-200" fill='currentColor' viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
                            Tools used in this webpage
                            </a>
                          </li>
                          
                          <li className='group'>
                            <a href="#career" className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                            <svg className="group-hover:ease-in-out duration-500 w-4 h-4 text-indigo-700 text-lg font-normal mr-3 group-hover:text-slate-200" fill='currentColor' viewBox="0 0 512 512"><path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"/></svg>
                            Career Timeline
                            </a>
                          </li>
                          <div className='ml-12 '>
                            <div className='group'>
                              <li className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                                <a href="#career" className='group-hover:ease-in-out duration-500 text-indigo-700 group-hover:text-slate-200'>
                                University Instructor
                                </a>
                              </li>
                            </div>
                            
                            <div className='group'>
                              <li className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                                <a href="#designer" className='group-hover:ease-in-out duration-500 text-indigo-700 group-hover:text-slate-200'>
                                Web Designer and Developers
                                </a>
                              </li>
                            </div>
                            
                            <div className='group'>
                              <li className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                                <a href="#ojt" className='group-hover:ease-in-out duration-500 text-indigo-700 group-hover:text-slate-200'>
                                  On-the-job Training
                                </a>
                              </li>
                            </div>
                            
                            <div className='group'>
                              <a href="#graphic"  className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                                <li className='group-hover:ease-in-out duration-500 text-indigo-700 group-hover:text-slate-200'>
                                Graphic Artist
                                </li>
                              </a>
                            </div>
                            
                          </div>
                          <li className='group'>
                          <a href="#educ" className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                            <svg  className="group-hover:ease-in-out duration-500 w-4 h-4 text-indigo-700 text-lg font-normal mr-3 group-hover:text-slate-200" fill='currentColor'  viewBox="0 0 640 512"><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4l-139 92.7L37.6 126C15.6 130.9 0 150.3 0 172.8V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V172.8c0-22.5-15.6-42-37.6-46.9L476.8 98.1 337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM408 176c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88zm-88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>
                            Education Timeline
                            </a>
                          </li>
                          
                          <li className='group '>
                           <a href="#services" className='group-hover:ease-in-out duration-500 px-3 py-2 border border-white text-indigo-700 flex flex-row justify-items-start items-center group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:to-transparent hover:text-slate-200'>
                              <svg  className="group-hover:ease-in-out duration-500 w-4 h-4 text-indigo-700 text-lg font-normal mr-3 group-hover:text-slate-200" fill='currentColor' viewBox="0 0 640 512"><path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/></svg>
                           My Services
                            </a>
                          </li>
                        </ul>


                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    </div>
  )
}
