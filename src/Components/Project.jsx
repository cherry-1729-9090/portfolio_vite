import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <div className='Project'>
            <div className='Project-heading'>
                <div>
                    <h1>
                        {'Projects'.split('').map((char, index) => (
                            <span key={index} className='letter'>{char}</span>
                        ))}
                    </h1>
                </div>
            </div>

            <div className='Project-container'>
                <div className='Project-card'>
                    <div className='project-card-heading'>
                        <h1>New Year Count Down</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src='#'></img>
                        <p className='project-description'>
                            Count down to the new year with this simple project
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lreom ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                HTML, CSS, JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                


                <div className='Project-card'>
                    <div className='project-card-heading'>
                        <h1>New Year Count Down</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src='#'></img>
                        <p className='project-description'>
                            Count down to the new year with this simple project
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lreom ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                HTML, CSS, JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                

                <div className='Project-card'>
                    <div className='project-card-heading'>
                        <h1>New Year Count Down</h1>
                    </div>
                    <div className='project-description-img'>
                        <img src='#'></img>
                        <p className='project-description'>
                            Count down to the new year with this simple project
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lreom ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className='project-code-tech'>
                        <div className='code-icon'>
                            <FontAwesomeIcon icon={faCode} size="2x" />
                        </div>
                        <div className='project-tech'>
                            <p className='project-tech-text'>
                                HTML, CSS, JavaScript
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Project;
