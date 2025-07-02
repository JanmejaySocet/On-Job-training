import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import TechStack from './Techstack';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          {/* Profile Image */}
          <div>
            <img src="profile-pic.png" alt="Profile" className="h-48 w-48 md:h-60 md:w-60 rounded-full object-cover border-4 border-purple-600 shadow-lg" />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Janmejay Pandya</h1>
            <p className="text-lg text-gray-300 mb-6">
              Explore my projects and get to know me better!
            </p>
            <Link to="/projects">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
