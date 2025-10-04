import React from 'react'

export default function TecnologieCircle({img, name, color}) {
  return (
    <div className='group flex justify-start items-center  w-[300px] h-[100px] overflow-hidden '>
        <div className={`
          w-[100px] 
          h-[100px] 
          border-4 
          rounded-full
        bg-white border-[${color}] 
          flex justify-center 
          items-center 
          z-10 
          pointer-events-none
          relative
          left-10

          md: transition-all
          md: duration-500
          md: ease-in-out

          md:group-hover:-translate-x-10

          
          `}>
            <img src={img} alt="" className='w-[60px] h-[60px]'/>
        </div>
        <div className={`
            
            w-[70%] 
            h-[70%] 
            rounded-[10px]
            flex 
            justify-center 
            items-center 
            relative
            right-5 
            bg-[${color}]
            opacity-100

            shadow-[0_0_15px_${color}] 

            md:opacity-0
            md:transition-all
            md:duration-800
            md:ease-in-out
            
            md:-translate-x-[100px]
            
            md:group-hover:translate-x-0
            md:group-hover:opacity-100
            
            
            `}>
            <h3 className='text-white text-[24px] font-[Outfit]'>{name}</h3>
        </div>
    </div>
  )
}
