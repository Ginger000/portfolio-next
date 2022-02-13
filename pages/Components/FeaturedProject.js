import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const FeaturedProject = ({ project, id }) => {
    const { title, description, techStack, github, deployLink } =
        project.attributes;
    const { url } = project.attributes.cover.data.attributes.formats.large;
    return (
        <div className=" drop-shadow-lg md:drop-shadow-none sm:w-4/5 xl:max-w-screen-lg mx-auto mb-24 mt-12">
            <div className="grid grid-cols-10 ">
                <div className="md:hidden relative row-span-full col-start-1 col-span-10 shadow-xl">
                    <img
                        className="opacity-10 absolute inset-0 w-full h-full object-cover object-center rounded-sm"
                        src={`http://localhost:1337${url}`}
                        alt=""
                    />
                </div>

                <div
                    className={`hidden md:block row-span-full ${
                        id % 2 === 0 ? 'col-start-1' : 'col-end-11'
                    }  col-span-6 self-center opacity-40 hover:opacity-100 hover:cursor-pointer duration-500 shadow-lg`}
                >
                    <img
                        className="object-cover rounded-lg"
                        src={`http://localhost:1337${url}`}
                        alt=""
                    />
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
                        <h2 className={`hover:text-hyper-cyan ${id%2===0 ? 'text-right':'text-left'} duration-500 hover:cursor-pointer text-2xl font-bold`}>
                            {title}
                        </h2>
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
                                return <li key={tech}>{tech}</li>;
                            })}
                        </ul>
                        <div className="space-x-6">
                            {github ? (
                                <FontAwesomeIcon
                                    className="hover:text-hyper-cyan hover:cursor-pointer text-xl duration-500"
                                    icon={faGithub}
                                ></FontAwesomeIcon>
                            ) : (
                                ''
                            )}
                            {deployLink ? (
                                <FontAwesomeIcon
                                    className="hover:text-hyper-cyan hover:cursor-pointer text-xl duration-500"
                                    icon={faArrowUpRightFromSquare}
                                ></FontAwesomeIcon>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;