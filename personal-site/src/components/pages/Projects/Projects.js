import { Outlet, Link } from "react-router-dom";
import './ProjectsStyles.css'

const Projects = () => {

    let projects = [
        {name:"TILT", type:"Mobile App", techStack:"React Native", description:"something", githubLink:"https://github.com/johnstevens24/Tilt"},
        {name:"TellMe", type:"Mobile App", techStack:"React Native", description:"capstone project blah blah", githubLink:"https://github.com/johnstevens24/TellMe"},
        {name:"SLC Air Quality", type:"Data Visualization", techStack:"Python (pandas library)", description:"capstone project blah blah", githubLink:"https://github.com/johnstevens24/MobileAirQuality"},
        {name:"SCI Research", type:"Research Paper", techStack:"None", description:"investigation into...", githubLink:""}

    ]





    return(
        <>
        <div>
            {projects.map((project) => (
                <div className="projectDiv">
                    <h2 className={project.name}>{project.name}</h2>
                    <p><b>Type:</b> {project.type}</p>
                    <p><b>Tech Stack:</b> {project.techStack}</p>
                    <p>{project.description}</p>
                    <div style={{flex:1}}/>
                    <a href={project.githubLink}>GitHub Link</a>
                </div>
            ))}
        </div>
        </>
    )
}

export default Projects;