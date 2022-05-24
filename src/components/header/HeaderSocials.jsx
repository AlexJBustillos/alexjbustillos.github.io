import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/alexjbustillos/" target='_blank'><BsLinkedin className='big__size'/></a>
            <a href="https://github.com/AlexJBustillos" target='_blank'><FaGithub className='big__size'/></a>
        </div>
    )
}

export default HeaderSocials
