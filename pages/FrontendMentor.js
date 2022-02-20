import React, {useState} from 'react';
import MentorCard from './Components/MentorCard';
import axios from 'axios';
import Loader from './Components/Loader';

const FrontendMentor = ({ mentorProjectData }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
        {loading ? (<Loader setLoading={setLoading} />) :
        (
            <div className="mt-24 md:mt-48 w-4/5 xl:max-w-screen-lg mx-auto">
            <div className="grid md:grid-cols-2 md:gap-10 mb-6 md:mb-10">
                <div className='flex justify-end'>
                <p className='lg:w-4/5 text-gray-50'>
                    Here are the projects that I practiced with other front-end
                    enthusiasts. I join them in Douban, a Chinese reddit-like
                    forum. We have 5 members including employees of big Tech and
                    students on-campus. The rule is that, the leader pick one
                    project from Frontend Mentor, and every member code the
                    project by herself, and we have peer-reviews to each other.
                    <br /> <br /> I appreciate this group where I got friendship and
                    opportunities to exercise react and typescript!
                </p>
                </div>
                
            </div>
            <div className="space-y-16">
                {mentorProjectData.map((m, idx) => {
                    return <MentorCard key={idx} singleProject={m} />;
                })}
            </div>
        </div>

        )}
        </>
    );
};

FrontendMentor.getInitialProps = async () => {
    const res = await axios.get(
        'https://test-strapi-for-portfolio.herokuapp.com/api/mentor-projects?populate=*'
    );
    const { data } = res.data;
    return { mentorProjectData: data };
};

export default FrontendMentor;
