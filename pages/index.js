import Button from "./Components/Button"
import Hero from "./Components/Hero"
import axios from "axios"
import FeaturedProject from "./Components/FeaturedProject"
import SectionIntro from "./Components/SectionIntro"
import ProjectCard from "./Components/ProjectCard"
import ReactMarkdown from 'react-markdown'
import About from "./Components/About"
import { HobbyCard } from "./Components/HobbyCard"
import Contact from "./Components/Contact"


export default function Home({hero, featureProjects, profile,hobbies}) {
  const temp = [1,2,3,4,5,6]
  const temp2 = [1,2,3]
  return (
    <div className=' text-white w-full '>
      {/* <h1>Ginger</h1> */}
      <Hero hero={hero}/>
      
      <section className="w-4/5 xl:max-w-screen-lg mx-auto"  id="work">
      <SectionIntro content="What I've built" />
        {   
          featureProjects && featureProjects.map((project,idx)=>{
            return <FeaturedProject key={idx} id={idx} project={project} />
          })
        }
        <h2 className="text-center text-ho-pink text-3xl opacity-50 font-bold">Other Relevant Projects</h2>
        <h6 className="text-center hover:text-hyper-cyan duration-500 hover:cursor-pointer mt-6 md:mb-16">view the archive</h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            temp.map(t=>{
              return <ProjectCard key={t} />
            })
          }
        </div>
        <div className="text-center my-8">
          <Button>Show More</Button>
        </div> 
      </section>

      <section className="w-4/5 xl:max-w-screen-lg mx-auto" id="about">
        <SectionIntro content="Who I am" />
        <About profile={profile}/>
      </section>

      <section className="w-4/5 xl:max-w-screen-lg mx-auto" id="hobby">
        <SectionIntro content="What I like" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {hobbies.map((hobby, idx) =>{
              console.log(hobby)
              return <HobbyCard key={idx} hobby={hobby}/>
            })}
          </div>
      </section>

      <section id="contact">
            <Contact/>
      </section>

      
  
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get("http://localhost:1337/api/heroes/1")
  const res2 = await axios.get("http://localhost:1337/api/projects?populate=cover")
  const res3 = await axios.get("http://localhost:1337/api/profiles?populate=*")
  const res4 = await axios.get("http://localhost:1337/api/hobbies")
  const {data} = res.data;
  const projectData = res2.data.data
  const profileData = res3.data.data
  const hobbyData = res4.data.data
  // const temp = projectData[0].attributes.cover.data.attributes.formats.large.url
  // console.log(data)
  // console.log("helloooooo")
  // console.log(profileData[0].attributes)
  console.log(hobbyData)
  // console.log(temp)
  // console.log(`localhost:1337${temp}`)
  return{hero:data, featureProjects:projectData, profile:profileData, hobbies:hobbyData}
  // return{featureProjects:projectData}

}
