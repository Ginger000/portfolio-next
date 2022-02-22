import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { motion, useAnimation , AnimateSharedLayout, AnimatePresence} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ selected}) => {
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
    
    if (selected) {
        const {
            title,
            description,
            techStack,
            githubLink,
            deployLink,
            course,
            titleRichText
        } = selected.attributes;

        //There is a conflict between motion and tailwind translate
        return (
            <motion.div ref={ref} animate={animation} className="group ">
            <div className="h-full px-6 py-6 bg-card-back rounded-md flex flex-col justify-between hover:-translate-y-4 hover:cursor-pointer hover:drop-shadow-xl duration-500">
              
                <div className="space-y-6">
                    <div id="icons" className="flex justify-between ">
                        <div
                            className="text-3xl group-hover:text-hyper-cyan"
                            id="folderIcon"
                        >
                            <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                        </div>
                        <div id="gitAndDeploy" className="space-x-4 space-y-2">
                            {githubLink ? (
                                <a href={githubLink} target="_blank" rel="noreferrer noopener">
                                    <FontAwesomeIcon
                                        className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                        icon={faGithub}
                                    ></FontAwesomeIcon>
                                </a>
                            ) : (
                                ''
                            )}

                            {deployLink ? <> {
                                title === 'Front-end Hobby Group Practice' ? (
                                    <a href="/FrontendMentor" target="_blank" rel="noreferrer noopener">
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faArrowUpRightFromSquare}
                                        ></FontAwesomeIcon>
                                    </a>
                                ) : (
                                    <a href={deployLink} target="_blank" rel="noreferrer noopener">
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faArrowUpRightFromSquare}
                                        ></FontAwesomeIcon>
                                    </a>
                                )
                                }</> : (
                                ''
                            )}
                        </div>
                    </div>
                    <a href={deployLink} target="_blank" rel="noreferrer noopener">
                    <h2 className="text-xl text-pale-blue font-bold group-hover:text-hyper-cyan ">
                        <ReactMarkdown>
                        {titleRichText}                        
                        </ReactMarkdown>
                    </h2>
                    </a>
                    
                    {/* <p> */}
                        <ReactMarkdown>{description}</ReactMarkdown>
                    {/* </p> */}
                </div>
                <div>
                    <div className="text-sm mt-2">
                        <ReactMarkdown>{course}</ReactMarkdown>
                    </div>
                    <div className="text-pale-blue flex flex-wrap justify-start list-none">
                        {techStack.split(' ').map((tech) => {
                            return (
                                <li
                                    className="mr-3 text-sm font-semibold"
                                    key={uuidv4()}
                                >
                                    {tech}
                                </li>
                            );
                        })}
                    </div>
                </div>
    
            </div>
            </motion.div>
        );
    } else {
        return null;
    }
};

export default ProjectCard;
