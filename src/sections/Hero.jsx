import React from 'react'
import NavBar from '../components/NavBar'
import Adrian from '../assets/imgs/Adrian.png'
import { TextPart } from '../components/HeroComponents/TextPart'
import { ImgPart } from '../components/HeroComponents/ImgPart'
export default function Hero() {
  return (
    <>
    <NavBar />
    <div id='hero' className='
    mt-8 
    flex
    flex-col  
    lg:flex-row 
    justify-between 
    items-center 
    w-[100%] 
    h-[100%]'>
      <TextPart />
      <ImgPart />
    </div>
    </>
  )
}
