import React, {useRef, useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import './MobileNavbarStyles.css'

function MobileNavBar() {
    const [showList, setShowList] = useState(false)
    const listRef = useRef(null)

    useEffect(() => {
        if(listRef != null)
            if(showList)
            {
                listRef.current.classList.add('show')
                listRef.current.classList.remove('hide')
            }
            else
            {
                //don't want it to have the hide class at first
                if(listRef.current.classList.contains('show'))
                {
                    listRef.current.classList.remove('show')
                    listRef.current.classList.add('hide') 
                }
            
            }
    }, [showList])

    return (
        <>
            {/* {showList ? 
                <div>
                    
                </div>
            : 
            <div style={{backgroundColor:'white', width:window.innerWidth, height:window.innerHeight, zIndex:4}}>
                <div className='navbar'>
                    <div style={{width:'100%', display:'flex'}}>

                    </div>
                    <ul>
                        <li><Link to="/about" className='link'>About</Link></li>
                        <li><Link to="/projects" className='link'>Projects</Link></li>
                        <li><Link to="/" className='link'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            
            } */}

            

            <div style={{height:'50px', backgroundColor:`grey`, display:'flex', flexDirection:'row', alignItems:'center', paddingLeft:10, paddingRight:10, zIndex:10}}>
                <h2>JS</h2>
                <div style={{flex:1}}></div>
                <div onClick={() => {setShowList(!(showList))}} style={{height:'100%', aspectRatio:1, backgroundColor:'green'}}></div>
            </div>
            <div ref={listRef} className="navbarOptions" style={{position:'fixed', overFlow:'hidden', top:0, height:'100%', width:'100%', backgroundColor:'black', zIndex:9}}>
                
                <div style={{width:'100%', height:'50px', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <div onClick={() => {setShowList(!(showList))}} style={{height:'100%', aspectRatio:1, backgroundColor:'green'}}></div>
                </div>
                
                <ul>
                    <li onClick={() => {setShowList(false)}}><Link to="/about" className='link'>About</Link></li>
                    <li onClick={() => {setShowList(false)}}><Link to="/projects" className='link'>Projects</Link></li>
                    <li onClick={() => {setShowList(false)}}><Link to="/" className='link'>Contact</Link></li>
                </ul>
            </div>
    </>
    )
    
}

export default MobileNavBar