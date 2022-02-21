import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import {Link as ScrollLink} from 'react-scroll/modules/components/Link';
// import {Link as Link2} from 'react-scroll/modules/components/Link';
// import Pdf from './Assets/Resume_Ginger_Lin_Jiang.pdf'
// import Pdf from '/pdf.pdf'

const Navbar = () => {
    let links = [
        { name: 'Work', link: '#work', anchor: 'work' },
        { name: 'About', link: '#about', anchor: 'about' },
        { name: 'Contact', link: '#contact', anchor: 'contact' },
        {
            name: 'Resume',
            link: '/Resume_Ginger_Lin_Jiang.pdf',
            anchor: 'work',
        },
    ];

    let [open, setOpen] = useState(false);

    const openResumeTab = (th) => {
        window.open(th.name, '_blank');
    };

    return (
        <motion.div
            className="w-full fixed top-0 left-0 z-9999"
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.6,
            }}
        >
            <div
                className={`md:flex items-center justify-between   ${
                    open
                        ? 'bg-lighter-back transition-all duration-500 ease-in'
                        : 'bg-back-blue transition-all duration-500 ease-in'
                }  md:bg-back-blue py-4 md:px-10 px-7`}
            >
                <div
                    className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
                >
                    {/* link is supposed to be outside of span. Span accept the onClick */}
                    <Link href="/" passHref>
                        <span className="text-2xl text-ho-pink mr-1 pt-2 hover:text-hyper-cyan duration-500">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                            ></FontAwesomeIcon>
                        </span>
                    </Link>
                    
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden text-ho-pink"
                >
                    <FontAwesomeIcon
                        icon={open ? faXmark : faBars}
                    ></FontAwesomeIcon>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-lighter-back md:bg-back-blue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-16 ' : 'top-[-490px]'
                    }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 text-lg md:my-0 my-7 font-light"
                        >
                            <a
                                href={link.link}
                                className="text-ho-pink hover:text-hyper-cyan duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;
