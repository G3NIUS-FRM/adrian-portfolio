import React from 'react'
import { AboutME } from '../components/AboutComponents/AboutME'
import PythonIcon from '../assets/icons/PythonIcon.png'
import DjangoIcon from '../assets/icons/DjangoIcon.png'
import ReactIcon from '../assets/icons/ReactIcon.png'
import MySQL_Icon from '../assets/icons/MySQL_Icon.png'
import TecnologieCircle from '../components/TecnologiesComponents/TecnologieCircle'
export const About = () => {
  return (
    <div id='about' className='mt-38 xl:mt-12 bg-[var(--section-color)] w-full h-[100%] flex flex-col items-center'>
        <AboutME />
        <div id="tecnologies" className='mt-10 mb-10 flex flex-col w-[80%] h-[30%] items-center gap-10'>
          <h2 className='        
           text-[var(--title-color)] 
           text-[36px]
           font-[Outfit]'>Tecnologies</h2>
           <div className='flex flex-col lg:grid lg:grid-cols-5 w-full items-center gap-10'>
              <TecnologieCircle img={PythonIcon} name={"Python"} color={"#1C94FC"} />
              <TecnologieCircle img={DjangoIcon} name={'Django'} color={"#005901"} />
              <TecnologieCircle img={ReactIcon} name={"React"} color={"#1C94FC"}/>
              <TecnologieCircle img={MySQL_Icon} name={"MySQL"} color={"#1C94FC"}/>


           </div>
        </div>
    </div>
  )
}
