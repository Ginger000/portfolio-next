import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = () => {
  return (
    <div className='group px-6 py-6 bg-card-back rounded-md h-80 flex flex-col justify-between md:hover:-translate-y-4 hover:cursor-pointer hover:drop-shadow-xl duration-500'>
        <div className='space-y-6'>
            <div id='icons' className='flex justify-between '>
                <div className='text-3xl group-hover:text-hyper-cyan' id='folderIcon'>
                    <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                </div>
                <div id='gitAndDeploy' className='space-x-4 space-y-2'>
                    <FontAwesomeIcon className='text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500' icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500' icon={faArrowUpRightFromSquare} ></FontAwesomeIcon>
                </div>
            </div>
            <h2 className='text-xl text-pale-blue font-bold group-hover:text-hyper-cyan'>Project Name</h2>
            <p >Project description A webscraping tool/exe package that wrap all the process to scape business data in target city from Yelp.</p>
        </div>
        <div className='text-pale-blue' > Next.js  RestAPI  Strapi  TailwandCSS </div>
    </div>
  )
}

export default ProjectCard