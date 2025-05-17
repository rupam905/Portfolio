import React from 'react'

const projects = () => {
  return (
    <section id='projects' className='py-6 items-center justify-center flex '>
      <div className='max-w-5xl p-14 mx-auto'>
        <h2 className='font-bold text-4xl pb-20 text-center text-blue-950'>Projects</h2>
      
      <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
        <div className='p-6 border rounded-lg shadow hover:border-blue-300 transition-all'>
          <h3 className='text-xl font-semibold mb-4'>Notes Saver</h3>
            <p className='text-gray-600'>A sleek and efficient notes app built with React, Redux, and Tailwind,
               allowing users to create, edit, and organize notes effortlessly.</p>
               <div className='flex flex-wrap gap-2 mt-6'>
          {["React", "Redux", "Tailwind"].map((tech, key) =>(
            <span
            key={key}
            className="
              bg-blue-500/10 text-blue-500 py-2 px-4 
              rounded-full text-sm
              transition
              hover:bg-blue-500/20 hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            "
          >
            {tech}
          </span>
          ))}
               </div>
        </div>
        <div className='p-6 border rounded-xl shadow hover:border-blue-300 transition-all'>
          <h3 className='text-xl font-semibold mb-4'>Room booking site</h3>
            <p className='text-gray-600'>A modern and user-friendly room booking site that allows 
              users to seamlessly search, reserve, and manage room bookings.</p>
              <div className='flex flex-wrap gap-2 mt-6'>
          {["HTML", "CSS", "JavaScript"].map((tech, key) =>(
            <span
            key={key}
            className="
              bg-blue-500/10 text-blue-500 py-2 px-4 
              rounded-full text-sm
              transition
              hover:bg-blue-500/20 hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            "
          >
            {tech}
          </span>
          ))}
               </div>
          </div>
        
      </div>
      </div>
      
    </section>
  )
}

export default projects
