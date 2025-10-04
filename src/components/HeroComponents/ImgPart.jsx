import React from 'react'
import Adrian from '../../assets/imgs/Adrian.png'
export const ImgPart = () => {
  return (
    <div id='ImgPart' className='mt-10 w-[80%] h-auto flex justify-center items-center '>
        <div id='fondoImg' className='
        flex
        justify-center
        
        w-[500px] 
        h-[400px] 
        lg:w-[450px]
        lg:h-[450px]
        xl:w-[600px]
        xl:h-[600px]
        lg:rounded-[20px]
        xl:rounded-full 
      bg-white
        relative 
        border-10 
        border-[var(--accent-color)] 
        overflow-hidden '>
          <img src={Adrian} alt=""  className='
          relative 

          bottom-8 
          w-[350px] 
          h-[460px] 
          lg:w-[500px] 
          lg:h-[660px]'/>

        </div>

    </div>
  )
}
