import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const About = ({ profile }) => {

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

    if(profile){
    const { content_1, content_2, avatar_1, avatar_2 } = profile[0].attributes;
    const avatar_1_url = avatar_1.data.attributes.formats.medium.url;
    const avatar_1_alt = avatar_1.data.attributes.alternativeText;
    const avatar_2_url = avatar_2.data.attributes.formats.small.url;
    const avatar_2_alt = avatar_2.data.attributes.alternativeText;

    
    return (
        <motion.div ref={ref} animate={animation} className="grid grid-cols-12 mt-10 mb-40 text-gray-200">
            <div className="col-span-12 md:col-span-7 pr-10">
                <div>
                    <ReactMarkdown>{content_1}</ReactMarkdown>
                </div>
                <div className='mt-10'>
                    <ReactMarkdown>{content_2}</ReactMarkdown>
                </div>
            </div>

            <div className="col-span-12 md:col-span-5 hidden lg:block">
                <div className="peer relative inline-block left-52 hover:z-20 duration-500">
                    <div className="relative inline-block opacity-60 hover:opacity-100 duration-500">
                        <img
                            className="h-60"
                            src={avatar_2_url}
                            alt={avatar_2_alt}
                        />
                        <div className="-z-10 absolute top-5 left-5 h-full w-full border-0.5 border-ho-pink"></div>
                    </div>
                </div>

                <div className="relative -top-28 flex peer-hover:opacity-40 duration-500">
                    <div className="relative ">
                        <img
                            className=""
                            src={avatar_1_url}
                            alt={avatar_1_alt}
                        />
                        <div className="-z-10 absolute h-full w-full top-5 left-5 border-0.5 border-hyper-cyan"></div>
                    </div>
                    <div className=' ml-6 mt-10 bottom-5 flex flex-col space-y-3 text-2xl justify-end'>
                        <a href="https://www.facebook.com/profile.php?id=100009390374545">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faFacebookSquare}></FontAwesomeIcon>
                        </a>
                        <a href="https://www.instagram.com/ginger_linjiang/?hl=en">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faInstagram} ></FontAwesomeIcon>
                        </a>
                        <a href="https://github.com/Ginger000">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faGithub}  ></FontAwesomeIcon>
                        </a>
                        <a href="https://leetcode.com/ginger23333/">
                        <Icon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon="simple-icons:leetcode" />
                        </a>
                        <a href="https://issuu.com/ginger_linjiang/docs/lin_jiang_s_portfolio">
                        <Icon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon="cib:issuu" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-5 lg:hidden">
                <div className="peer relative text-center  hover:z-20 duration-500">
                    <div className="relative inline-block opacity-60 hover:opacity-100 duration-500">
                        <img
                            className="h-60"
                            src={avatar_2_url}
                            alt={avatar_2_alt}
                        />
                    </div>
                </div>

                <div className="relative lg:-top-20 -top-48 flex flex-col peer-hover:opacity-40 duration-500">
                    <div className="relative ">
                        <img
                            className=""
                            src={avatar_1_url}
                            alt={avatar_1_alt}
                        />
                    </div>
                    <div className='mt-6 flex space-x-3 text-2xl justify-center items-center'>
                    <a href="https://www.facebook.com/profile.php?id=100009390374545">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faFacebookSquare}></FontAwesomeIcon>
                        </a>
                        <a href="https://www.instagram.com/ginger_linjiang/?hl=en">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faInstagram} ></FontAwesomeIcon>
                        </a>
                        <a href="https://github.com/Ginger000">
                        <FontAwesomeIcon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon={faGithub}  ></FontAwesomeIcon>
                        </a>
                        <a href="https://leetcode.com/ginger23333/">
                        <Icon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon="simple-icons:leetcode" />
                        </a>
                        <a href="https://issuu.com/ginger_linjiang/docs/lin_jiang_s_portfolio">
                        <Icon className='hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer' icon="cib:issuu" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} else {
    return null
}
};

export default About;
