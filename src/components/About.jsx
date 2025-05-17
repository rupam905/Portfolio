import React from 'react'

const About = () => {
  return (
    <section id='about' className='min-h-[calc(100vh-150px)] flex justify-center items-center flex-col bg-gray-50'>
        <div className='max-w-5xl p-16 '>
            <h2 className='font-bold text-4xl text-center text-blue-950'>About me</h2>

            <div className='text-center mt-5 text-lg max-w-2xl font-medium text-gray-600'>
                <p>Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.</p>
            </div>
            <div className='grid-cols-1 md:grid-cols-2 gap-6 mt-8 flex justify-center'>
            <div className="p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong> Master of Computer Applications </strong>
                </li>
                <li>
                Techno India University (2024-2026)
                
                </li>
                <li>
                  <strong> Bachelor of Computer Applications </strong>
                </li>
                <li>
                Techno India Institute of Technology (2021-2024)
                </li>
              </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About
