import React from 'react'
import { useState, useEffect } from 'react'
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import 'react-alice-carousel/lib/alice-carousel.css';

import "./HomePageStyles.css"
import AliceCarousel from 'react-alice-carousel';

const HomePage = () => {
    const [autoPlay, setAutoPlay] = useState(true);
    const xLight = "#f2f2f2"
    const languages = [
        {name:"JavaScript", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]},
        {name:"Python", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]},
        {name:"Java", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"]},
        {name:"HTML5/CSS", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"]},
        {name:"SQL", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"]},
        {name:"sqlite", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"]},
        {name:"C/C++/C#", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"]},
        {name:"JSON", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"]},
        {name:"React", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"]},
        // {name:"Github", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"]}, 
        // {name:"Gitlab", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"]}, 
        // {name:"Django", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg"]},
        ]
    
    const bioStuff = (
        <>
            <h1>Hi, I'm John Stevens</h1>
            <p> Hi, my name is John. I recently graduated from the University of Utah with a B.S. in Software Development. My coursework covered everything from CPU architecture 
                to UI/UX, databases to entrepreneurship, and website and mobile app development to CUDA programming for large datasets, among many other topics. 
                Recently, I have taken an interest in the React library and have developed a few websites using it, including the one you are currently viewing. 
            </p>
        </>
    )

    const projects = [
        {
            title:"TellMe",
            type:"Mobile App",
            stack:"React Native/AWS",
            info:"TellMe was my senior capstone project at the University of Utah. I was one of two front end developers on a team of four students who spent 6 months bringing our idea to life.",
            images:[require("../../../assets/images/TellMeScreenshots/IMG_4305.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4306.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4310.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4311.PNG")],
            link:"https://github.com/johnstevens24/TellMe"
        },
        {
            title:"TILT",
            type:"Mobile App",
            stack:"React Native/sqLite",
            info:"TILT is an app I made as a pet project to get more experience with React Native. The app utilizes a phone's accelerometer to allow users to roll a marble around the screen while trying to not go off the designated path.",
            images:[require("../../../assets/images/TiltScreenshots/IMG_4563.PNG"), require("../../../assets/images/TiltScreenshots/IMG_4564.PNG")],
            link:"https://github.com/johnstevens24/Tilt"
        },
        {
            title:"SLC Air Quality",
            type:"Data Visualization",
            stack:"Jupyter Notebook (python pandas library)",
            info:"something about TellMe",
            images:[require("../../../assets/images/SLCAirQualityImages/Inversion.png"), require("../../../assets/images/SLCAirQualityImages/InversionMedianHHValue.png"), require("../../../assets/images/SLCAirQualityImages/WildfireSmokeImage.png")],
            link:"https://github.com/johnstevens24/MobileAirQuality"
        }
    ]

    const responsive = {
        0: { items: 1 },
        1500: { items: 2, itemsFit:'contain' },
        2200: { items: 3, itemsFit:'contain' },
        2900: { items: projects.length, itemsFit:'contain' } // This ensures all projects are shown at once on wider screens
    };

    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <div style={{width:1100, maxWidth:1240, minWidth:940, position:'relative'}}>
                
                <div className='contactDiv'>
                    <div className='iconDiv'  onClick={() => {window.open("mailto:johnstevens2424@gmail.com");}}>
                        <IconMail size="50" className='contactIcon'/>
                        <div className='hoverText'>Email</div>
                    </div>
                    <div className='iconDiv'  onClick={() => {window.open("https://www.linkedin.com/in/john-stevens-064022253/");}}>
                        <IconBrandLinkedin size="50" className='contactIcon'/>
                        <div className='hoverText'>LinkedIn</div>
                    </div>
                    <div className='iconDiv'  onClick={() => {window.open("https://github.com/johnstevens24?tab=repositories")}}>
                        <IconBrandGithub size="50" className='contactIcon'/>
                        <div className='hoverText'>GitHub</div>
                    </div>
                </div>
                
                
                
                
                {/* Bio container */}
                <div className='bioContainer'>
                    <div style={{width:'20%', aspectRatio:1, marginRight:'20px'}}>
                        <img src={require('../../../assets/images/hand.png')} className="hand"/>
                    </div>
                    <div style={{width:'60%'}}>
                        {bioStuff}
                    </div>
                </div>
                <hr></hr>
                {/* Languages container */}
                <div className='languagesContainer'>
                    <div style={{width:'40%'}}>
                        <h2>I'm most familiar with these languages</h2>
                        <p>I have used other languages and technologies, but these ones are where most of my experience lies.</p>
                    </div>
                    <div className='languageGrid'>
                        {languages.map((language, index) => (
                            <div key={index} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:'70px', width:'100%', backgroundColor:xLight, borderRadius:10, padding:'10px', paddingRight:'15%', paddingLeft:'15%'}}>
                                <div style={{position:'relative', height:'50px', aspectRatio:1}}>
                                    {language.icon.length > 1 ? 
                                        language.icon.map((icon, index) => (
                                            
                                            <img src={icon} style={{height:'50px', aspectRatio:1, position:'absolute', top:0, left:(language.icon.length-(1+index))*25}}/>
                                            
                                        ))
                                    :
                                        <img src={language.icon} style={{height:'50px', aspectRatio:1}}/>
                                    }
                                </div>
                                <text>{language.name}</text>
                            </div>
                        ))}
                    </div>

                </div>
                <hr></hr>
                {/* Projects container */}
                <div className='projectsContainer'>
                    <h2>Here are a few projects I'm proud of</h2>
                </div>

            </div>
            <div className='carouselDiv'>
                {/* <Carousel 
                    showArrows={true}
                    showStatus={true}
                    showThumbs={true}
                    showIndicators={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000} */}
>
                    {/* {images.map((image, index) => (
                    <img key={index} className="slide" alt={`slide-${index}`} src={image}/>
                    ))} */}
                    {/* <div className='projectSlide'></div>
                    <div className='projectSlide'></div>
                    <div className='projectSlide'></div>
                    <div className='projectSlide'></div>
                    <div className='projectSlide'></div>
                </Carousel> */}
                <AliceCarousel
                    animationEasingFunction='linear'
                    autoPlay={true}
                    infinite={true}
                    animationDuration={18000}
                    responsive={responsive}
                    autoPlayInterval={50} // Set to 0 for continuous scrolling
                    disableButtonsControls={true} // Hide next/prev buttons
                    disableDotsControls={true} // Hide dots navigation
                    autoPlayStrategy="all" // Ensure all items are considered in autoplay
                    onMouseEnter={() => console.log('entering')} 
                    onMouseLeave={() => setAutoPlay(true)}>
                
                    {
                        projects.map((project, index) => (
                            <div key={index} className='projectSlide'>
                                <div className='projectSlideInfo'>
                                    <h2>{project.title}</h2>
                                    <p>Type: {project.type}</p>
                                    <p>Tech Stack: {project.type}</p>
                                    <br/>
                                    <p>{project.info}</p>
                                    <div style={{flex:1}}/>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                </div>
                                <div className='projectSlideImages'>
                                    <AliceCarousel autoPlay={true} disableButtonsControls={true} animationDuration={1000} infinite={true} autoPlayInterval={5000}>
                                        {project.images.map((image, index) => (
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                <img src={image} style={{maxWidth:'100%', maxHeight:'300px', }}/>
                                            </div>
                                            
                                        ))}
                                    </AliceCarousel>
                                </div>
                            </div>
                        ))
                    }
                </AliceCarousel>
            </div>
        </div>
    )
}

export default HomePage;