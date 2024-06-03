import React, {useRef, useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from '@tabler/icons-react';
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
            <div style={{height:'50px', backgroundColor:`grey`, display:'flex', flexDirection:'row', alignItems:'center', paddingLeft:10, paddingRight:10}}>
                <h2>JS</h2>
                <div style={{flex:1}}/>
                <IconMenu2 color={showList ? 'white' : 'black'} onClick={() => {setShowList(!(showList))}}/>
            </div>

            <div ref={listRef} className="navbarOptions" style={{position:'fixed', overFlow:'hidden', top:0, height:'100%', width:'100%', backgroundColor:'black', zIndex:10}}>    
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center', paddingRight:8, paddingTop:8, backgroundColor:'#1c1c1c'}}>
                    <IconX size={50} strokeWidth={2} color='grey' onClick={() => {setShowList(!(showList))}}/>
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