import './About.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import TechnicalSkillContainer from './aboutComponents/TechnicalSkillContainer';
import PersonalSkills from './aboutComponents/PersonalSkillContainer';
import ToolKit from './aboutComponents/ToolkitContainer';
import RankingComponent from './aboutComponents/RankingComponent';
import SocialMediaContainer from './aboutComponents/SocialMediaContainer';
import VerticalTimeLineComponent from './aboutComponents/VerticalTimeLineComponent';
import React from 'react';

function About() {
    useEffect(() => {
        const elements = document.querySelectorAll('.highligtedText');
        elements.forEach(element => {
            const text = element.innerText;
            element.innerHTML = text
                .split('')
                .map((letter, index) => `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`)
                .join('');
        });
    }, []);

    return (
        <Router>
            <div className='about-section'>
                <div className='home-about-desc'>
                    <div>
                        <h1>
                        {'About'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                        </h1>
                    </div>
                </div>

                <div>
                    <div className="about-item-links">
                        <NavLink className="about-item" to="/about">About</NavLink>
                        <NavLink className="about-item" to="/skills">Skills</NavLink>
                        <NavLink className="about-item" to="/journey">Journey</NavLink>
                        <NavLink className="about-item" to="/ranking">Ranking</NavLink>
                        <NavLink className="about-item" to="/social-media">Social Media</NavLink>
                    </div>

                    <div className='container'>
                        <Routes>
                            <Route path="/about" element={
                                <div className='about-cointainer'>
                                    <p>
                                        My name is <span className="highligtedText">DEVI CHARAN</span> and I am a <span className="highligtedText">Computer Science and Engineering</span> student at <span className="highligtedText">SCALER SCHOOL OF TECHNOLOGY, Banglore</span>.<br></br>
                                        I am proficient in various programming languages such as <span className="highligtedText">C, Java, Python, HTML, CSS, and JavaScript.</span><br></br>
                                        I also have experience working with frameworks and libraries such as <span className="highligtedText">ReactJS, OpenCV, Pandas, and NumPy.</span><br></br>
                                        Whenever possible, I also apply my passion for developing products with <span className="highligtedText">Modern Javascript Library and Frameworks.</span> <br></br>
                                        In my free time, I enjoy learning new technologies and <span className="highligtedText">building new web technologies and products.</span><br></br>
                                    </p>
                                </div>
                            } />
                            <Route path="" element={<Navigate to="/about" />} />
                            <Route path="/skills/*" element={
                                <div className='skill-container'>
                                    <div className='skill-set-type'>
                                        <NavLink className='skill-type' to="technical">Technical Skills</NavLink>
                                        <NavLink className='skill-type' to="personal">Personal Skills</NavLink>
                                        <NavLink className='skill-type' to="toolkit">Tool kit</NavLink>
                                    </div>

                                    <Routes>
                                        <Route path="" element={<Navigate to="technical" />} />
                                        <Route path="technical" element={<TechnicalSkillContainer />} />
                                        <Route path="personal" element={<PersonalSkills />} />
                                        <Route path="toolkit" element={<ToolKit />} />
                                    </Routes>
                                </div>
                            } />
                            <Route path="/journey" element={<VerticalTimeLineComponent />} />
                            <Route path="/ranking" element={<RankingComponent />} />
                            <Route path="/social-media" element={<SocialMediaContainer />} />
                        </Routes>   

                    </div>
                </div>
            </div>
        </Router>
    )
}

export default About;
