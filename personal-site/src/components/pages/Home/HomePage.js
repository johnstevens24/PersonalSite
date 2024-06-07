import React from 'react'
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';

import "./HomePageStyles.css"

const HomePage = () => {
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


    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <div style={{width:1100, maxWidth:1240, minWidth:940, height:'1000px'}}>
                
                <div className='contactDiv'>
                    <IconMail size="50" className='contactIcon'/>
                    <IconBrandLinkedin size="50" className='contactIcon'/>
                    <IconBrandGithub size="50" className='contactIcon'/>
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


                </div>

            </div>
        </div>
    )
}

export default HomePage;