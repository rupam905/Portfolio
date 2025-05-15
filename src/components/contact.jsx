import React from 'react'

const contact = () => {
  const links = {
    Email: "mailto:rupamdutta905@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/rupam-dutta-",
    GitHub: "https://github.com/rupam905",
  };

  return (
    <section id='contact' className='min-h-screen items-center justify-center flex'>
      <div className='max-w-5xl p-14 mx-auto justify-center'>
        <h2 className='font-bold text-4xl pb-16 text-center text-blue-950'>Contact</h2>
        <div className=' gap-14  items-center justify-center'>
          <div className='p-6 border flex flex-col justify-center rounded-xl shadow hover:border-blue-300 transition-all'>
            <h3 className='text-xl font-bold mb-2'>Get in Touch</h3>
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <div className='flex flex-wrap gap-2 mt-4'>
              {Object.entries(links).map(([name, url], key) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-blue-500/10 text-blue-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-blue-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact
