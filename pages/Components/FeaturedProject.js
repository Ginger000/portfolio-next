import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const FeaturedProject = ({ project, id }) => {
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
    if(project){

    

    const { title, description, techStack, githubLink, deployLink } =
        project.attributes;
    const { url } = project.attributes.cover.data.attributes.formats.large;
    return (
        <div ref={ref} className=" drop-shadow-lg md:drop-shadow-none sm:w-4/5 xl:max-w-screen-lg mx-auto mb-24 mt-12">
            {console.log(url)}
            <motion.div animate={animation} className="grid grid-cols-10 ">
                <div className="md:hidden relative row-span-full col-start-1 col-span-10 shadow-xl">
                    <a href={deployLink} target="_blank" rel="noreferrer noopener">
                        <img
                            className="opacity-10 absolute inset-0 w-full h-full object-cover object-center rounded-sm"
                            src={url}
                            alt=""
                        />
                    </a>
                    
                </div>

                <div
                    className={`hidden md:block row-span-full ${
                        id % 2 === 0 ? 'col-start-1' : 'col-end-11'
                    }  col-span-6 self-center opacity-40 hover:opacity-100 hover:cursor-pointer duration-500 shadow-lg`}
                >
                    <a href={deployLink} target="_blank" rel="noreferrer noopener">
                    <img
                        className="object-cover rounded-lg"
                        src={url}
                        alt=""
                    />
                    </a>
                    
                </div>

                <div
                    className={`z-10 row-span-full col-start-1 col-span-10 md:col-span-6 ${
                        id % 2 === 0 ? 'md:col-end-11' : 'md:col-start-1'
                    }  self-center p-4 text-white rounded-lg`}
                >
                    <div
                        className={`flex flex-col ${
                            id % 2 === 0 ? 'md:items-end' : 'md:items-start'
                        } md:items-start space-y-2`}
                    >
                        <h6 className="text-hyper-cyan">Featured Project</h6>
                        <a href={deployLink} target="_blank" rel="noreferrer noopener">
                        <h2
                            className={`hover:text-hyper-cyan ${
                                id % 2 === 0 ? 'md:text-right' : 'md:text-left'
                            } duration-500 hover:cursor-pointer text-2xl font-bold`}
                        >
                            {title}
                        </h2>
                        </a>
                        
                        <div className="md:px-6 py-6 md:bg-card-back/75 rounded-md shadow-md hover:drop-shadow-lg">
                            <p
                                className={`text-gray-100 ${
                                    id % 2 === 0
                                        ? 'md:text-right'
                                        : 'md:text-left'
                                } `}
                            >
                                {description}
                            </p>
                        </div>
                        <ul className="text-hyper-cyan font-medium text-sm space-x-2 flex flex-wrap justify-start md:justify-end">
                            {techStack.split(' ').map((tech) => {
                                return <li key={uuidv4()}>{tech}</li>;
                            })}
                        </ul>
                        <div className="space-x-6">
                            {githubLink ? (
                                <a href={githubLink} target="_blank" rel="noreferrer noopener">
                                    <FontAwesomeIcon
                                        className="hover:text-hyper-cyan hover:cursor-pointer text-xl duration-500"
                                        icon={faGithub}
                                    ></FontAwesomeIcon>
                                </a>
                            ) : (
                                ''
                            )}
                            {deployLink ? (
                                <a href={deployLink} target="_blank" rel="noreferrer noopener">
                                    <FontAwesomeIcon
                                        className="hover:text-hyper-cyan hover:cursor-pointer text-xl duration-500"
                                        icon={faArrowUpRightFromSquare}
                                    ></FontAwesomeIcon>
                                </a>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
else {
    return null
}
};

export default FeaturedProject;
