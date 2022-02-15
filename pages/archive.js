import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const archive = ({ featureProjects }) => {
    console.log(featureProjects);
    return (
        <div className="mt-20 w-4/5 xl:max-w-screen-lg mx-auto">
            <h1 className="text-gray-100 text-4xl font-bold mb-10">
                Here is the project archive
            </h1>

            <table className="hidden md:table table-auto text-gray-200 w-full divide-y divide-slate-600">
                <thead>
                    <tr className='text-left'>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Made at</th>
                        <th>Tech Stack</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {featureProjects.map((f) => (
                        <tr className='hover:bg-slate-800' key={f.attributes.title}>
                            <td className='text-hyper-cyan text-xl py-4'>2022</td>
                            <td className='font-bold text-xl' >{f.attributes.title}</td>
                            <td className=''>1961</td>
                            <td>React</td>
                            <td className='space-x-2'>
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
                    <tr>
                        <td>The Sliding Mr. Bones</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>

            <table className="md:hidden table-auto text-gray-200 w-full divide-y divide-slate-600">
                <thead>
                    <tr className='text-left'>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {featureProjects.map((f) => (
                        <tr className='hover:bg-slate-800' key={f.attributes.title}>
                            <td className='text-hyper-cyan text-md py-2'>2022</td>
                            <td className='font-bold text-md' >{f.attributes.title}</td>
                            <td className='space-x-2'>
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
                    <tr>
                        <td>The Sliding Mr. Bones</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

archive.getInitialProps = async () => {
    const res2 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/featured-projects?populate=*'
    );
    const projectData = res2.data.data;
    return { featureProjects: projectData };
};
export default archive;
