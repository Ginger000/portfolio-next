import React from 'react'
import axios from 'axios'

const project = ({id, info}) => {
    console.log("This is info", info)
  return (
    <div>
    <div className='mt-32 text-gray-100'>project {id}</div>
        
    </div>
  )
}

project.getInitialProps = async ({query}) => {
    const res = await axios.get(`https://test-strapi-for-portfolio.herokuapp.com/api/featured-projects/${query.id}`)
    const {data} = res.data;
    return{...query, info:data.attributes}
} 

export default project