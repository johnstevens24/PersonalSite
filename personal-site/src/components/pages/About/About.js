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
        {name:"React", icon:""}, 
        {name:"React Native", icon:""}, 
        {name:"Github", icon:""}, 
        {name:"Gitlab", icon:""}, 
        {name:"SQL", icon:""},
        {name:"sqlite", icon:""},
        {name:"Java", icon:""},
        {name:"C", icon:""},
        {name:"C++", icon:""},
        {name:"C#", icon:""},
        {name:"Python", icon:""},
        {name:"HTML", icon:""},
        {name:"JavaScript", icon:""},
        {name:"JSON", icon:""},
        {name:"XML", icon:""},
        {name:"Restful APIs", icon:""},
        ]

    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240}}>
                <div className="bioContainer">
                    <img src={require('../../../assets/images/Me/IMG_3250.PNG')}></img>
                    <div className="bioDiv">
                        <h2>John Stevens</h2>
                        <p>B.S. Software Development University of Utah 2024</p>
                    </div>
                </div>


                <div style={{display:'flex', flexDirection:'column', backgroundColor:'white'}}>
                    {/* languages / technologies */}
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                        <div ref={elementRef} style={{height:'auto', display:'flex', flexDirection:'column', paddingLeft:20, paddingRight:20}}>
                            <h2 style={{position:'relative', top:`${titleOffset}px`, left:0}}>Familiar Languages & Technologies</h2>
                        </div>
                        <div className="languageDiv">
                            {/* this div allows the h2 above some padding along the as users scroll, but also aligns it properly with the first language*/}
                            <div style={{height:`${titleOffsetInitial}`}}></div>
                            {languages.map((language) => (
                                <h2>{language.name}</h2>
                            ))}
                        </div>
                    </div>
                    <div style={{height:80, width:'auto', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                        <div style={{height:'100%', width:`${rectPercentVisible}%`, backgroundColor:'red'}}></div>
                    </div>
                </div>





               <div style={{height:4000, backgroundColor:'red', width:100}}></div>
            </div>
        </div>
        </>
    )
}

export default About;