import React, { useRef, useState, useEffect} from "react"

const Home = () => {
    const elementRef = useRef(null)
    const [helpOffset, setHelpOffset] = useState(300)

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
            if(rect.top < 0 && rect.bottom > 100)
            {
                setHelpOffset(-rect.top+20)
                // console.log("help offset: " + -rect.top)
            }
    }
    };

    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start'}}>
            <div style={{maxWidth:1240}}>
                <div style={{height:'700px', backgroundColor:'red'}}>
                    
                </div>

                <div style={{width:700, backgroundColor:'orange', height:1000}}>
                    <div ref={elementRef} style={{width:'50%', height:'100%', backgroundColor:'blue'}}>
                        <h2 style={{position:'relative', top:`${helpOffset}px`, left:0}}>help</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'grey', height:3000}}>
                    <h2>hi</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;