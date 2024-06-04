import {React, useEffect } from "react";
import './ContactStyles.css'
import { IconCopy } from '@tabler/icons-react';

const Contact = () => {


    return(
        <>
        <div style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start', maxWidth:1240, width:940}}>
            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                <div className="contactContainer">
                    <div>
                        <h1>Email</h1>
                        <IconCopy/>
                    </div>
                    <div>
                        <h1><a href="https://www.linkedin.com/in/john-stevens-064022253/" target="_blank">LinkedIn</a></h1>
                        <IconCopy onClick={() => console.log('copy linkedIn')}/>
                    </div>
                    <div>
                        <h1><a href="https://github.com/johnstevens24" target="_blank">Github</a></h1>
                        <IconCopy/>
                    </div>
                    
                </div>
                <div className="infoContainer">
                    <p>The best way to contact me is via email. I usually check it two or three times per day, however I also check LinkedIn fairly frequently.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;