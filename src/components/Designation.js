import React from 'react'

export default function Designation() {
  return (
    <div>
          <ul className="mb-8 mt-3 space-y-3 text-gray-300 dark:text-gray-200">
            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex flex-col lg:flex-row mb-2 lg:mb-0'>
                        <p className="font-semibold text-sm lg:text-base">Management Information System Officer</p>
                        <span className='ml-0 lg:ml-5 text-indigo-500 text-xs lg:text-base'>2019 - Present</span>
                    </div>
                    
                    <div className='pl-1 lg:pl-5'>
                        <ul className="text-slate-400 prose-sm lg:prose-lg leading-snug lg:leading-snug mb-2">
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
                               - Generate data and reports from existing databases as required by different governing bodies
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
                <svg className="flex flex-shrink-0  w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex  flex-col lg:flex-row mb-2 lg:mb-0'>
                        <p className="font-semibold text-sm lg:text-base">ICT Services Lead</p>
                        <span className='ml-0 lg:ml-5 text-indigo-500 text-xs lg:text-base'>2019 - Present</span>
                    </div>
                    <div className='pl-1 lg:pl-5'>
                        <ul className="prose-sm lg:prose-lg leading-snug mb-2 text-slate-400">
                            <li>
                               - Maintains the functionality of the campus computer laboratories and the data center
                            </li>
                            <li>
                               - Assists all faculty and campus personnel in any IT services 
                            </li>
                            <li>
                               - Leads in the development and maintenance of the following campus websites:
                               <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                             
                                    <div>
                                        <a href="https://bisubalilihan.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='object-contain pointer-events-none ml-0 lg:ml-5' src={process.env.PUBLIC_URL + '/icons/bisubalilihan.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center -mt-4'>BISU Balilihan Official Website</p>
                                    </div> 

                                    <div>
                                        <a href="http://ict.bisubalilihan.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='object-contain pointer-events-none ml-0 lg:ml-5' src={process.env.PUBLIC_URL + '/icons/ictservices.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center -mt-4'>BISU Balilihan ICT Services Website</p>
                                    </div> 
                                    <div>
                                        <a href="https://mis-helpline.herokuapp.com/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='object-contain  pointer-events-none ml-0 lg:ml-5' src={process.env.PUBLIC_URL + '/icons/helpdesk.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center -mt-4'>MIS Office Helpdesk WebApp</p>
                                    </div>                            
                               </div>
                            </li>

                            <li>
                               - Administrator of the following university websites:
                               <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-2'>
                                    <div>
                                        <a href="https://admin.bisu.edu.ph/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='object-contain  pointer-events-none ml-0 lg:ml-5' src={process.env.PUBLIC_URL + '/icons/ismis.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center  -mt-4'>Integrated School Management Information System</p>
                                    </div>    
                                    <div>
                                        <a href="https://bisu.e-learning.ph/" className='text-indigo-400' target="_blank" rel="noreferrer">
                                                <img className='object-contain  pointer-events-none ml-0 lg:ml-5' src={process.env.PUBLIC_URL + '/icons/lms.png'} alt="react logo"/>
                                            </a>
                                        <p className='text-center  -mt-4'>University Learning Management System</p>
                                    </div>   
                                                              
                               </div>
                            </li>
                        </ul>
                       
                    </div>                   
                </div>
            </li>

                        
            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0 w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex flex-col lg:flex-row mb-2 lg:mb-0'>
                        <p className="font-semibold text-sm lg:text-base">Compliance Officer for Privacy</p>
                        <span className='ml-0 lg:ml-5 text-indigo-500 text-xs lg:text-base'>2020-2021</span>
                    </div>
                    
                    <div className='pl-1 lg:pl-5'>
                        <ul className="prose-sm lg:prose-lg mb-2 leading-snug lg:leading-snug text-slate-400">
                            <li>
                               - Manage and maintain unversity databases and perform regular backup web portals
                            </li>
                            <li>
                               - Provide technical knowledge in identifying an appropriate budget, technical specifications for software and
                               hardware systems
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
                <svg className="flex flex-shrink-0 w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex  flex-col lg:flex-row mb-2 lg:mb-0'>
                        <p className="font-semibold text-sm lg:text-base">The LEGION Adviser</p>
                        <span className='ml-0 lg:ml-5 text-indigo-500 text-xs lg:text-base'>2021 - Present</span>
                    </div>
                    <div className='pl-1 lg:pl-5'>
                        <ul className="prose-sm lg:prose-lg mb-2 leading-snug lg:leading-snug text-slate-400">
                            <li>
                               - The Legion is a campus organization that is composed of Information Technology and Computer Science Students
                            </li>
                            <li>
                               - Its goal is to address the campus needs in terms of ICT services
                            </li>
                            <li>
                               - Equip the members of the organization the skills and competence through trainings and on-field tasks by the different departments
                            </li>
                            <li>
                               - The organization comprises 4 departments;
                            </li>
                            <li>
                               -  Creatives - focuses mainly to the production of multimedia resources of the campus
                            </li>
                            <li>
                               -  Devs - focus is mainly to the development, maintenance and operation of the campus software and web services
                            </li>
                            <li>
                               -  Socials - responsible to every communication outlets internal or external through social media platforms or in-campus communication
                            </li>
                            <li>
                               -  Techs - responsible to the setup, troubleshooting and maintenance to all campus ICT equipment and Internet Infrastructure
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </li>

            <li className="flex items-start space-x-2">
                <svg className="flex flex-shrink-0 w-5 h-5 text-green-500 dark:t CSSext-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
   
                <div className='block'>
                    <div className='flex  flex-col lg:flex-row mb-2 lg:mb-0'>
                        <p className="font-semibold text-sm lg:text-base">Capstone Project Member of the Panelist</p>
                        <span className='ml-0 lg:ml-5 text-indigo-500 text-xs lg:text-base'>2019 - Present</span>
                    </div>
                    <div className='pl-1 lg:pl-5'>
                        <ul className="prose-sm lg:prose-lg mb-2 leading-snug lg:leading-snug text-slate-400">
                            <li>
                               - Member of the campus panelist of assessors that will check student's outputs on their course project requirements or thesis
                            </li>
                            <li>
                               - Assess students software applications and websites based on the software usability and acceptability criteria
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </li>
        </ul>
    </div>
  )
}
