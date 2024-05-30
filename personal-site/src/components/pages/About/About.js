import React, { useRef, useState, useEffect} from "react"
import './AboutStyles.css'


const About = () => {
    const elementRef = useRef(null)
    const [titleOffsetInitial, setTitleOffsetInitial] = useState(20)
    const [titleOffset, setTitleOffset] = useState(titleOffsetInitial)
    const [rectPercentVisible, setRectPercentVisible] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);    
        return () => {
          window.removeEventListener('scroll', checkVisibility);
        };
      }, []);

    const checkVisibility = () => {
        //once element has been assinged, start monitoring it
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            if(rect.top < 0 && rect.bottom > 120)
            {
                setTitleOffset(-rect.top+titleOffsetInitial)
            }
            let percent = (-rect.top/rect.height)*100
            //I added a multiplier because I wanted the bar to go faster across the screen
            let multiplier = 1.25
            if(percent >= 0 && percent <= (100/multiplier))
            {
                setRectPercentVisible(percent*multiplier)
                
            }
            //this gets rid of a small maybe one or two pixel wide part that would show when its supposed to be set to zero
            if(percent < 0)
                setRectPercentVisible(0)
            if(percent*multiplier > 100)
                setRectPercentVisible(100)
        }
    };


    const languages = [
        {name:"React", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"}, 
        // {name:"React Native", icon:""}, 
        {name:"Github", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"}, 
        {name:"Gitlab", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"}, 
        {name:"SQL", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},
        {name:"sqlite", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"},
        {name:"Java", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
        {name:"C", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
        {name:"C++", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
        {name:"C#", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
        {name:"Python", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
        {name:"HTML5", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
        {name:"JavaScript", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
        {name:"JSON", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"},
        {name:"XML", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"},
        {name:"Django", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg"},
        ]

    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240}}>
                <div className="bioContainer">
                    <img src={require('../../../assets/images/Me/IMG_3250.PNG')}></img>
                    <div className="bioDiv">
                        <h1>John Stevens</h1>
                        <p>B.S. Software Development University of Utah 2024</p>
                    </div>
                </div>


                <div className="languageContainerOuter">
                    {/* languages / technologies container*/}
                    <div className="languageContainerInner" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%'}}>
                        
                        {/* div for the moving text on the left */}
                        <div ref={elementRef} style={{height:'auto', display:'flex', flexDirection:'column', paddingLeft:20, paddingRight:20}}>
                            <h2 style={{position:'relative', top:`${titleOffset}px`, left:0}}>Familiar Languages & Technologies</h2>
                        </div>

                        {/* div for the list of languages on the right */}
                        <div className="languageDiv">

                            {/* this div allows the h2 above some padding along the as users scroll, but also aligns it properly with the first language*/}
                            <div style={{height:`${titleOffsetInitial}`}}></div>
                            {languages.map((language) => (
                                <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                                    <h2>{language.name}</h2>
                                    <div style={{flexDirection:'row', paddingRight:5}}>
                                        <img src={language.icon} style={{height:40}}></img>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* div for the moving colored bar on the bottom */}
                    <div style={{height:40, width:'auto', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                        <div style={{height:'100%', width:`${rectPercentVisible}%`, backgroundColor:'#007AFF'}}></div>
                    </div>
                </div>





               <div style={{height:4000, backgroundColor:'#007AFF', width:40}}></div>
            </div>
        </div>
        </>
    )
}

export default About;