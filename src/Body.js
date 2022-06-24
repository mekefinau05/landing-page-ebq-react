import React from 'react';
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <div className='bodyOne'>
            <div className='images'>
                <img id='ebq' src='images/Marketing_Tools.svg' alt='ebqModel'>
                </img>
            </div>
            <div>
                <h1>
                <span style={{fontWeight: '300'}}>We're experts with</span> modern marketing tools, <span style={{fontWeight: '300'}}>so you don't have to be!</span>
                </h1>
                <p>
                With hands-on experience in B2B's most innovative apps and tools, we
            take a data-driven approach to continually improve prospect
            engagement. Whether we work directly out of your platform or provide
            our insights manually, you always get full visibility into the
            process. 
                </p>
            </div>
            </div>

            <div className='bodyTwo'>
            <div>
                <h1>
                The best way <span style={{fontWeight: '300'}}>to build a marketing team</span>
                </h1>
                <p>
                With EBQ, your'e not just hiring a marketing specialist. You're
            getting an entire marketing department at a fraction of the cost and
            effort of hiring internally.
                </p>
                <p>
                For each project, we provide: a Success Manager to drive high-level
            strategy, a Project Manager to oversee day-to-day operations, and
            one or more Specialists working diligently to amplify your brand.
                </p>
            </div>
            <div className='images'>
                <img id='emp' src='images/Complete-Department-Marketing.png' alt='ebqEmployee'>
                </img>
            </div>
            </div>

        </div>
    )
}

export default Body;