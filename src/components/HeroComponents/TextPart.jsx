import React from 'react'

export const TextPart = () => {
  return (
    <div id='TextPart' className='
          lg:w-[50%] 
          w-[80%]
          
          h-full 
          flex 
          lg:relative
          lg:left-12
          xl:left-32
          items-center 
          justify-center 
          relative'>
            <div className='flex flex-col gap-12'>
              <h1 className='
              text-[var(--title-color)]
              font-[Outfit] 
              text-[48px]
              lg:text-[48px]
              xl:text-[68px]'>Hi, I'm Adrian - Fullstack Developer</h1>
    
              <p className='
              font-roboto
              font-light
              text-[20px]
              lg:text-[24px]
              text-[var(--description-color)]
              '>
                a <b>Fullstack Developer</b> passionate about building modern and efficient web applications. I work mainly with <b>React</b> on the frontend and <b>Django</b> on the backend to create seamless digital experiences.
              </p>
            </div>
          </div>
  )
}
