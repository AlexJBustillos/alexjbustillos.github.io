import React, { Component } from 'react';
// import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css"
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience';
// import Services from './components/services/Services'
// import Resume from './components/Resume'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import resumeData from './resumeData'

// import '../public/css/default.css'


class App extends Component {
  render() {

    return (
      
      // <div className="App">
      //   <Navbar resumeData={resumeData}/>
      //   <Header resumeData={resumeData}/>
      //   {/* <About resumeData={resumeData}/>
      //   <Resume resumeData={resumeData}/>
      //   <Portfolio resumeData={resumeData}/>
      //   <Testimonials resumeData={resumeData}/>
      //   <ContactUs resumeData={resumeData}/> */}
      //   <Footer resumeData={resumeData}/>
        
      // </div>
      <div className='transparency'>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      
    );
  }
}
export default App; 
