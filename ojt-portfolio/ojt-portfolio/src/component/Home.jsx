import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './Techstack';
const Home = () => {
    return(
        <>
        
         <Navbar />
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center items-center flex justify-between gap-35">
                <div className="">
                    <img src="profile-pic.png" alt="" className = "h-120" />

                </div>
                <div className=""> 
                    <h1 className="text-5xl font-bold mb-4">Janmejay Pandya</h1>
                    <p className="text-lg text-gray-700 mb-8">Explore my projects and get to know me better!</p>
                    <div className="items-start flex ">
                <button className="bg-purple-700 text-white px-6 py-2 rounded-xl"><Link to="/projects" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
                </div>
                </div>
            </div>
        </div>
        <Projects />
        <TechStack />
        <Contact />
         <Footer />
        </>
    )
}
export default Home;