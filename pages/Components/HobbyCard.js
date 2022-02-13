import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const HobbyCard = ({hobby}) => {
  const {name_1, name_2, name_3, quote} = hobby.attributes
  return (
    <div className='group px-6 py-6  rounded-md h-72 flex flex-col justify-between md:hover:-translate-y-4 hover:drop-shadow-xl duration-500
        border-2 border-hyper-cyan'>
        <div className='text-3xl text-pale-blue font-bold group-hover:text-hyper-cyan'>
            <h3>{name_1}</h3>
            <h3>{name_2}</h3>
            <h3>{name_3}</h3>
        </div>
        <p className='font-light'>
            {quote}
        </p>
    </div>
  )
}
