import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import './globals.css'
import { RaleWay } from './(components)/font'
import LinkLine from './(components)/linkLine'

export default function Homepage() {
  return (
    
    <div className="sm:max-w-xs lg:max-w-md max-w-xs pb-20 pt-10 text-center flex flex-col">
      
      <div 
        id='usernameDisplay'
        className="
          text-white text-4xl 
          customBounce 
          drop-shadow-[1px_1px_3px_#a86bff] p-2">
        DeadlyUnicorn
      </div>

      
    <div 
      id='infoContainer'
      className=" 
      border-white border-t border-l rounded-b-md
      py-4 px-1
      bg-red-100 bg-opacity-50
      shadow-lg flex flex-col text-lg
      ">
            
      <div className={RaleWay}>

        <p>
          Hi I am Alex! 
        </p>

        <p>
          <br/>My nickname is&nbsp;<span className='text-violet-900 hover:text-violet-700'>DeadlyUnicorn.</span>
          <br/>You can find information 
          <br/>about&nbsp;me&nbsp;here,
          <br/>and also some of my projects!
        </p>
        <br/>
        <p>
          Feel&nbsp;free to 
          explore my projects/pages, ask me any questions 
          and&nbsp;connect&nbsp;with&nbsp;me.
        </p>

        <div id="socialLinks_container" className='flex justify-center gap-2 my-2'>

          <LinkLine href="https://github.com/deadly-unicorn/">

          
            <div className=" 
              text-slate-100 hover:text-white 
              fill-slate-100 hover:fill-white
              font-bold 
              flex 
              bg-zinc-800 p-1 rounded-lg">
                  
              Github&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </div>
          </LinkLine>

          <LinkLine href="https://www.linkedin.com/in/alexander-petrache/">

            <div className=" 
              text-slate-100 hover:text-white font-bold 
              flex
              fill-slate-100 hover:fill-white
              bg-blue-600 p-1 rounded-lg">

                  LinkedIn&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
          </LinkLine>

        </div>
            
      </div>
        
        <div 
          id='summaryContainer'
          className="
            m-2
            border-t border-black 
            flex flex-col ">
          <div className={RaleWay}>

            <p className="p-1 font-semibold">Summary</p>  
            <p className="font-light">I am a Web developer.</p>
            <p className="font-light">Currently I am working&nbsp;with:</p>
            
              
            
            <div className="max-h-fit text-left mt-2 flex flex-col min-h-[60px] gap-4">
              
              <div id='toolRow1' className='flex justify-center gap-4 mt-2'>

                <LinkLine href="https://nextjs.org">
                  <div 
                    className='
                    hover:-translate-y-2 duration-700
                    drop-shadow-[0px_-0.3px_1.4px_rgba(0,0,0,1)]
                    bg-zinc-900 p-1 rounded-lg h-14 w-24
                    flex items-center justify-center
                    text-slate-200 hover:text-white'>

                        NextJS
                  </div>
                </LinkLine>


                <LinkLine href="https://realm.mongodb.com">
                  <div
                    className="
                    hover:-translate-y-2 duration-700
                    text-green-400 hover:text-green-300
                    drop-shadow-[0px_-0.3px_1.4px_rgba(19,78,74,1)]
                    flex items-center justify-center text-center
                    bg-teal-900 p-1 rounded-lg h-14 w-24">
                    
                    MongoDB
                    <br/><span className='text-xs absolute translate-y-4'>(Realm+Atlas)</span>
                  </div>
                </LinkLine>
              </div>

              <div id='toolRow2' className='flex justify-center gap-4 mb-4'>

                <LinkLine href="https://tailwindcss.com">
                  <div
                    className="
                    hover:translate-y-2 duration-700
                    text-slate-200 hover:text-white font-bold 
                    drop-shadow-[0px_-0.3px_1.4px_rgba(34,211,238,1)]  
                    flex items-center justify-center text-center
                    bg-cyan-400 p-1 rounded-lg  h-14 w-24">
                      Tailwind
                      <span className='text-xs'>CSS</span>
                  </div>
                </LinkLine>

              
              </div>

            </div>

            <p className="font-light">
              I also have good experience&nbsp;with:</p>

            <div id='expRow1' className='flex justify-center gap-4 mt-4'>

              <LinkLine href="https://isocpp.org">
                <div 
                  className='
                  hover:-translate-y-2 duration-700
                  drop-shadow-[0px_-0.3px_1.4px_rgba(0,0,160,1)]
                  bg-blue-900 p-1 rounded-lg h-10 w-12
                  flex items-center justify-center
                  text-slate-200 hover:text-white font-bold'>

                      C++
                </div>
              </LinkLine>


              <LinkLine href="https://www.office.com">
                <div
                  className="
                  
                  hover:-translate-y-2 duration-700
                  drop-shadow-[0px_-0.3px_1.4px_rgba(255,60,60,1)]  
                bg-orange-500
                text-slate-200 hover:text-white font-bold  text-center
                 p-1 rounded-lg  h-10 w-20">
                  
                  <span className='text-xs'>MS</span>Office
                </div >
              </LinkLine>
              
            </div>
                  
            
          </div>
              
        </div>

      </div>
    </div>

      
  )
}
