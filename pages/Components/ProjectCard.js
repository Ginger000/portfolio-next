import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const ProjectCard = ({ selected }) => {
    if (selected) {
        const {
            title,
            description,
            techStack,
            githubLink,
            deployLink,
            course,
        } = selected.attributes;
        return (
            <div className="group px-6 py-6 bg-card-back rounded-md flex flex-col justify-between md:hover:-translate-y-4 hover:cursor-pointer hover:drop-shadow-xl duration-500">
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
                                <a href={githubLink}>
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
                                    <Link href="/FrontendMentor" passHref>
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faArrowUpRightFromSquare}
                                        ></FontAwesomeIcon>
                                    </Link>
                                ) : (
                                    <a href={deployLink}>
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
                    <h2 className="text-xl text-pale-blue font-bold group-hover:text-hyper-cyan">
                        {title}
                    </h2>
                    <p>
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </p>
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
        );
    } else {
        return null;
    }
};

export default ProjectCard;
