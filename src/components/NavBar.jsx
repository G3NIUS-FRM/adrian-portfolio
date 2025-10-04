import { useState } from 'react'
import { NavBarFeatures } from './NavBarComponents/NavBarFeatures'
export default function NavBar() {
  const [isVisible, setIsVisible]=useState(false)

  const menuDisplay= isVisible ? 'block' : 'hidden'

  return (
    <nav className='
    w-full 
    mt-8 
    flex 
    justify-around
    items-center
    ' >

     
      <div>
        <h3 className='font-[Outfit] text-[32px] text-white xl:text-[48px]'><a href="/">Adrian<b>DEV</b></a></h3>
      </div>
    <NavBarFeatures menuDisplay={menuDisplay} isVisible={setIsVisible}/>


    <div className='w-[200px] h-15 bg-[var(--section-color)] hidden lg:flex justify-center items-center rounded-[10px]'>
      <button className='text-[var(--description-color)] text-[24px] '>
        Get CV
      </button>
    </div>


      <button className='
      lg:hidden 
      text-white 
      hover:bg-[var(--section-color)]
      w-[60px]
      h-[60px]
      text-[32px]
      flex
      justify-center
      items-center
      '
      onClick={()=>{setIsVisible(!isVisible)}}
      >
        ☰
      </button>
    </nav>
  )
}
