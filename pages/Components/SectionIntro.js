import React from 'react'


const SectionIntro = ({content}) => {
  return (
    <div className='text-ho-pink flex mt-24' >
        <h3 className="text-ho-pink font-bold text-2xl">{content}</h3>
        <div className='border inline-block w-28 sm:w-96 m-4 h-0 border-ho-pink'></div>
    </div>
  )
}

export default SectionIntro