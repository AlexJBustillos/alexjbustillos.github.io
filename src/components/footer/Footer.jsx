import React from 'react'
import './footer.css'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Alex J Bustillos</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* <div className="footer__socials">
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><IoLogoTwitter/></a>
            </div> */}
            <div className="footer__copyright">
                <small>©Alex J Bustillos</small>
            </div>

        </footer>
    )
}

export default Footer
