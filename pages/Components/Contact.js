import React, { useEffect } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    ease: [0.6, 0.01, -0.05, 0],
                    duration: 0.6,
                },
            });
        } else {
            animation.start({
                opacity: 0,
                y: 100,
            });
        }
        // console.log("use effect hook, inView = ", inView)
    }, [inView]);
    const sendEmail = () => {
        window.location = 'mailto:linj2@illinois.edu';
    };
    return (
        <motion.div
            ref={ref}
            animate={animation}
            className="text-center mt-72 space-y-6"
        >
            <h1 className="mb-16 text-4xl font-bold text-ho-pink">
                Hire me or just say Hello
            </h1>
            <div>
                <Button handleOnClick={sendEmail}>
                    {' '}
                    Email: linj2@illinois.edu{' '}
                </Button>
            </div>
            <div>Phone: 217-904-0965</div>
            <div className="mt-6 flex space-x-3 text-2xl justify-center items-center text-gray-300">
                <a href="https://www.facebook.com/profile.php?id=100009390374545" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon
                        className="hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer"
                        icon={faFacebookSquare}
                    ></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com/ginger_linjiang/?hl=en" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon
                        className="hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer"
                        icon={faInstagram}
                    ></FontAwesomeIcon>
                </a>
                <a href="https://github.com/Ginger000" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon
                        className="hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer"
                        icon={faGithub}
                    ></FontAwesomeIcon>
                </a>
                <a href="https://leetcode.com/ginger23333/" target="_blank" rel="noreferrer noopener">
                    <Icon
                        className="hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer"
                        icon="simple-icons:leetcode"
                    />
                </a>
                <a href="https://issuu.com/ginger_linjiang/docs/lin_jiang_s_portfolio" target="_blank" rel="noreferrer noopener">
                    <Icon
                        className="hover:text-hyper-cyan text-gray-200 duration-500 cursor-pointer"
                        icon="cib:issuu"
                    />
                </a>
            </div>
        </motion.div>
    );
};

export default Contact;
