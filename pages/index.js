import React, { useState, useEffect } from 'react';
import Button from './Components/Button';
import Hero from './Components/Hero';
import axios from 'axios';
import FeaturedProject from './Components/FeaturedProject';
import SectionIntro from './Components/SectionIntro';
import ProjectCard from './Components/ProjectCard';
import ReactMarkdown from 'react-markdown';
import About from './Components/About';
import HobbyCard from './Components/HobbyCard';
import Contact from './Components/Contact';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Loader from './Components/loader';

export default function Home({
    hero,
    featureProjects,
    profile,
    hobbies,
    selected,
}) {
    console.log('*****************IN INDEX COMPONENT******************');

    const [isSix, setIsSix] = useState(true);
    const toggler = () => setIsSix(!isSix);
    const slice = selected.sort((a, b) => a.id - b.id).slice(0, 6);

    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <div className=" text-white w-full ">
                    {/* <h1>Ginger</h1> */}
                    <Hero hero={hero} />

                    <section
                        className="w-4/5 xl:max-w-screen-lg mx-auto pt-20"
                        id="work"
                    >
                        <SectionIntro content="What I've built" />
                        {featureProjects &&
                            featureProjects
                                .sort((a, b) => a.id - b.id)
                                .map((project, idx) => {
                                    return (
                                        <FeaturedProject
                                            key={idx}
                                            id={idx}
                                            project={project}
                                        />
                                    );
                                })}
                        <h2 className="text-center text-ho-pink text-3xl opacity-50 font-bold">
                            Other Relevant Projects
                        </h2>
                        <Link href="/archive" passHref>
                            <h6 className="text-center font-semibold hover:text-hyper-cyan duration-500 hover:cursor-pointer mt-6 md:mb-16">
                                view the archive
                            </h6>
                        </Link>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {isSix
                                ? slice.map((s) => {
                                      return (
                                          <ProjectCard
                                              key={uuidv4()}
                                              selected={s}
                                          />
                                      );
                                  })
                                : selected.map((s) => {
                                      return (
                                          <ProjectCard
                                              key={uuidv4()}
                                              selected={s}
                                          />
                                      );
                                  })}
                        </div>
                        <div className="text-center my-8">
                            <Button handleOnClick={toggler}>
                                {isSix ? 'Show More' : 'Show Less'}
                            </Button>
                        </div>
                    </section>

                    <section
                        className="w-4/5 xl:max-w-screen-lg mx-auto pt-10"
                        id="about"
                    >
                        <SectionIntro content="Who I am" />
                        <About profile={profile} />
                    </section>

                    <section
                        className="w-4/5 xl:max-w-screen-lg mx-auto"
                        id="hobby"
                    >
                        <SectionIntro content="What I like" />
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                            {hobbies.map((hobby, idx) => {
                                return <HobbyCard key={idx} hobby={hobby} />;
                            })}
                        </div>
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            )}
        </>
    );
}

Home.getInitialProps = async () => {
    const res = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/heroes/1'
    );
    const res2 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/featured-projects?populate=*'
    );
    const res3 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/profiles?populate=*'
    );
    const res4 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/hobbies'
    );
    const res5 = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/selected-projects'
    );

    const { data } = res.data;
    const projectData = res2.data.data;
    const profileData = res3.data.data;
    const hobbyData = res4.data.data;
    const selectedData = res5.data.data;
    // const temp = projectData[0].attributes.cover.data.attributes.formats.large.url
    // console.log(data)
    // console.log("helloooooo")
    // console.log(profileData[0].attributes)
    // console.log(hobbyData)
    // console.log(temp)
    // console.log(`localhost:1337${temp}`)
    // console.log(selectedData)
    return {
        hero: data,
        featureProjects: projectData,
        profile: profileData,
        hobbies: hobbyData,
        selected: selectedData,
    };
    // return{featureProjects:projectData}
};
