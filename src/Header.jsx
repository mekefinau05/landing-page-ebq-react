import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='topnav'>
                <img id='ebqBlue' className='ebq' src='images/logo-blue-160x160-1.png' alt='ebq blue logo'></img>
                <button className='contactBtn'>CONTACT US</button>
            </div>
            <div className='intro'>
                <h1 className='integrate'>Integrated</h1>
                <div className='marvice'>
                    <h1 className='marketing'>Marketing</h1>
                    <h1 className='service'>Services</h1>
                </div>  
                <p>We turn your marketing plans into action by building on   your ideas and executing initiatives alongside you and your team. Get a complete department that can pivot to different areas of marketing based on your needs.
                </p>
            </div>
            
        </div>
    )
}

export default Header