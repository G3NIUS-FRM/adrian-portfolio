import React from 'react'
import { DegreeFrame } from '../components/DegreesComponents/DegreeFrame'
export default function Degrees() {
  const AI_Degree_URL= '/pdfs/AiDegree.pdf'
  return (
    <div id='certifications' className='h-full w-full flex flex-col items-center lg:items-start gap-28 mt-10 bg-[var(--section-color)] mb-10'>
        <h2 className='text-[var(--title-color)] text-[32px] md:text-[42px] font-[Outfit] relative top-12 lg:left-24'>Certifications & Degrees</h2>
        <div className='flex items-center justify-around flex-col gap-10'>
          <DegreeFrame url={AI_Degree_URL} parragraph={"The OCI AI Foundations learning path is designed to introduce you to the fundamental concepts of AI, Machine Learning, Deep Learning and Generative AI with a specific focus on the practical application of these technologies within Oracle Cloud Infrastructure. This Learning Path is ideal for beginners looking to enhance their understanding of AI technologies without any prior experience."}/>
          <DegreeFrame url={AI_Degree_URL} parragraph={"The OCI AI Foundations learning path is designed to introduce you to the fundamental concepts of AI, Machine Learning, Deep Learning and Generative AI with a specific focus on the practical application of these technologies within Oracle Cloud Infrastructure. This Learning Path is ideal for beginners looking to enhance their understanding of AI technologies without any prior experience."}/>
        </div>
    </div>
  )
}
