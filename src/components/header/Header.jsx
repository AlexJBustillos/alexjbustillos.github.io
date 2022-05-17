import React from 'react'
import './header.css'
import CTA from './CTA'
// import Logo from '../../assets/logo.png'
import HeaderSocials  from './HeaderSocials'
const Header = () => {
    return (
        <header>
           <div className="container header_container">
                <div className="tranparent__background">
                    <h5>Hello I'm</h5>   
                    <h1>Alex Bustillos</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                    <CTA/>   
                </div>
                <HeaderSocials/>
                
                {/* <div className="me">
                    <img src={Logo} alt="logo" />
                </div> */}
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div> 
        </header>
    )
}

export default Header
