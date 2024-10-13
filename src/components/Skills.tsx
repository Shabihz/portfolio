import React from 'react'

function Skills() {
  return (
    <div id='Skills' className='container pt-32'>
    <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technologies I work with</h2>
       <p className='text-gray-500 pt-2'>
I have a solid foundation in web development, speciallizing in HTML,CSS and Javascript my experience extend to use frameworks like React and next.js to create dynamic and user-friendly application
       </p>

        </div>
        <div>
            <div className='grid grid-cols-2 text-ellipsis text-3xl sm:text-4xl'>
         <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">TypeScript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
         </div>
         <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
         </div>
            </div>
        </div>

    </div>
      
    </div>
  )
}

export default Skills
