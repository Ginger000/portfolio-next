import React from 'react';
import Button from './Button';

const Hero = ({ hero }) => {
    const { content1, name, content2, content3, content4 } = hero.attributes;
    return (
        <div className='w-4/5 mx-auto pt-40 xl:pt-60 space-y-6 h-full md:h-screen'>
            {/* <div className='space-y-4'> */}
                <p className="text-hyper-cyan font-light">{content1}</p>
                <h1 className="text-3xl sm:text-5xl font-bold text-ho-pink">{name}</h1>
                <h1 className="text-3xl sm:text-5xl font-semibold text-ho-pink opacity-50 relative -z-10">
                    {content2}
                </h1>
                <p className="font-light text-ho-pink w-full md:w-128">{content3}</p>
                <p className="font-light text-hyper-cyan">
                I’m graduating at May, 2022, 
                <br className='' />
                and currently finding a Front-end developer job or internship.
                </p>
            {/* </div> */}
            <div className='pt-6 flex sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <Button>
                Check Out My Work
              </Button>
              <Button>
                Hire Me
              </Button>
            </div>
            
        </div>
    );
};

export default Hero;
