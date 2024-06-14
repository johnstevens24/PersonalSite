import React from 'react'
import { useState, useEffect, useRef, scroll } from 'react'
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconX } from '@tabler/icons-react';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import "./HomePageStyles.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomePage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const popupRef = useRef(null)
    const [popupInfo, setPopupInfo] = useState(<h2>Loading...</h2>)

    const languages = [
        {name:"JavaScript", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]},
        {name:"Python", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]},
        {name:"Java", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"]},
        {name:"HTML5/CSS", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"]},
        {name:"SQL", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"]},
        {name:"Git", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"]},
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
            longInfo:"TellMe was my senior capstone project at the University of Utah. I was one of two front end developers on a team of four students who spent 6 months making a social media app where users could post short form videos asking for advice and recieve responses in a manner of their choosing. I was responsible for the front end of user creation, user login, the user profile page, user settings pages, the scrollable home feed, and the user followup pages. We used expo go during development to be able to be able to have a running demo of the app and see the impact of new code in real time.",
            images:[require("../../../assets/images/TellMeScreenshots/IMG_4305.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4306.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4310.PNG"), require("../../../assets/images/TellMeScreenshots/IMG_4311.PNG")],
            link:"https://github.com/johnstevens24/TellMe"
        },
        {
            title:"TILT",
            type:"Mobile App",
            stack:"React Native/SQLite",
            info:"TILT is an app I made as a pet project to get more experience with React Native. The app utilizes a phone's accelerometer to allow users to roll a marble around the screen while trying to not go off the designated path.",
            longInfo: "TILT is an app I made as a pet project to get more experience with React Native. The app utilizes a phone's accelerometer to allow users to roll a marble around the screen while trying to not go off the designated path. This gave me practice with animations as well as the opportunity to implement other features such as a SQlite database for storing users and their fastest time through each level. When a user completes a level, they are able to view their fastest time displayed on a leaderboard with all the other users (sorted by fastest time first).",
            images:[require("../../../assets/images/TiltScreenshots/IMG_4563.PNG"), require("../../../assets/images/TiltScreenshots/IMG_4564.PNG")],
            link:"https://github.com/johnstevens24/Tilt"
        },
        {
            title:"SLC Air Quality",
            type:"Data Visualization",
            stack:"Jupyter Notebook (python pandas library)",
            info:"For a data visualization course, my group and I collected air quality data from sensors mounted on UTA busses and trains to evaluate Salt Lake City's air quality situation. After cleaning, we ended up with 4.5 million data points to turn into charts, some of which you can see here.",
            longInfo:"For a data visualization course, my group and I collected air quality data from sensors mounted on UTA (Utah Transit Authority) busses and trains to evaluate Salt Lake City's air quality situation. Since we all live in Salt Lake, we're aware that the air here is sometimes the worst in the world. We live in giant bowl, which during the winter traps smog creating a blanket over the valley. However, we've always been told that its worse on the west side, an area of lower median household income, higher immigrant population, and slighlty lower elevation. We set out to see if we could either dispel or support that claim. We analyzed millions of rows of air quality data as well as median household income data by district on days documented to have had severe air quality (such as a day with particularly bad wildfire smoke present) as well as yearly, monthly, and seasonal averages. We came to the conclusion that yes, the air is worse on the west side, but only buy a small amount. Its really awful everywhere, but on our worst air quality days, the east side has it slightly better than the west.",
            images:[require("../../../assets/images/SLCAirQualityImages/Inversion.png"), require("../../../assets/images/SLCAirQualityImages/screenshot1.png"), require("../../../assets/images/SLCAirQualityImages/screenshot2.png"), require("../../../assets/images/SLCAirQualityImages/screenshot3.png"), require("../../../assets/images/SLCAirQualityImages/screenshot4.png"), require("../../../assets/images/SLCAirQualityImages/screenshot5.png"), require("../../../assets/images/SLCAirQualityImages/InversionMedianHHValue.png"), require("../../../assets/images/SLCAirQualityImages/WildfireSmokeImage.png")],
            link:"https://github.com/johnstevens24/MobileAirQuality"
        }
    ]

    const responsive = {
        0: { items: 1, itemsFit:'contain' },
        1500: { items: 2, itemsFit:'contain' },
        2200: { items: 3, itemsFit:'contain' },
        2900: { items: projects.length, itemsFit:'contain' } // This ensures all projects are shown at once on wider screens
    };

    const projectSlides = projects.map((project, index) => (
        <div key={index} className='projectSlide' onClick={()=>(openPopup(project.title))}>
            <div className='projectSlideInfo'>
                <h2>{project.title}</h2>
                <p>Type: {project.type}</p>
                <br/>
                <p>{project.info}</p>
                <div style={{flex:1}}/>
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
            </div>
            <div className='projectSlideImages'>
                <AliceCarousel autoPlay={true} disableButtonsControls={true} animationDuration={1000} infinite={true} autoPlayInterval={3000} disableDotsControls={true}>
                    {project.images.map((image, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <img src={image} style={{maxWidth:'100%', maxHeight:'300px', border:'1px solid lightgrey'}}/>
                        </div>
                        
                    ))}
                </AliceCarousel>
            </div>
        </div>
    ))

    //this is necessary for the mobile version because for some reason the CSS for the AliceCarousel doesn't work when I simply use width:'100%' (or any variation of something similar)
    useEffect(() => {
        const handleResize = () => {
            
            setWindowWidth(window.innerWidth)
        };
        console.log(windowWidth)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function openPopup(projectName) {
        let project = null;

        for(let i = 0; i < projects.length; i++){
            if(projects[i].title == projectName)
            {
                project = projects[i];
                console.log(project.title)
                break;
            }
        }
        
        setPopupInfo(
            <div style={{width:'100%', height:'100%', padding:'15px', display:'flex', flexDirection:'row', justifyContent:'flex-start', alignContent:'center'}}>
                <div className='projectSlideInfo' style={{height:'490px'}}>
                    <h2>{project.title}</h2>
                    <p>Type: {project.type}</p>
                    <p>Tech Stack: {project.stack}</p>
                    <div className='infoScroller' style={{flex:1, overflow:'scroll', overflowX:'hidden', marginTop:'20px', marginBottom:'20px'}}>
                        <p>{project.longInfo}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                <div className='projectSlideImages'>
                    <AliceCarousel autoPlay={false} disableDotsControls={true} animationDuration={500}>
                        {project.images.map((image, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <img src={image} style={{maxWidth:'100%', maxHeight:'300px', border:'1px solid lightgrey'}}/>
                            </div>
                            
                        ))}
                    </AliceCarousel>
            </div>
            </div>)
        
        if(popupRef != null)
            {
                popupRef.current.classList.remove("hideProjectPopup")   
            }

    }

    function closePopup() {
        if(popupRef != null)
        {
            popupRef.current.classList.add("hideProjectPopup")   
        }
    }


    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <div id="contentContainer">
                
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
                    <div className='profPicDiv'>
                        <img src={require('../../../assets/images/Me/John_700x700.png')} className="profPic"/>
                    </div>
                    <div className="bioDiv">
                        {bioStuff}
                    </div>
                </div>
                <hr></hr>
                {/* Languages container */}
                <div className='languagesContainer'>
                    <div className="languageInfo">
                        <h2>I'm most familiar with these languages</h2>
                        <p>I have used other languages and technologies, but these ones are where most of my experience lies.</p>
                    </div>
                    <div className='languageGrid'>
                        {languages.map((language, index) => (
                            <div key={index} className="languageItem">
                                <div style={{position:'relative', height:'50px', aspectRatio:1}}>
                                    {language.icon.length > 1 ? 
                                        language.icon.map((icon, index) => (
                                            <img key={index} src={icon} style={{height:'50px', aspectRatio:1, position:'absolute', top:0, left:(language.icon.length-(1+index))*25}}/>
                                        ))
                                    :
                                        <img src={language.icon} style={{height:'50px', aspectRatio:1}}/>
                                    }
                                </div>
                                <p>{language.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <hr></hr>
                {/* Projects container */}
                <div className='projectsContainer'>
                    <h2>Here are a few projects I'm proud of</h2>
                </div>

                <div className='mobileProjectDiv'>
                    {projects.map((project, index) => (
                        <div key={index} className='mobileProjectSlide' style={{width:`${windowWidth}px`}}>
                            <h2>{project.title}</h2>
                            <p>Type: {project.type}</p>
                            <p>Tech Stack: {project.type}</p>
                            <br/>
                            <p>{project.info}</p>
                            <br/>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <div className='mobileCarouselContainer'>
                                <AliceCarousel responsive={responsive} autoPlay={true} disableButtonsControls={true} animationDuration={1000} infinite={true} autoPlayInterval={5000} animationEasingFunction='ease' >
                                    {project.images.map((image, index) => (
                                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width:'100%'}}>
                                            <img src={image} style={{width:'90%'}}/>
                                        </div>
                                    ))}
                                </AliceCarousel>
                                
                            </div>
                    </div>
                ))}
            </div>

            </div>

            <div className='carouselDiv'>
                <AliceCarousel
                    //  mouseTracking
                    animationEasingFunction='linear'
                    autoPlay={true}
                    infinite={true}
                    animationDuration={20000}
                    responsive={responsive}
                    autoPlayInterval={50} // Set to 0 for continuous scrolling
                    disableButtonsControls={true} // Hide next/prev buttons
                    disableDotsControls={true} // Hide dots navigation
                    autoPlayStrategy='default'
                    items={projectSlides}
                    />
            </div>
            <div ref={popupRef} className='projectPopup hideProjectPopup'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', height:'50px', width:'100%'}}>
                    <IconX size="50" className='closeIcon' onClick={() => closePopup()}/>
                </div>
                {popupInfo}
            </div>
        </div>
    )
}

export default HomePage;