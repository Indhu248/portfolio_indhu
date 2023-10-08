import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles'
import {services,about, personal_links, softskills} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
import girl from '../assets/girl.jpg'
import { p } from 'maath/dist/misc-7d870b3c.esm';

const ServiceCard = ({index,title,icon}) => {

  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px]
      rounded-[20px] shadow-card">

        <div options={{
            max:45,
            scale:1,
            speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col'>
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>About.</h2>
    </motion.div>
    {/* <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='text-secondary text-[14px] max-w-3xl leading-[30px]'>
      I'm a skilled web developer with experience in JavaScript, and expertise in frameworks 
      like React, Node.js and Three.js. I'm a quick learner and create efficient, scalable, and user-friendly solutions 
      that solve real-world problem.
    </motion.p> */}
    {/* <div className='mt-10 flex flex-wrap gap-10'>
      {
        services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))
      }
    </div> */}
    <div className='mt-10 flex flex-col lg:flex-row justify-between'>

      <div className='flex flex-col justify-center bg-[#D9D9D912] py-4 px-8 lg:px-32 rounded-md'>
        <div className="flex flex justify-center">
          <img 
          className='h-20 w-20 lg:h-36 lg:w-36 rounded-full object-cover' 
          src={girl} alt="" />
        </div>
        <div className="flex flex-col text-center">
          <p className='text-[20px] mt-4'>Indravathi Botcha</p>
          <h5 className='text-[14px] text-[#915eff]'>Web Developer</h5>
          <div className='className="flex flex justify-center'>
             {
               personal_links.map((item) => (
                 <img src={item.icon} alt={item.name} 
                 className='h-6 w-8 mt-4 cursor-pointer'/>
               ))
             }
          </div>
          <a href="#"
          className='bg-[#6d28d9] rounded-md p-2 mt-8'>Contact me</a>
          </div>
      </div>

      <div className='flex flex-col lg:ml-14'>
        {
          about.map((item) =>(
            <div className="w-auto mt-4 lg:mt-0 lg:w-[40rem] bg-[#9d9d9d16] px-10 py-4 rounded-md">
              <h2>{item.title}</h2>
              <p className='text-[13px] text-secondary my-4'>
                {item.text}
              </p>
            </div>
          ))
        }
        <div className='flex flex-row justify-between'>

        <div className='w-[20rem] lg:w-[23rem] bg-[#9d9d9d16] py-4 px-4 lg:px-10 rounded-md mt-4 mr-2'>
        <h2>Services</h2>
        {
          services.map((item) => 
             (
              <div className='flex mt-2'>
              <img src={item.icon} className='w-6 h-6 lg:w-8 lg:h-8'/>
              <p className='mx-1 lg:mx-3 text-[13px] text-secondary'>{item.title}</p>
              </div>
           ))
        }
        </div>

        <div className='w-[16rem] bg-[#9d9d9d16] py-4 px-4 lg:px-10 rounded-md mt-4'>
        <h2>Soft Skills</h2>
        {
          softskills.map((item) => 
             (
              <div className='flex mt-2'>
              <li className='lg:mx-3 list-disc text-[13px] text-secondary mt-2'>{item.name}</li>
              </div>
           ))
        }
        </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")


