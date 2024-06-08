import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faProjectDiagram, faFileAlt, faCertificate, faBlog, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import MyPic from '../assets/MyPic.jpg';
import ProjectSeper from '../Components/ProjectsSeper.jsx';

function Header() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('smooth-scroll');
            section.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                section.classList.remove('smooth-scroll');
            }, 500); // Adjust the timeout to match the transition duration
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Router>
            <div className='navbar' id='home'>
                <header>
                    <nav>
                        <div className='navbar-brand'>
                            <Link to="/">
                                <img src={MyPic} alt="Logo" />
                                <h1>DEVI CHARAN</h1>
                            </Link>
                        </div>

                        <div className='navbarMain'>
                            <div className='nav-item' onClick={() => scrollToSection('home')}>
                                <Link to="/"><FontAwesomeIcon icon={faHouse} /> <span>Home</span></Link>
                            </div>
                            <div className='nav-item'>
                                <Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> <span>Projects</span></Link>
                            </div>
                            <div className='nav-item'>
                                <Link to="/resume"><FontAwesomeIcon icon={faFileAlt} /> <span>Resume</span></Link>
                            </div>
                            <div className='nav-item' onClick={() => scrollToSection('certificates')}>
                                <a href="#"><FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span></a>
                            </div>
                            <div className='nav-item'>
                                <Link to="/blogs"><FontAwesomeIcon icon={faBlog} /><span>Blogs</span></Link>
                            </div>
                            <div className='nav-item-box'>
                                <a href="https://github.com/cherry-1729-9090">
                                    <FontAwesomeIcon icon={faCodeBranch} />
                                    <FontAwesomeIcon icon={faStar} />
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </Router>
    );
}

export default Header;
