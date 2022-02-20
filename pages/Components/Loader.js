import React, {useEffect} from 'react'
// import styles from './Loader.module.css'
const Loader = ({setLoading}) => {
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <div className='mt-20'>
        <div className='text-5xl text-gray-50 font-clip'>
            LOADING
            <span className='dot1'>.</span>
            <span className='dot2'>.</span>
            <span className='dot3'>.</span>
        </div>
        <div className='loader text-5xl text-gray-50 font-neoncity'>
            LOADING
        </div>
    </div>
  )
}

export default Loader