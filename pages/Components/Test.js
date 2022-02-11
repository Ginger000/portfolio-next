import React from 'react'
// import Image from 'next/image' 
// const reImg = require ('./Assets/images/research.png')

const Test = () => {
  return (
    <div className="w-4/5 xl:max-w-screen-lg mx-auto">
      <div className="grid grid-cols-10 ">
        <div className="hidden md:block row-span-full col-start-1 col-span-6 self-center">
            <img className='object-cover rounded-lg' src="http://localhost:1337/uploads/large_waterlab_e464333ed4.png" alt=""/>
        </div>
        <div className="md:hidden relative row-span-full col-start-1 col-span-10">
            <img className="opacity-25 absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="http://localhost:1337/uploads/large_waterlab_e464333ed4.png" alt=""/>
        </div>
        <div className="z-10 row-span-full col-start-1 col-span-10 md:col-span-6 md:col-end-11 self-center p-4 text-white bg-gradient-to-tr to-red-200/25 md:to-red-200 via-pink-500/25 md:via-pink-500 from-blue-500/25 md:from-blue-500 rounded-lg">
            <div className=' flex flex-col md:items-end space-y-2 '>
              <h6 className='text-cyan-300'>Featured Project</h6>
              <h2 className='text-gray-200'>WaterLab Official Website</h2>
              <div className='px-6 py-6 bg-blue-900 rounded-md'>
                <p className='text-gray-100'>An official website of an stormwater-science and nature-art research lab in the University of Illinois at Urbana-Champaign. I build this website from 0 to 1, from design to development.  </p>
              </div>
              <ul className='text-gray-500 font-medium text-sm space-x-2 flex flex-wrap '>
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
  )
}

export default Test