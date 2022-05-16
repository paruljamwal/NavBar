import React from 'react'
import './Link.css'
export const Links = () => {
  return (
    <div className='link' style={{
        display:"flex",
        flex:"1",
        gap:"5%",
        
    }}>
        <div>Services</div>
        <div>Projects</div>
        <div>About</div>
    </div>
  )
}
