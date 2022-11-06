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
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Navigate</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div>
                        <ul>
                          <li>
                            <a href="#profile">
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a href="#tools">
                            Tools used in this webpage
                            </a>
                          </li>
                          <li>
                            <a href="#career">
                            Career Timeline
                            </a>
                          </li>
                          <li>
                            <a href="#career">
                            University Instructor
                            </a>
                          </li>
                          <li>
                            <a href="#career">
                            Subjects Handle
                            </a>
                          </li>
                          <li>
                            <a href="#position">
                            Assigned Position
                            </a>
                          </li>
                          <li>
                            <a href="#trainings">
                            Trainings, Seminars and Other Works
                            </a>
                          </li>

                          <li>
                            <a href="#designer">
                            Web Designer and Developers
                            </a>
                          </li>
                          <li>
                            <a href="#ojt">
                            On-the-job Training
                            </a>
                          </li>
                          <li>
                            <a href="#graphic">
                            Graphic Artist
                            </a>
                          </li>
                         
                          <li>
                            <a href="#educ">
                            Education Timeline
                            </a>
                          </li>
                          <li>
                            <a href="#educ">
                            Masters Degree
                            </a>
                          </li>
                          <li>
                            <a href="#educ">
                            Board Passer
                            </a>
                          </li>
                          <li>
                            <a href="#educ">
                            Qualifying Course
                            </a>
                          </li>
                          <li>
                            <a href="#educ">
                            Bachelors Degree
                            </a>
                          </li>
                          <li>
                            <a href="#educ">
                            Secondary Education
                            </a>
                          </li>
                          <li>
                            <a href="#services">
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
