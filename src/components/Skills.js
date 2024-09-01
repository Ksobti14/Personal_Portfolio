import React from 'react';
import Navbar from './Navbar';
import useTitle from './Usetitle';
import './Skills.css';
import proj1 from '../images/project1.png.png';
import proj2 from '../images/project2.png.png'
const Skills = () => {
    useTitle('Skills - Kanav Sobti');
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='skills'>
                    <div className='skills-section'>
                        <h2>HTML</h2>
                        <div className='progress-bar'>
                            <div className='html'><span>85%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>CSS</h2>
                        <div className='progress-bar'>
                            <div className='css'><span>80%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>JavaScript</h2>
                        <div className='progress-bar'>
                            <div className='javascript'><span>75%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>React JS</h2>
                        <div className='progress-bar'>
                            <div className='react'><span>70%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>Python</h2>
                        <div className='progress-bar'>
                            <div className='python'><span>70%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>Machine Learning</h2>
                        <div className='progress-bar'>
                            <div className='ml'><span>70%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>Node JS</h2>
                        <div className='progress-bar'>
                            <div className='nodejs'><span>45%</span></div>
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>Mongo DB</h2>
                        <div className='progress-bar'>
                            <div className='mongodb'><span>40%</span></div>
                        </div>
                    </div>
                    <div className="card" style={{ width:'18rem'}}>
      <img src={proj1} className="card-img-top" alt="project1" />
      <div className="card-body">
        <h5 className="card-title">Expense Tracker App</h5>
        <p className="card-text">
        Expense Tracker App built with React.js and Firebase provides a user-friendly interface for managing personal finances. 
        </p>
        <a href="https://expense-tracker-354cd.web.app/" className="btn btn-success">Project Link</a>
        <a href="https://github.com/Ksobti14/expense-tracker-using-reactjs" className="btn btn-success" style={{margin:10}}>Github</a>
      </div>
    </div>
    <div className="card" style={{ width:'18rem',marginLeft:100}}>
      <img src={proj2} className="card-img-top" alt="project2" style={{fontSize:200}} />
      <div className="card-body">
        <h5 className="card-title">Train Finder</h5>
        <p className="card-text">
        Created a web-based application allowing users to search for train schedules based on criteria like train number, station
        code, arrival time, and departure time.
        </p>
        <a href="https://github.com/Ksobti14/TrainFinder-SimpleDbms-php-project" className="btn btn-success">Github</a>
      </div>
      </div>
                </div>
                </div>
                
        </>
    );
}

export default Skills;