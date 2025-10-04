import React from 'react'

export const NavBarFeatures = ({menuDisplay, isVisible}) => {
    

  return (
    <div id="Nav Features" className={`
      ${menuDisplay}
      lg:flex 
      lg:flex-row 
      flex-col
      justify-around
      items-center
      lg:gap-12
      bg-[var(--section-color)] 
      text-[var(--description-color)]
      font-roboto
      font-semibold
      
      absolute              
      top-[120px]                        
      left-0                     
      right-0               
      z-10                       
      w-full                  
      
      lg:static                  
      lg:w-[55%]
      lg:h-auto

      rounded-[15px]
      p-4                        
        

      `}>


        <a href="#about" className='block lg:w-[100px]  py-2 lg:hover:bg-[var(--section-color)] hover:bg-[var(--background-color)] text-center text-[20px] hover:text-[var(--accent-color)] transition duration-500 ease-in-out' onClick={()=>{isVisible(!menuDisplay)}} >About</a>

        <a href="#projects" className='block lg:w-[100px]  py-2 lg:hover:bg-[var(--section-color)] hover:bg-[var(--background-color)] text-center text-[20px] hover:text-[var(--accent-color)] transition duration-500 ease-in-out' onClick={()=>{isVisible(!menuDisplay)}}>Projects</a>

        <a href="#certifications" className='block lg:w-[100px] py-2 lg:hover:bg-[var(--section-color)] hover:bg-[var(--background-color)] text-center text-[20px] hover:text-[var(--accent-color)] transition duration-500 ease-in-out' onClick={()=>{isVisible(!menuDisplay)}}>Certifications</a>

        <a href="#" className='block lg:w-[100px] py-2 lg:hover:bg-[var(--section-color)] hover:bg-[var(--background-color)] text-center text-[20px] hover:text-[var(--accent-color)] transition duration-500 ease-in-out' onClick={()=>{isVisible(!menuDisplay)}}>Contact</a>

        <a href="#" className='lg:hidden block py-2 lg:hover:bg-[var(--section-color)] hover:bg-[var(--background-color)] text-center text-[20px] hover:text-[var(--accent-color)] transition duration-500 ease-in-out' onClick={()=>{isVisible(!menuDisplay)}}>Get CV</a>
      
    </div>
  )
}
