import React from 'react';
import './About.css';
import Navbar from './Navbar';
import ed1 from '../images/ed1.jpeg';
import ed2 from '../images/ed2.jpeg';
import useTitle from './Usetitle';
const About = () => {
    useTitle('About-Kanav Sobti')
  return (
    <>
      <Navbar />
      <div className='contentabout'>
        <div className='about'>
          <h2 className='section-title'>About Me</h2>
          <div className='education-section'>
            <h3 className='education-title'>Education</h3>
            <div className='education-details'>
              <div className='education-item'>
                <img src={ed1} className='education-img' alt='education1' />
                <div className='education-info'>
                  <h4>BBMB DAV Public School</h4>
                  <p>
                    I studied at BBMB DAV Public School, Talwara, Punjab from 2008 to 2022. I achieved a percentage of 91% in my 10th grade and 92.6% in my 12th grade. I was actively involved in various academic and extracurricular activities, gaining a solid foundation for my future studies.
                  </p>
                </div>
              </div>
              <div className='education-item'>
                <img src={ed2} className='education-img' alt='education2' />
                <div className='education-info'>
                  <h4>Thapar Institute of Engineering and Technology</h4>
                  <p>
                    I am currently pursuing my B.E. in Computer Science at Thapar Institute of Engineering and Technology, Patiala, Punjab. This program is providing me with advanced knowledge in computer science and hands-on experience in software development, algorithms, and data structures. I have been awarded the Merit-III Scholarship for Academic Excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className='get-in-touch'>
              <h2>Get in Touch</h2>
              <p>Feel free to reach out to me via <a href='mailto:kanavsobti@gmail.com'>email</a> or connect with me on <a href='https://www.linkedin.com/in/kanav-sobti-b1b680271/'>LinkedIn</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

