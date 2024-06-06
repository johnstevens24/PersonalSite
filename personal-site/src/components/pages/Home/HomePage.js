import React from 'react'

import "./HomePageStyles.css"

const HomePage = () => {

    const languages = [
        {name:"JavaScript", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"]},
        {name:"Python", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]},
        {name:"Java", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"]},
        {name:"HTML5/CSS", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"]},
        {name:"SQL", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"]},
        {name:"sqlite", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"]},
        {name:"C/C++/C#", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"]},
        {name:"JSON", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"]},
        {name:"XML", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"]},
        {name:"React", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"]},
        {name:"Github", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"]}, 
        {name:"Gitlab", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"]}, 
        {name:"Django", icon:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg"]},
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
                    <div style={{width:'40%', marginRight:'10%'}}>
                        <h2>Tech stack I'm familiar with</h2>
                        <p>Languages and libraries that I've used for different projects and have experience with.</p>
                    </div>
                    <div style={{width:'50%'}}>
                        {languages.map(() => (
                            <text>hi</text>
                        ))}
                    </div>

                </div>

                {/* Projects container */}
                <div>


                </div>

            </div>
        </div>
    )
}

export default HomePage;