import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';




const About = ({ profile }) => {
    const { content_1, content_2, avatar_1, avatar_2 } = profile[0].attributes;
    const avatar_1_url = avatar_1.data.attributes.formats.medium.url;
    const avatar_1_alt = avatar_1.data.attributes.alternativeText;
    const avatar_2_url = avatar_2.data.attributes.formats.small.url;
    const avatar_2_alt = avatar_2.data.attributes.alternativeText;
    return (
        <div className="grid grid-cols-12">
            {console.log(profile[0].attributes)}
            <div className="col-span-7">
                <div>
                    <ReactMarkdown>{content_1}</ReactMarkdown>
                </div>
                <div>
                    <ReactMarkdown>{content_2}</ReactMarkdown>
                </div>
            </div>
            <div className="col-span-5">
                <div className="peer relative inline-block left-52 hover:z-20 duration-500">
                    <div className="relative inline-block opacity-60 hover:opacity-100 duration-500">
                        <img
                            className="h-60"
                            src={`http://localhost:1337${avatar_2_url}`}
                            alt={avatar_2_alt}
                        />
                        <div className="-z-10 absolute top-5 left-5 h-full w-full border-0.5 border-ho-pink"></div>
                    </div>
                </div>

                <div className="relative -top-20 flex peer-hover:opacity-40 duration-500">
                    <div className="relative ">
                        <img
                            className=""
                            src={`http://localhost:1337${avatar_1_url}`}
                            alt={avatar_1_alt}
                        />
                        <div className="-z-10 absolute h-full w-full top-5 left-5 border-0.5 border-hyper-cyan"></div>
                    </div>
                    <div className='flex flex-col space-y-3 text-2xl justify-end'>
                    <FontAwesomeIcon className='hover:text-hyper-cyan duration-500 cursor-pointer' icon={faFacebookSquare}></FontAwesomeIcon>
                    <FontAwesomeIcon className='hover:text-hyper-cyan duration-500 cursor-pointer' icon={faInstagram} ></FontAwesomeIcon>
                    <FontAwesomeIcon className='hover:text-hyper-cyan duration-500 cursor-pointer' icon={faGithub}  ></FontAwesomeIcon>
                    <Icon className='hover:text-hyper-cyan duration-500 cursor-pointer' icon="simple-icons:leetcode" />
                    <Icon className='hover:text-hyper-cyan duration-500 cursor-pointer' icon="cib:issuu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
