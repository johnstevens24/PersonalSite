import {React, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjectsStyles.css'
import ProjectCarousel from './ProjectCarousel.js'

const Projects = () => {

    const projects = [
        {name:"TILT", 
        type:"Mobile App", 
        techStack:"React Native", 
        description:"A pet project to get more experience with React Native development. Its a game where users tilt their phone to guide a rolling marble across a series of rectangular platforms to a end point. It utilizes the accelerometer sensor for movement and a sqlite database for storing player scores and profiles.", 
        githubLink:"https://github.com/johnstevens24/Tilt"},
        {name:"TellMe", 
        type:"Mobile App", 
        techStack:"React Native", 
        description:"TellMe was my undergrad senior capstone project at the University of Utah. Myself and three peers created a social media app where users can post short for videos asking for advice and get feedback in a variety of ways. During the development cycle we had 4, 1 month long sprints with specific tasks to accomplish weekly that we kept track of through gitlab. I was one of the two designated front end developers on this project, although we all ended up doing full stack development to some degree. ", 
        githubLink:"https://github.com/johnstevens24/TellMe"},
        {name:"SLC Air Quality", 
        type:"Data Visualization", 
        techStack:"Python (pandas library)",
        description:"For a data visualization course project, I was in a group of three students who decided to examine Salt Lake City's air quality. Having lived here, we knew that it was bad, but we'd also always heard that it was worse on the east side of the valley. We discovered that UTA (Utah Transit Authority) equipped some of their trains and buses with equipment that moniters and logs air quality every two seconds. After cleaning the data and reducing it to every **** minutes, we were left with 4.5 million data points to chart. We made a number of visualizations using the pandas library in python, and created a jupyter lab notebook containing our charts and graphs, as well as our conclusions. TLDR, the air sucks everywhere in Salt Lake.", 
        githubLink:"https://github.com/johnstevens24/MobileAirQuality"},
        {name:"SCI Research", 
        type:"Research Paper", 
        techStack:"None", 
        description:"For a class on ubiquitous computer and accessibility, I conducted a small study and wrote a research paper on the best way for people who have suffered from spinal cord injuries to track their food intake.", 
        githubLink:""}

    ]



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('show');
                }
            });
        });

        const imageDivs = document.querySelectorAll('.projectDiv');
        imageDivs.forEach((element) => observer.observe(element));

        // Cleanup function to unobserve elements if the component unmounts
        return () => {
            imageDivs.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240}}>
            
                {projects.map((project, index) => (
                    <div key={index} className="projectDiv">
                        <div className="infoDiv">
                            <h2 className={project.name}>{project.name}</h2>
                            <p><b>Type:</b> {project.type}</p>
                            <p><b>Tech Stack:</b> {project.techStack}</p>
                            <p>{project.description}</p>
                            <a href={project.githubLink} target='_blank'>GitHub Link</a>
                        </div>
                        <div style={{width:'4%'}}/>
                        <div className="imageDiv">
                            <ProjectCarousel project={project} />
                        </div>
                    </div>
                
                ))}
            </div>


        </div>
        </>
    )
}

export default Projects;