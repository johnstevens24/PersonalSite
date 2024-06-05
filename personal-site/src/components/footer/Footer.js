import React from 'react'

const Footer = () => {
    const width = window.innerWidth

    if(width < 940)
        return(
            <>
            </>
        )
    return (
        <div style={{width:'100%', height:'80px', marginTop:'20px', borderTop:"1px black solid", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            
            <p>©2024</p>
        
            <div style={{width:width*.15}}/>
        
            <p>Please give me a job {":)"}</p>
            
        </div>
    )   
}

export default Footer
