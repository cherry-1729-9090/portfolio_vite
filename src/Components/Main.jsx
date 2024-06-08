import About from '../Components/About.jsx';
import Certification from '../Components/Certification.jsx';
import Contact from '../Components/Contact.jsx';
import Home from '../Components/Home.jsx';
import Project from '../Components/Project.jsx';

import './Main.css'

function Main() {
    return (
        <div>
            <Home />
            <About />
            <Certification />
            <Project />
            <Contact />
        </div>
    )
}
export default Main;