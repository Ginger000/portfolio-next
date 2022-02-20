import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from './Components/Loader';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const archive = ({ features, selected }) => {
    const [loading, setLoading] = useState(true);
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
    return (
        <>
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <motion.div ref={ref} animate={animation} className="mt-20 w-4/5 xl:max-w-screen-lg mx-auto">
                    <h1 className="text-gray-100 text-4xl font-bold mb-10">
                        Here is the project archive
                    </h1>

                    <table className="hidden md:table table-auto text-gray-200 w-full divide-y divide-slate-600">
                        <thead>
                            <tr className="text-left">
                                <th>Year</th>
                                <th>Title</th>
                                <th>Made at</th>
                                <th>Tech Stack</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {features.map((f) => (
                                <tr
                                    className="hover:bg-slate-800"
                                    key={f.attributes.title}
                                >
                                    <td className="text-hyper-cyan text-xl py-4">
                                        2022
                                    </td>
                                    <td className="font-bold text-xl">
                                        {f.attributes.title}
                                    </td>
                                    <td className="">1961</td>
                                    <td>React</td>
                                    <td className="space-x-2">
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faGithub}
                                        ></FontAwesomeIcon>
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faArrowUpRightFromSquare}
                                        ></FontAwesomeIcon>
                                    </td>
                                </tr>
                            ))}
                            {selected.map((f) => (
                                <tr
                                    className="hover:bg-slate-800"
                                    key={f.attributes.title}
                                >
                                    <td className="text-hyper-cyan text-xl py-4">
                                        {f.attributes.year}
                                    </td>
                                    <td className="font-bold text-xl">
                                        {f.attributes.title}
                                    </td>
                                    <td className="">{f.attributes.madeAt}</td>
                                    <td>React</td>
                                    <td className="space-x-2">
                                        {f.attributes.githubLink ? (
                                            <a href={f.attributes.githubLink}>
                                                <FontAwesomeIcon
                                                    className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                                    icon={faGithub}
                                                ></FontAwesomeIcon>
                                            </a>
                                        ) : (
                                            ''
                                        )}

                                        {f.attributes.deployLink ? (
                                            <a href={f.attributes.deployLink}>
                                                <FontAwesomeIcon
                                                    className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                                    icon={
                                                        faArrowUpRightFromSquare
                                                    }
                                                ></FontAwesomeIcon>
                                            </a>
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="md:hidden table-auto text-gray-200 w-full divide-y divide-slate-600">
                        <thead>
                            <tr className="text-left">
                                <th>Year</th>
                                <th>Title</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {features.map((f) => (
                                <tr
                                    className="hover:bg-slate-800"
                                    key={f.attributes.title}
                                >
                                    <td className="text-hyper-cyan text-md py-2">
                                        2022
                                    </td>
                                    <td className="font-bold text-md">
                                        {f.attributes.title}
                                    </td>
                                    <td className="space-x-2">
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faGithub}
                                        ></FontAwesomeIcon>
                                        <FontAwesomeIcon
                                            className="text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500"
                                            icon={faArrowUpRightFromSquare}
                                        ></FontAwesomeIcon>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            )}
        </>
    );
};

archive.getInitialProps = async () => {
    const res2 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/featured-projects?populate=*'
    );
    const res5 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/selected-projects'
    );

    // console.log("This is retrive", res2)
    const projectData = res2.data.data;
    const selectedData = res5.data.data;

    return { features: projectData, selected: selectedData };
};
export default archive;
