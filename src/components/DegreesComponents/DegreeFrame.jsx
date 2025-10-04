import React from 'react'

export const DegreeFrame = ({url, parragraph}) => {
  return (
    <div className='flex flex-col lg:flex-row w-full h-auto justify-around gap-8 items-start p-4'>

        <div className='
            w-full h-auto flex-shrink-0 
            lg:w-[500px] lg:h-[300px] 
            shadow-xl border-4 border-gray-200 
            overflow-hidden'>
            
            <iframe 
                src={url} 
                className='w-full h-full'
                title="Visualizador de Certificación"
                style={{ border: 'none' }}
            >

                Tu navegador no soporta iframes. <a href={url}>Descarga el PDF</a>.
            </iframe>
        </div>
        
        <div className='w-full lg:w-[40%] h-full p-2'>
            <p className='
                text-[var(--description-color)] 
                text-xl md:text-[24px] lg:text-[30px] // Ajuste de tamaño de texto para responsividad
                font-[Roboto]
                leading-relaxed // Mejora la separación entre líneas para mejor lectura
            '>
                {parragraph}
            </p>
        </div>
    </div>
  )
}