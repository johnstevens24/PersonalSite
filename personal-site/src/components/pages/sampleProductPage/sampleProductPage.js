import React from 'react'
import { useState, useEffect, useRef, scroll } from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

const SampleProductPage = () => {
    const [searchBarText, setSearchBarText] = useState()



    return(
        <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
            
            <div className='banner'> 
                <div className='junglePrimeContainer'>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <h2 style={{color:'white'}}>jungle</h2>
                        <div style={{flex:1}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        <h3 style={{color:'grey'}}>prime</h3>
                    </div>
                </div>

                <div className='searchBar'>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            All
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item>All Departments</Dropdown.Item>
                            <Dropdown.Item>Sports</Dropdown.Item>
                            <Dropdown.Item>Home</Dropdown.Item>
                            <Dropdown.Item>Gardening</Dropdown.Item>
                            <Dropdown.Item>Automotive</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <input type='text'>
                    </input>
                </div>
            </div>




        </div>
    )
}

export default SampleProductPage;