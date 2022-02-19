import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const MentorCard = ({singleProject}) => {
    if(singleProject) {

    
    const {title, mentorLink, githubLink, deployLink, techStack, practiceTime, cover} = singleProject.attributes
    const { url } = cover.data.attributes.formats.large;
    const {alternativeText} = cover.data.attributes
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className='flex justify-end'>
                <img className='xl:w-4/5' src={url} alt={alternativeText} />
            </div>
            <div className='space-y-4'>
                <h3 className='text-2xl text-pale-blue font-bold hover:text-hyper-cyan duration-500 hover:cursor-pointer text-center md:text-left'>{title}</h3>
                <div className='flex items-center justify-center md:justify-start space-x-4'>
                    <a className='inline-block' href={mentorLink}>
                        <img src="/front-mentor-favicon.png" alt={alternativeText} />
                    </a>
                    <a  href={githubLink}>
                        <FontAwesomeIcon
                            className="hover:text-hyper-cyan hover:cursor-pointer text-3xl duration-500 text-gray-50"
                            icon={faGithub}
                        ></FontAwesomeIcon>
                    </a>
                    <a href={deployLink}>
                        <FontAwesomeIcon
                            className="hover:text-hyper-cyan hover:cursor-pointer text-3xl duration-500 text-gray-50"
                            icon={faArrowUpRightFromSquare}
                        ></FontAwesomeIcon>
                    </a>
                </div>
                <div className='space-y-2 md:pt-10 text-gray-50 text-center md:text-left'>
                  <p>Tech stack: {techStack}</p>
                  <p>Practice Time: {practiceTime}</p>
                  <p>Peer-reviewed: True</p>
                </div>
            </div>
        </div>
    );
} else {
    return null
}
};

export default MentorCard;
