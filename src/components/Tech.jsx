import React from 'react'
import {BallCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className='text-center'>
     <motion.dev variants={textVariant()}
     >
    <p className={styles.sectionSubText}>What I have learned so far</p>
      <h2 className={`${styles.sectionHeadText}`}>Skill Set.</h2>
    </motion.dev>
    <div className="flex flex-row flex-wrap lg:px-12
    justify-center gap-4 lg:gap-10 mt-10 lg:mt-16">
      {
        technologies.map((technology) => (
          <motion.div 
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 lg:w-16 lg:h-16 lg:mt-1 bg-[#ffffff12] rounded-full p-2 lg:p-3" key={technology.name}>
            <img src={technology.icon} alt="" />
          </motion.div>
        ))
      }
    </div>
    </div>
  )
}

export default SectionWrapper(Tech,"")