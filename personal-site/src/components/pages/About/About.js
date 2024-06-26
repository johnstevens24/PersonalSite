import React, { useRef, useState, useEffect} from "react"
import Slider from '@mui/material/Slider';
import './AboutStyles.css'



const About = () => {

    const [width, setWidth] = useState(window.innerWidth)


    const firstDivRef = useRef(null)
    const [titleOffsetInitial, setTitleOffsetInitial] = useState(20)
    const [titleOffset, setTitleOffset] = useState(titleOffsetInitial)
    const [firstDivPercentVisible, setFirstDivPercentVisible] = useState(0)

    const secondDivRef = useRef(null)
    const [secondDivHeight, setSecondDivHeight] = useState(150)
    const [secondDivPercentVisible, setSecondDivPercentVisible] = useState(0)

    const thirdDivRef = useRef(null)
    const [thirdDivPercentVisible, setThirdDivPercentVisible] = useState(0)
    const videoRef = useRef(null)
    const [playVideo, setPlayVideo] = useState(false)

    const [sliderPercentage, setSliderPercentage] = useState(50)

    const [currentCar, setCurrentCar] = useState(6)

    const bioStuff = (
        <>
            <h1>John Stevens</h1>
            <p>B.S. Software Development University of Utah 2024</p>
            <br/>
            <p> Hi, my name is John. I recently graduated from the University of Utah, where I initially studied Computer Science before switching to Software Development. 
                Because I decided to switch majors midway through my studies, I ended up taking a wide range of classes. My coursework covered everything from CPU architecture 
                to UI/UX, databases to entrepreneurship, and website and mobile app development to CUDA programming for large datasets, among many other topics. 
            </p>
            <br/>
            <p>    
                Recently, I have taken an interest in the React library and have developed a few websites using it, including the one you are currently viewing. 
                I have also created a couple of apps using React Native, which you can check out on the Projects page.
            </p>
        </>
    )
        
    

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);    
        return () => {
          window.removeEventListener('scroll', checkVisibility);
        };
      }, []);

    const checkVisibility = () => {
        
        if (firstDivRef.current) {
            const rect = firstDivRef.current.getBoundingClientRect();

            if(rect.top >= 0)
                setTitleOffset(titleOffsetInitial)

            if(rect.top < 0 && rect.bottom > 120)
                setTitleOffset(-rect.top+titleOffsetInitial)
            
            


            let percent = (-rect.top/rect.height)*100
            //I added a multiplier because I wanted the bar to go faster across the screen
            let multiplier = 1.25

            if(percent >= 0 && percent <= (100/multiplier))
                setFirstDivPercentVisible(percent*multiplier)
            else
            if(percent < 0)
                setFirstDivPercentVisible(0)
            else
            if(percent*multiplier > 100)
                setFirstDivPercentVisible(100)    
        }

        if (secondDivRef.current) {
            const rect = secondDivRef.current.getBoundingClientRect();
            let percent = ((-(rect.top-220))/secondDivHeight)*100

            if(percent <= 0)
                setSecondDivPercentVisible(0)
            else
            if(percent > 0 && percent < 100)
                setSecondDivPercentVisible(percent)
            else
            if(percent > 100)
                setSecondDivPercentVisible(100)
        }

        if (thirdDivRef.current) {
            const rect = thirdDivRef.current.getBoundingClientRect();

            let percent = (-rect.top/rect.height)*100
            
            if(percent >= 0 && percent <= 100)
            {
                    setThirdDivPercentVisible(percent)
            }    
            else
            if(percent < 0)
                setThirdDivPercentVisible(0)
            else
            if(percent > 100)
                setThirdDivPercentVisible(100)    

        }
    };

    function getVideoWidth() {
        // if( videoRef.current !== null && thirdDivPercentVisible/9 < 9 && thirdDivPercentVisible/9 >= 0)
        //     videoRef.current.currentTime=thirdDivPercentVisible/9 
            
        if(thirdDivPercentVisible < 25)
        {
            if(videoRef.current !== null)
                videoRef.current.pause()
            return 50 + thirdDivPercentVisible*2;
        }
        // videoRef.current.play()   
        return 100;
    }

    
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
    
    const [vehicles, setVehicles] = useState([
        {name:"2006 Acura TL", info:"My first car. I absolutely loved this thing. Black on black with a 6 speed manual transmission.", image:require("../../../assets/images/vehicles/TL.jpg")},
        {name:"2007 BMW 335i", info:"My first and least problematic BMW. Its hard to believe the looks of an almost 20 year old car have held up so well.", image:require("../../../assets/images/vehicles/E92.JPG")},
        {name:"2007 BMW 335i", info:"Absolute money pit. Spent too much time and money building this car. But, it helped me learn some great lessons about priorities.", image:require("../../../assets/images/vehicles/E90.JPG")},
        {name:"2009 Yamaha FZ6", info:"Great first bike, but I decided I wanted something with a little bit more torque.", image:require("../../../assets/images/vehicles/FZ6.jpg")},
        {name:"2010 BMW 535i", info:"Fun fact: I never filled this thing up with gas. Bought it with half a tank, let it sit, and flipped it a few months later with a quarter tank.", image:require("../../../assets/images/vehicles/E60.jpg")},
        {name:"2002 Lexus IS300", info:"Ahhhh my 1JZ-GTE swapped junker. You will be missed.", image:require("../../../assets/images/vehicles/IS300.JPG")},
        {name:"2014 Yamaha FZ09", info:"I feel like a bullet in traffic on this thing. Traversing Salt Lake City has never been so easy.", image:require("../../../assets/images/vehicles/FZ09.PNG")},
    ])

    function switchVehicle(index) {
        let tempVehicles = [...vehicles] //must create a new array otherwise react won't detect a state change
        let temp = tempVehicles[index]
        tempVehicles[index] = tempVehicles[6]
        tempVehicles[6] = temp
        setVehicles(tempVehicles)
    }

    //small screen sizes
    if(width < 940)
        return(
            <div className="mobileAP" style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', width:'100%', overflow:'hidden'}}>

                {/* bio and picture */}
                <div className="mobileBio">
                    <img alt="Me" style={{width:'80%'}} src={require('../../../assets/images/Me/IMG_3250.PNG')}/>
                    {bioStuff}
                </div>
                
                {/* familiar languages and technologies */}
                <div className="languageContainerOuter">
                    {/* languages / technologies container*/}
                    <div className="languageContainerInner" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%'}}>
                        
                        {/* div for the moving text on the left */}
                        <div ref={firstDivRef} style={{height:'auto', display:'flex', width:'70%', flexDirection:'column', paddingLeft:20}}>
                            <h3 style={{position:'relative', top:`${titleOffset}px`, left:0}}>Familiar Languages & Technologies</h3>
                        </div>

                        {/* div for the list of languages on the right */}
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center', width:'30%'}}>

                            {/* this div allows the h2 above some padding along the as users scroll, but also aligns it properly with the first language*/}
                            <div style={{height:`${titleOffsetInitial}`}}></div>
                            {languages.map((language, index) => (
                                <div key={index} style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', height:45}}>
                                    <div style={{flexDirection:'row', paddingRight:5, position:'relative', width:40}}>
                                        {language.icon.map((icon, iconIndex) => (
                                            <img key={iconIndex} src={icon} style={{height:40, position:'absolute', left:(-20*iconIndex)}}></img>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* div for the moving colored bar on the bottom */}
                <div style={{marginTop:40,height:40, width:'auto', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <div style={{height:'100%', width:`${firstDivPercentVisible}%`, backgroundColor:'#007AFF'}}></div>
                </div>

                {/* Hobbies Banner div */}
                <div ref={secondDivRef} style={{height:`auto`, width:'auto', display:'flex', flexDirection:'row'}}>
                    <div style={{paddingLeft:'1rem', opacity:`${secondDivPercentVisible/100}`, flex:1, background:'linear-gradient(to right, rgba(1, 214, 214, 1), rgba(214, 214, 214, 0))'}}>
                        <p className="hobbies"style={{fontSize:70}}><b style={{color:'white'}}>HOBBIES</b></p>
                    </div>
                </div>                   
                
                {/* Photoshop div */}
                <div>
                    <div className="mobileHobbyContainer">
                        <h1>Photoshop</h1>
                        <p>I've had the opportunity to practice and utilize my photoshop skills throughout almost every semester of undergrad. From volunteering to make posters for group projects to just tinkering when I'm bored, I've always embraced a chance to get more experience with the adobe suite.</p>
                        <br/>
                        <p>The image you see here is my attempt to create something similar to Erik Johansson's <a href="https://www.erikjo.com/medium-prints/fishy-island" target="_blank"><em>Fishy Island</em></a> as a final unit project for the Computers and The Arts course I took as a freshman. Its comprised of 6 different images.</p>
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'flex-start', marginTop:'1rem', height:(width*1.26)+50}}>
                            <div style={{position:'relative', width:'100%', height:(width*1.26)}}>
                                <div style={{position:'absolute', top:0, left:0, width:`${sliderPercentage}%`, height:(width*1.26), overflow:'hidden', zIndex:2}}>
                                    <img style={{height:'100%'}} src={require("../../../assets/images/photoshop/a.jpg")}></img>
                                </div>
                                <img src={require("../../../assets/images/photoshop/b.jpg")} style={{height:(width*1.26), position:'absolute', top:0, left:0, zIndex:0}}></img>
                            </div>
                                
                            <div style={{height:'100%', width:'%',display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                                {/* I know hard coding values and multipliers isn't ideal. I need to circle back to this at some point and fix it. */}
                                <Slider onChange={(event, newValue) => { typeof newValue === 'number' ? setSliderPercentage(newValue) : setSliderPercentage(sliderPercentage)}} defaultValue={sliderPercentage}/>
                            </div>
                    </div>
                </div>
                
                {/* Vehicles div */}
                <div>
                    <div className="mobileHobbyContainer">
                        <h1>Cars & Motorcycles</h1>
                        <p>{vehicles[6].info}</p>
                        <img alt={vehicles[6].name} src={vehicles[6].image} style={{maxWidth:'100%', maxHeight:'100%', height:'auto', paddingTop:'1rem'}}/>
                    </div>
                    
                    <div className="mobileImageRow">
                        { vehicles.map((vehicle, index) => (
                            index < 3 ? 
                            <div key={index}>
                                <img alt={vehicle.name} onClick={() => switchVehicle(index)} src={vehicle.image}/>
                            </div>
                            :
                            <></>
                        ))}
                    </div>
                    <div className="mobileImageRow">
                        { vehicles.map((vehicle, index) => (
                            index >= 3 && index < 6? 
                            <div key={index}>
                                <img alt={vehicle.name} onClick={() => switchVehicle(index)} src={vehicle.image}/>
                            </div>
                            :
                            <></>
                        ))}
                    </div>
                </div>

                {/* Health & Fitness div */}
                <div className="mobileHobbyContainer">
                    <div className="hobbyInfoDiv">
                        <h1>Health & Fitness</h1>
                        <p>Three of my favorite things (beyond programming of course) are playing volleyball, lifting weights, and cooking food. I feel so blessed to live in Salt Lake City, Utah where we have a great culture of being active and outdoorsy.</p>
                        <br></br>
                        <p>Recently I've been going to EOS fitness at Trolley Square. Its pretty small, but its the closest one to me. You're probably saying to yourself "Why are you telling me this?" well because it gives me a reason to find out how to embed google maps into my website.</p>
                    </div>
                    <div className="mapContainer" style={{paddingTop:'2rem'}}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1897136641664!2d-111.87294102449918!3d40.757851934808215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5e90d666eeb%3A0xc9b8d9306de22cd5!2sE%C5%8DS%20Fitness!5e0!3m2!1sen!2sus!4v1717449689204!5m2!1sen!2sus" 
                            width={width-40} 
                            height={width-40} 
                            style={{ border: '1px solid lightgrey' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>
        )

    return(
        <div className="AP" style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240, width:1000, minWidth:940}}>
                
                <div className="bioContainer">
                    <div className="imageDiv">
                        <img alt="Me" src={require('../../../assets/images/Me/IMG_3250.PNG')} style={{maxWidth:'100%', maxHeight:'100%'}}/>
                    </div>
                    
                    <div className="bioDiv">
                        {bioStuff}
                    </div>
                </div>


                <div className="languageContainerOuter">
                    {/* languages / technologies container*/}
                    <div className="languageContainerInner" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%'}}>
                        
                        {/* div for the moving text on the left */}
                        <div ref={firstDivRef} style={{height:'auto', display:'flex', flexDirection:'column', paddingLeft:20, paddingRight:20}}>
                            <h2 style={{position:'relative', top:`${titleOffset}px`, left:0}}>Familiar Languages & Technologies</h2>
                        </div>

                        {/* div for the list of languages on the right */}
                        <div className="languageDiv">

                            {/* this div allows the h2 above some padding along the as users scroll, but also aligns it properly with the first language*/}
                            <div style={{height:`${titleOffsetInitial}`}}></div>
                            {languages.map((language, index) => (
                                <div key={index} style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                                    <h2>{language.name}</h2>
                                    <div style={{flexDirection:'row', paddingRight:5, position:'relative', width:40}}>
                                        {language.icon.map((icon, iconIndex) => (
                                            <img key={iconIndex} src={icon} style={{height:40, position:'absolute', left:(-20*iconIndex)}}></img>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* div for the moving colored bar on the bottom */}
                <div style={{marginTop:40,height:40, width:'auto', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <div style={{height:'100%', width:`${firstDivPercentVisible}%`, backgroundColor:'#007AFF'}}></div>
                </div>


                {/* Hobbies Banner div */}
                <div ref={secondDivRef} style={{height:`${secondDivHeight}px`, width:'auto', display:'flex', flexDirection:'row'}}>
                    <div style={{width:40, height:`${secondDivPercentVisible}%`, backgroundColor:'#007AFF'}}></div>
                    <div style={{paddingLeft:'1rem', opacity:`${secondDivPercentVisible/100}`, flex:1, background:'linear-gradient(to right, rgba(1, 214, 214, 1), rgba(214, 214, 214, 0))'}}>
                        <p className="hobbies"style={{fontSize:100}}><b style={{color:'white'}}>HOBBIES</b></p>
                    </div>
                </div>

                {/* Motorcycle Video div */}
                
                {/* <div ref={thirdDivRef} className="motorcycleDiv">
                    <div style={{width:'5px', height:`${thirdDivPercentVisible+2}%`}}></div>
                    <div style={{width:`${getVideoWidth()}%`, height:200, backgroundColor:'red', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
                        {thirdDivPercentVisible > 40 ? <h2 style={{color:'white'}}>MOTORCYCLING</h2> : <></>}
                        <video ref={videoRef} muted={true} loop={true} controls={false} style={{width:'100%'}}>
                            <source src={require('../../../assets/videos/motorcycle.mp4')} type="video/mp4"/>
                        </video>
                    </div>
                </div> */}

                <div className="hobbyContainer">
                    <div className="hobbyInfoDiv">
                        <h1>Photoshop</h1>
                        <p>I've had the opportunity to practice and utilize my photoshop skills throughout almost every semester of undergrad. From volunteering to make the posters for group projects to just tinkering when I'm bored, I've always embraced a chance to get more experience with the adobe suite.</p>
                        <br/>
                        <p>The image you see here is my attempt to create something similar to Erik Johansson's <a href="https://www.erikjo.com/medium-prints/fishy-island" target="_blank"><em>Fishy Island</em></a> as a final unit project for the Computers and The Arts course I took as a freshman. Its comprised of 6 different images.</p>
                    </div>
                    
                    <div style={{display:'flex', flexDirection:'column', width:'40%', height:'100%', justifyContent:'flex-start'}}>
                        <div className="photoShopImageDiv">
                            <div style={{position:'absolute', top:0, left:0, width:`${sliderPercentage}%`, height:500, overflow:'hidden', zIndex:2}}>
                                <img style={{height:'100%'}} src={require("../../../assets/images/photoshop/a.jpg")}></img>
                            </div>
                            <img src={require("../../../assets/images/photoshop/b.jpg")} style={{height:500, position:'absolute', top:0, left:0, zIndex:0}}></img>
                        </div>

                        <div style={{height:'100%', width:'100%',display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                            {/* I know hard coding values and multipliers isn't ideal. I need to circle back to this at some point and fix it. */}
                            <Slider onChange={(event, newValue) => { typeof newValue === 'number' ? setSliderPercentage(newValue) : setSliderPercentage(sliderPercentage)}} defaultValue={sliderPercentage} marks={[{value:0, label:'Before'}, {value:100, label:'After'}]}/>
                        </div>
                    </div>
                </div>

                <div className="hobbyContainer">
                    {/* container for car photo */}
                    <div style={{width:'40%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'1%'}}>
                        <img alt={vehicles[6].name} src={vehicles[6].image} style={{maxWidth:'100%', maxHeight:'100%', height:'auto'}}/>
                    </div>

                    {/* container for title, info, and other photos */}
                    <div className="hobbyInfoDiv">
                        <div style={{width:'100%', height:'30%', display:'flex', flexDirection:'column', padding:'10px'}}>
                            <h1>Cars & Motorcycles</h1>
                            <p>{vehicles[6].info}</p>
                        </div>
                        <div className="imageRow">
                            {vehicles.map((vehicle, index) => (
                                index < 3 ? 
                                <div key={index}>
                                    <img alt={vehicle.name} onClick={() => switchVehicle(index)} src={vehicle.image}/>
                                </div>
                                :
                                <></>
                            ))}
                        </div>
                        <div className="imageRow">
                            {vehicles.map((vehicle, index) => (
                                (index >= 3 && index < 6) ? 
                                <div key={index}>
                                    <img alt={vehicle.name} onClick={() => switchVehicle(index)} src={vehicle.image}/>
                                </div>
                                :
                                <></>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hobbyContainer">
                    <div className="hobbyInfoDiv">
                        <h1>Health & Fitness</h1>
                        <p>Three of my favorite things (beyond programming of course) are playing volleyball, lifting weights, and cooking food. I feel so blessed to live in Salt Lake City, Utah where we have a great culture of being active and outdoorsy.</p>
                        <br></br>
                        <p>Recently I've been going to EOS fitness at Trolley Square. Its pretty small, but its the closest one to me. You're probably saying to yourself "Why are you telling me this?" well because it gives me a reason to find out how to embed google maps into my website.</p>
                    </div>
                    <div className="mapContainer">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1897136641664!2d-111.87294102449918!3d40.757851934808215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5e90d666eeb%3A0xc9b8d9306de22cd5!2sE%C5%8DS%20Fitness!5e0!3m2!1sen!2sus!4v1717449689204!5m2!1sen!2sus" 
                            width="400" 
                            height="400" 
                            style={{ border: '1px solid lightgrey' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default About;