import React from 'react';
import Button from './Button';
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion';

const container = {
  show:{
    transition:{
      staggerChildren:0.1
    }
  }
}

const item = {
  hidden:{
    opacity:0,
    y:300
  },
  show: {
    opacity:1,
    y:0,
    transition:{
      ease: [0.6, 0.01, -0.05, 0],
      duration: 1.6
    }
  }
}

const Hero = ({ hero }) => {
    if(hero) {

    
    const { content1, name, content2, content3, content4 } = hero.attributes;
    return (
        <motion.div 
          className='w-4/5 mx-auto pt-40 xl:pt-60 space-y-2 sm:space-y-6 h-full md:h-screen'
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
        >     
            
          <motion.div variants = {item} >
          <ReactMarkdown className="text-hyper-cyan font-light 2xl:text-lg">{content1}</ReactMarkdown> 
          </motion.div>

                
                <motion.h1 variants = {item} className="text-3xl sm:text-5xl 2xl:text-7xl font-bold text-ho-pink">{name}</motion.h1>
                <motion.h1 variants = {item} className="text-3xl sm:text-5xl 2xl:text-7xl font-semibold text-ho-pink opacity-50 relative -z-10">
                    {content2}
                </motion.h1>
                <motion.p variants = {item} className=" w-full md:w-128 2xl:text-lg text-gray-100 font-normal">{content3}</motion.p>
                <motion.p variants = {item} className="text-hyper-cyan 2xl:text-lg">
                I’m graduating at May, 2022, 
                <br className='' />
                and currently finding a Front-end developer job or internship.
                </motion.p>
            <motion.div variants = {item} className='pt-6 flex sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <Button>
                Check Out My Work
              </Button>
              <Button>
                Hire Me
              </Button>
            </motion.div>
            
        </motion.div>
    );
  } else {
    return null
  }

};

export default Hero;
