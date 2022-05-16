import React from 'react'
import './about.css'
import Me from '../../assets/profile2.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>   
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>   
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>   
                        </article>
                    </div>
                    <p>My passion for wanting more from my career was sparked when I was working as an assistant manager at a produce department in Whole Foods. In this position I managed to develop strong leadership and customer service skills which helped get my team 3rd in the NorthEast region in sales. The role inspired me to continue wanting to grow and help others grow around me as well. I enjoyed the team atmosphere and always pushed my team to keep improving. While at my managing position I learned how to take a step back when problems arise and use my calm attitude to assess the situation and solve problems according to level of importance. With my work ethic and positive calm attitude I continued to lead my department in record sales and profit and helped get my team excel while keeping labor and costs at a minimum. I love using my resources to help people, and find it most constructive when I treat others the way I would like to be treated as well. I want to do the same in the software engineering field, I’d like to work in a junior role and prove to the team and others that we can all achieve greatness as one.

                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About

