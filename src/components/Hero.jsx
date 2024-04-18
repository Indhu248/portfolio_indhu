import React from 'react'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {Computers} from './canvas'
import { personal_links } from '../constants'
// import {SendSharpIcon} from '@mui/icons-material';

const Hero = () => {
  return (
   <section className="relative w-full h-[32rem] lg:h-screen mx-auto flex flex-col justify-between">
    <div className={`${styles.paddingX} absolute inset-0 top-[170px] 
    max-w-7xl mx-auto flex flex-row items-start gap-5 py-10 justify-between`}>

      {/* <div className="flex flex-col justify-center items-center mt-5">

        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />

      </div> */}
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Indhu</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a front-end <span className='text-[#915eff]'>developer</span> and<br className="sm:block hidden"/>
         UI <span className='text-[#915eff]'>designer.</span></p>
         <a className="bg-[#6d28d9] rounded-md text-center p-2 w-40 mt-10" href="https://drive.google.com/file/d/1tkQQrP1ppL6_3aM04Nufn-gFczYQgRaL/view?usp=sharing">Resume</a>
      </div>


    </div>

    {/* <Computers /> */}
   </section>
  )
}

export default Hero
