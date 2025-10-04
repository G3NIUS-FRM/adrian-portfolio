import React from 'react'

export const AboutME = () => {
  return (
    <div className='mt-8 h-[60%] w-[80%] flex flex-col items-start'>
        <h2 className='
        text-[var(--title-color)] 
        text-[36px]
        font-[Outfit]
        '>About Me</h2>
        <p
        className='
        text-[var(--description-color)]
        font-roboto
        text-[16px]
        xl:text-[24px]
        '
        >
            My first step in programming was a Cisco course, which is called <b>Python       Essentials 1</b>. When I finished it, I developed different projects like "letter             soup," tic-tac-toe, and others like those while learning from YouTube videos.
            
            After six months, I started to dive into the Web environment and learn <b>Django</b> which is a backend framework in python and the basics of the web,             like HTTP methods or DNS, and also learn HTML and CSS to build my pages. At this stage, I             completed different projects; however, these are the most important for my knowledge: 
            
            <b> Blog</b>: I learned how to do a CRUD and manage the Frontend and Backend in different frameworks.
            
            <b> Chat real-time</b>: I learned how to use WebSockets and enhanced my knowledge of authentication and JWT.
            
            <b> IncomeApp</b>: I improved my <b>React</b> knowledge and skills.
            
            Then, I explored different environments like machine learning and AI, data science, web             scraping, and others. Finally, I came back to web development to perfect these skills.
            
            As you know, my name is Adrian Ramirez and I'm 18 years old.


        </p>
        
    </div>
  )
}
