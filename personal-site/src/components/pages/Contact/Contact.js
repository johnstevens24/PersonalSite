import {React, useEffect, useState } from "react";
import './ContactStyles.css'
import { IconCopy } from '@tabler/icons-react';
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Contact = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const [emailMessage, setEmailMessage] = useState("")
    const [linkedInMessage, setLinkedInMessage] = useState("")
    const [githubMessage, setGithubMessage] = useState("")
    const displayTime = 1500;

    function copyToClipBoard(link) {
        setEmailMessage("")
        setLinkedInMessage("")
        setGithubMessage("")
        if(link === "email")
        {
            navigator.clipboard.writeText("johnstevens2424@gmail.com");
            setEmailMessage("copied to clipboard")
            setTimeout(() => {
                setEmailMessage("")
            }, displayTime)
            return;
        }
        if(link === "linkedIn")
        {
            navigator.clipboard.writeText("https://www.linkedin.com/in/john-stevens-064022253/");
            setLinkedInMessage("copied to clipboard")
            setTimeout(() => {
                setLinkedInMessage("")
            }, displayTime)
            return;
        }
        if(link === "github")
        {
            navigator.clipboard.writeText("https://github.com/johnstevens24");
            setGithubMessage("copied to clipboard")
            setTimeout(() => {
                setGithubMessage("")
            }, displayTime)
            return;
        }
    }

    if(width < 940)
    {
        return (
            <div className="mobileCP" style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'flex-start', width:'100%'}}>
                <div className="infoContainer">
                    <p>The best way to contact me is via email. I usually check it two or three times per day, however I also check LinkedIn fairly frequently. Also, here is a link to my GitHub.</p>
                </div>
                <div className="linkContainer">
                    <h1><a href="mailto:johnstevens2424@gmail.com">Email</a></h1>
                    <IconCopy onClick={() => copyToClipBoard('email')}/>
                    <p>{emailMessage}</p>
                </div>
                <div className="linkContainer">
                    <h1><a href="https://www.linkedin.com/in/john-stevens-064022253/" target="_blank">LinkedIn</a></h1>
                    <IconCopy onClick={() => copyToClipBoard('linkedIn')}/>
                    <p>{linkedInMessage}</p>
                </div>
                <div className="linkContainer">
                    <h1><a href="https://github.com/johnstevens24" target="_blank">Github</a></h1>
                    <IconCopy onClick={() => copyToClipBoard('github')}/>
                    <p>{githubMessage}</p>
                </div>
                        
                    
                    
                
            
        </div>
        )
    }

    return(
        <div className="CP">
            <div style={{maxWidth:1240, width:1000, minWidth:940}}>
                <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', paddingTop:'2rem'}}>
                    <div className="contactContainer">
                        <div>
                            <h1><a href="mailto:johnstevens2424@gmail.com">Email</a></h1>
                            <IconCopy onClick={() => copyToClipBoard('email')}/>
                            <p>{emailMessage}</p>
                        </div>
                        <div>
                            <h1><a href="https://www.linkedin.com/in/john-stevens-064022253/" target="_blank">LinkedIn</a></h1>
                            <IconCopy onClick={() => copyToClipBoard('linkedIn')}/>
                            <p>{linkedInMessage}</p>
                        </div>
                        <div>
                            <h1><a href="https://github.com/johnstevens24" target="_blank">Github</a></h1>
                            <IconCopy onClick={() => copyToClipBoard('github')}/>
                            <p>{githubMessage}</p>
                        </div>
                        
                    </div>
                    <div className="infoContainer">
                        <p>The best way to contact me is via email. I usually check it two or three times per day, however I also check LinkedIn fairly frequently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;