import Button from "./Components/Button"
import Hero from "./Components/Hero"
import axios from "axios"
import FeaturedProject from "./Components/FeaturedProject"
import SectionIntro from "./Components/SectionIntro"

export default function Home({hero, featureProjects}) {
  return (
    <div className=' text-white w-full '>

      {/* <h1>Ginger</h1> */}
      <Hero hero={hero}/>
      
      <section className="w-4/5 xl:max-w-screen-lg mx-auto relative"  id="work">
      <SectionIntro />
        {   
          featureProjects && featureProjects.map((project,idx)=>{
            return <FeaturedProject key={idx} id={idx} project={project} />
          })
        }
      </section>
      
      
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get("http://localhost:1337/api/heroes/1")
  const res2 = await axios.get("http://localhost:1337/api/projects?populate=cover")
  const {data} = res.data;
  const projectData = res2.data.data
  // const temp = projectData[0].attributes.cover.data.attributes.formats.large.url
  console.log(data)
  console.log("helloooooo")
  // console.log(projectData)
  // console.log(temp)
  // console.log(`localhost:1337${temp}`)
  return{hero:data, featureProjects:projectData}
  // return{featureProjects:projectData}

}
