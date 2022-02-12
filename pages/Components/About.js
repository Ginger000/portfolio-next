import React from 'react'
import ReactMarkdown from 'react-markdown'

const About = ({profile}) => {
    const {content_1, content_2, avatar_1, avatar_2} = profile[0].attributes
    const avatar_1_url = avatar_1.data.attributes.formats.medium.url
    const avatar_1_alt = avatar_1.data.attributes.alternativeText
    const avatar_2_url = avatar_2.data.attributes.formats.thumbnail.url
    const avatar_2_alt = avatar_2.data.attributes.alternativeText
  return (
    <div className='grid grid-cols-12'>
        {console.log(profile[0].attributes)}
        <div className='col-span-7'>
            <div>
                <ReactMarkdown>
                    {content_1}
                </ReactMarkdown>
            </div>
            <div>
                <ReactMarkdown>
                    {content_2}
                </ReactMarkdown>
            </div>
            
        </div>
        <div className='col-span-5' >
            <img src={`http://localhost:1337${avatar_1_url}`} alt={avatar_1_alt} />
            <img src={`http://localhost:1337${avatar_2_url}`} alt={avatar_2_alt} />
        </div>
    </div>
  )
}

export default About