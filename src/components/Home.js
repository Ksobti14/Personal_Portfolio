import React from 'react'
import Navbar from './Navbar'
import profile from '../images/profile.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate} from 'react-router-dom'
import useTitle from './Usetitle';
import './Home.css'
const Home = () => {
  const navigate=useNavigate();
  useTitle('Home-Kanav Sobti')
  return (
    <>
    <Navbar>
      <div className='home-content'>
        <div className='text-content'>
          <h2>HI THERE!</h2>
          <h2> I AM KANAV SOBTI</h2>
      <h4>FRONT-END DEVELOPER</h4>
      <a href='/kanav_resume.pdf' className='resume' download style={{margin:20,marginRight:100}}>DOWNLOAD RESUME</a>
      <br></br>
      <a href='https://www.linkedin.com/in/kanav-sobti-b1b680271/' style={{fontSize:30,color: '#0077b5',marginLeft:25}} className='linkedin'><FaLinkedin/></a>
      <a href='https://github.com/Ksobti14' style={{fontSize:30,color: '#333',margin:25 }} className='github'><FaGithub/></a>
      <a href='https://x.com/KanavSobti72542' style={{fontSize:30,color: '#333'}} className='twitter'><FaXTwitter/></a>
      <a href='https://leetcode.com/u/Kanav_Sobti/' style={{fontSize:30,color: '#333',margin:25}} className='leetcode'><SiLeetcode/></a>
      <br></br>
      <button style={{margin:20,marginRight:150}} className='about-me-btn' onClick={()=>{navigate('/about')}}>About me<FaArrowAltCircleRight/></button>
      </div>
    <img src={profile} alt='/home' className='profile-img'></img>
    </div>
    </Navbar>
    </>
  )
}

export default Home
