import React from 'react';
import Button from './Button';
import ReactMarkdown from 'react-markdown'

const Hero = ({ hero }) => {
    if(hero) {

    
    const { content1, name, content2, content3, content4 } = hero.attributes;
    return (
        <div className='w-4/5 mx-auto pt-40 xl:pt-60 space-y-2 sm:space-y-6 h-full md:h-screen'>     
            
          
                 <ReactMarkdown className="text-hyper-cyan font-light 2xl:text-lg">{content1}</ReactMarkdown> 

                
                <h1 className="text-3xl sm:text-5xl 2xl:text-7xl font-bold text-ho-pink">{name}</h1>
                <h1 className="text-3xl sm:text-5xl 2xl:text-7xl font-semibold text-ho-pink opacity-50 relative -z-10">
                    {content2}
                </h1>
                <p className=" w-full md:w-128 2xl:text-lg text-gray-100 font-normal">{content3}</p>
                <p className="text-hyper-cyan 2xl:text-lg">
                I’m graduating at May, 2022, 
                <br className='' />
                and currently finding a Front-end developer job or internship.
                </p>
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
  } else {
    return null
  }

};

export default Hero;
