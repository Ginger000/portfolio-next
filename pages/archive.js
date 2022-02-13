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

            <table className="table-auto text-gray-200 w-full divide-y">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Made at</th>
                        <th>Tech Stack</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody className='divide-y'>
                {featureProjects.map((f) => (
                    <tr key={f.attributes.title}>
                    <td>2022</td>
                    <td>{f.attributes.title}</td>
                    <td>1961</td>
                    <td>React</td>
                    <td>
                        <FontAwesomeIcon className='text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500' icon={faGithub}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-xl hover:text-hyper-cyan hover:cursor-pointer duration-500' icon={faArrowUpRightFromSquare} ></FontAwesomeIcon>

                    </td>
                </tr>
                // <h5 className="text-gray-200" key={f.attributes.title}>
                //     <Link href={`/project?id=${f.id}`}>
                //         {f.attributes.title}
                //     </Link>
                // </h5>
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
        'http://localhost:1337/api/projects?populate=cover'
    );
    const projectData = res2.data.data;
    return { featureProjects: projectData };
};
export default archive;
