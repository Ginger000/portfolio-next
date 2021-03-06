import React from 'react'

const Button = (props) => {
  const {handleOnClick} = props
  
  return (
    handleOnClick ? 
    <button onClick={()=>handleOnClick()} className='bg-transparent border-0.5 border-ho-pink text-hyper-cyan font-light py-2 px-6 rounded hover:bg-hyper-cyan hover:text-back-blue hover:border-transparent duration-300 font-mono'>
        {props.children}
    </button> : 
    <button className='bg-transparent border-0.5 border-ho-pink text-hyper-cyan font-light py-2 px-6 rounded hover:bg-hyper-cyan hover:text-back-blue hover:border-transparent duration-300 font-mono'>
    {props.children}
</button>
  ) 
}

export default Button