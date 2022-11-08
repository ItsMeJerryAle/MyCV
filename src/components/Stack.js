import React from 'react'

export default function Stack() {
  return (
    <div className='w-full py-24 px-4 lg:px-64 h-96'>
        <div id="tools" className='grid grid-cols-1 place-content-center '>
                    
                    <div className='grid grid-cols-2 gap-0 w-60 place-self-center'>
                        <div className=' text-center  place-self-center'>
                          <img className='react-logo h-16 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="react logo"/>
                        </div>
                        <div className='text-center  place-self-center'>
                          <img className='flowbite-logo h-16 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/flowbite.svg'} alt="react logo"/>
                        </div>
                        <div className='text-center col-span-full place-self-center'>
                          <img className='tailwind-logo h-20 pointer-events-none' src={process.env.PUBLIC_URL + '/icons/tailwind.svg'} alt="react logo"/>
                        </div>
                    </div>
              
                    <div className='place-self-center mt-10'>
                      <p className='text-lg md:text-xl font-light text-slate-200'>This webpage is built with the following tools</p>
                    </div>
                  </div>
    </div>
   
  )
}
