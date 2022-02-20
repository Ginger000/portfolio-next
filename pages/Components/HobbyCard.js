import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HobbyCard = ({hobby}) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold:0.2
});
const animation = useAnimation();
useEffect(()=>{
    if(inView){
        animation.start({
            opacity:1,
            y:0,
            transition:{
                ease: [0.6, 0.01, -0.05, 0],
                duration: 0.6
            }
        })
    } else {
        animation.start({
            opacity:0,
            y:100
        })
    }
    console.log("use effect hook, inView = ", inView)
},[inView])

  if(hobby){
  const {name_1, name_2, name_3, quote} = hobby.attributes
  return (
    <motion.div ref={ref} animate={animation} className='group px-6 py-6  rounded-md h-72 flex flex-col justify-between md:hover:-translate-y-4 hover:drop-shadow-xl duration-500
        border-2 border-hyper-cyan'>
        <div className='text-3xl text-pale-blue font-bold group-hover:text-hyper-cyan'>
            <h3>{name_1}</h3>
            <h3>{name_2}</h3>
            <h3>{name_3}</h3>
        </div>
        <p className='font-light'>
            {quote}
        </p>
    </motion.div>
  )
} else {
  return null
}
}

export default HobbyCard