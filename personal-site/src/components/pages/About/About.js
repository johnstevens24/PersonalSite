import React, { useRef, useState, useEffect} from "react"
import './AboutStyles.css'


const About = () => {
    const elementRef = useRef(null)
    const [helpOffset, setHelpOffset] = useState(20)

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
            console.log(rect.bottom)
            if(rect.top < 0 && rect.bottom > 120)
            {
                setHelpOffset(-rect.top+20)
                // console.log("help offset: " + -rect.top)
            }
    }
    };

    const vehicleList = [
        {name:"Acura TL", year:"2006", transmission:"Manual", src:"", bio:"Going to miss this thing. Found it in a junk yard a few years later..."},
        {name:"Lexus IS300", year:"2002", transmission:"Manual", src:"", bio:"LOREM IPSOM A BUNCH OF OTHER BULLSHIT It had a poorly done 1JZ-GTE swap and a blown second gear, but to 17 year old me, it was the coolest thing ever."},
        {name:"Nissan 240sx", year:"1996", transmission:"Manual", src:"", bio:"Shitbox"},
        {name:"BMW 335i", year:"2007", transmission:"Automatic", src:"", bio:"Loved it. Miss this thing"},
        {name:"BMW 335i", year:"2007", transmission:"Manual", src:"", bio:"Money pit"},
        {name:"Acura RL", year:"2005", transmission:"Automatic", src:"", bio:"Things a champ"},
        {name:"Yamaha FZ6", year:"2009", transmission:"Manual", src:"", bio:"Great first bike"},
        {name:"BMW 535i", year:"2010", transmission:"Automatic", src:"", bio:"Meh"},
        {name:"Yamaha FZ09", year:"2014", transmission:"Automatic", src:"", bio:"Things a ripper"},
    ]

    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240}}>
                <div style={{height:400, backgroundColor:'red'}}/>

                
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    <div ref={elementRef} style={{height:1500, backgroundColor:'blue', display:'flex', flexDirection:'column'}}>
                        <h2 style={{position:'relative', top:`${helpOffset}px`, left:0}}>Previous/current vehicles</h2>
                    </div>
                    <div>
                        {vehicleList.map((vehicle) => (
                        <div className="vehicleDiv">
                            {/* vehicle info */}
                            <div className="vehicleInfo">
                                <h3>{vehicle.name}</h3>
                                <p>{vehicle.year}</p>
                                <p>{vehicle.transmission}</p>
                                <p>{vehicle.bio}</p>
                            </div>
                            {/* vehicle image */}
                            <div className="vehicleImage">
                                <p>*IMAGE*</p>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>
               
            </div>
        </div>
        </>
    )
}

export default About;