import React from 'react';

const FeaturedProject = ({ project, id }) => {
    const { title, description, techStack } = project.attributes;
    const { url } = project.attributes.cover.data.attributes.formats.large;
    return (
        <div class=" sm:w-4/5 xl:max-w-screen-lg mx-auto mb-24 mt-12">
            <div class="grid grid-cols-10 ">
                <div class="md:hidden relative row-span-full col-start-1 col-span-10 shadow-xl">
                    <img
                        class="opacity-10 absolute inset-0 w-full h-full object-cover object-center rounded-sm"
                        src={`http://localhost:1337${url}`}
                        alt=""
                    />
                </div>


                <div class={`hidden md:block row-span-full ${id %2===0 ? 'col-start-1': 'col-end-11'}  col-span-6 self-center opacity-40 hover:opacity-100 hover:cursor-pointer duration-500 shadow-lg`}>
                    <img
                        class="object-cover rounded-lg"
                        src={`http://localhost:1337${url}`}
                        alt=""
                    />
                </div>

                <div class={`z-10 row-span-full col-start-1 col-span-10 md:col-span-6 ${id%2===0 ? 'md:col-end-11' : 'md:col-start-1'}  self-center p-4 text-white rounded-lg`}>
                    <div className=" flex flex-col md:items-start space-y-2 ">
                        <h6 className="text-hyper-cyan">Featured Project</h6>
                        <h2 className="text-hyper-cyan text-2xl font-bold">
                            {title}
                        </h2>
                        <div className="md:px-6 py-6 md:bg-card-back/75 rounded-md shadow-md">
                            <p className={`text-gray-100 ${id%2===0 ? 'md:text-right':'md:text-left'} `}>
                                {description}
                            </p>
                        </div>
                        <ul className="text-hyper-cyan font-medium text-sm space-x-2 flex flex-wrap ">
                            <li>Figma</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>Leaflet.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
