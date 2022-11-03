import React from 'react'

export default function Designation() {
  return (
    <div>
          <ul className="mb-8 mt-3 space-y-3 text-left text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
                <svg className="flex w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold">Management Information System Officer</p>
                        <span className='ml-5 text-slate-500'>2019 - Present</span>
                    </div>
                    
                    <div className='pl-5'>
                        <ul className="text-gray-400 mb-2">
                            <li>
                               - Design and analyze information systems that fit the university's technical requirements and oversee the 
                               maintenance of these systems
                            </li>
                            <li>
                               - Provide technical knowledge in identifying an appropriate budget, technical specifications for software and
                               hardware systems
                            </li>
                            <li>
                               - Manage and maintain unversity databases and perform regular backup web portals
                            </li>
                            <li>
                               - Generate data and reporst from existing databases as required by different governing bodies
                            </li>
                            <li>
                               - Provide technical support in solving IT related issues
                            </li>
                            <li>
                               - Design, develop and maintain the university's official website and other web portals
                            </li>
                            <li>
                               - Manage and supervice personnel who are involved in the implementation and maintenance of new hardware
                               and software systems
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </li>
            
            <li className="flex items-start space-x-2">
                <svg className="flex w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold">Compliance Officer for Privacy</p>
                        <span className='ml-5 text-slate-500'>2020 - 2021</span>
                    </div>
                    <div className='pl-5'>
                        <ul className="text-gray-400 mb-2">
                            <li>
                               - Ensure proper data breach and security incident management of BISU Balilihan Campus including its preparation and submission 
                               to the NPC of reports and other documentation concerning data breaches within prescribed period
                            </li>
                            <li>
                               - Perform other duties and tasks that maybe assigned by the university that will further the interest of data Privacy
                               and Security and uphold the rights of the data subjects
                            </li>
                            <li>
                               - Inform and cultivate awareness on privacy and data protection within the organization of the university, including all
                               relevant laws, rules and regulations.
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </li>


            <li className="flex items-start space-x-2">
                <svg className="flex w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex'>
                        <p className="font-semibold">ICT Services Lead</p>
                        <span className='ml-5 text-slate-500'>2019 - Present</span>
                    </div>
                    <div className='pl-5'>
                        <ul className="text-gray-400 mb-2">
                            <li>
                               - Maintains the functionality of the campus computer laboratories and the data center
                            </li>
                            <li>
                               - Assists all faculty and campus personnel in any IT services 
                            </li>
                            <li>
                               - Leads in the development and maintenance of the following campus websites
                               <div className='grid grid-cols-2 gap-2 py-2'>
                                    <div>
                                        <a href="https://bisubalilihan.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='h-60 pointer-events-none ml-5' src={process.env.PUBLIC_URL + '/icons/bisubalilihan.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center'>BISU Balilihan Official Website</p>
                                    </div>    
                                    <div>
                                        <a href="http://ict.bisubalilihan.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='h-60 pointer-events-none ml-5' src={process.env.PUBLIC_URL + '/icons/ictservices.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center'>BISU Balilihan ICT Services Website</p>
                                    </div>   
                                    <div>
                                        <a href="https://mis-helpline.herokuapp.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='h-60 pointer-events-none ml-5' src={process.env.PUBLIC_URL + '/icons/helpdesk.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center'>MIS Office Helpdesk WebApp</p>
                                    </div>                            
                               </div>
                            </li>

                            <li>
                               - Administrator of the following university websites
                               <div className='grid grid-cols-2 gap-2 py-2'>
                                    <div>
                                        <a href="https://admin.bisu.edu.ph/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='h-60 pointer-events-none ml-5' src={process.env.PUBLIC_URL + '/icons/ismis.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center'>Integrated School Management Information System</p>
                                    </div>    
                                    <div>
                                        <a href="https://bisu.e-learning.ph/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='h-60 pointer-events-none ml-5' src={process.env.PUBLIC_URL + '/icons/lms.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center'>University Learning Management System</p>
                                    </div>   
                                                              
                               </div>
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </li>
        </ul>
    </div>
  )
}
