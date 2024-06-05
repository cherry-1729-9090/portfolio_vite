import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faProjectDiagram, faFileAlt, faCertificate, faBlog, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import MyPic from '../assets/MyPic.jpg';

function Header() {
    return (
        <div className='navbar'>
            <header>
                <nav>
                    
                    <div className='navbar-brand'>
                        <a>
                            <img src={MyPic} alt="Logo" />
                            <h1>DEVI CHARAN</h1>
                        </a>
                    </div>

                    <div className='navbarMain'>                                                                                                                              
                        <div className='nav-item'>
                            <a href="#"><FontAwesomeIcon icon={faHouse} /> <span>Home</span></a>
                        </div>
                        <div className='nav-item'>
                            <a href="#"><FontAwesomeIcon icon={faProjectDiagram} /> <span>Projects</span></a>
                        </div>
                        <div className='nav-item'>
                            <a href="#"><FontAwesomeIcon icon={faFileAlt} /> <span>Resume</span></a>
                        </div>
                        <div className='nav-item'>
                            <a href="#"><FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span></a>
                        </div>
                        <div className='nav-item'>
                            <a href="#"><FontAwesomeIcon icon={faBlog} /><span>Blogs</span></a>
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
    );
}

export default Header;
