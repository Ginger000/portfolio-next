import React, {useEffect} from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
        // console.log("use effect hook, inView = ", inView)
    },[inView])
    return (
        <motion.div ref={ref} animate={animation} className="text-center mt-72 space-y-6">
            <h1 className="mb-16 text-4xl font-bold text-ho-pink">
                Hire me or just say Hello
            </h1>
            <div>
                <Button> {`   Email   `}</Button>
            </div>
            <div>
                <Button> Phone </Button>
            </div>
            <div className="mt-6 flex space-x-3 text-2xl justify-center items-center text-gray-300">
                <FontAwesomeIcon
                    className="hover:text-hyper-cyan duration-500 cursor-pointer"
                    icon={faFacebookSquare}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className="hover:text-hyper-cyan duration-500 cursor-pointer"
                    icon={faInstagram}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    className="hover:text-hyper-cyan duration-500 cursor-pointer"
                    icon={faGithub}
                ></FontAwesomeIcon>
                <Icon
                    className="hover:text-hyper-cyan duration-500 cursor-pointer"
                    icon="simple-icons:leetcode"
                />
                <Icon
                    className="hover:text-hyper-cyan duration-500 cursor-pointer text-xl"
                    icon="cib:issuu"
                />
            </div>
        </motion.div>
    );
};

export default Contact;
