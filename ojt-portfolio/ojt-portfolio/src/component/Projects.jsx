
import {Link} from 'react-router-dom';


const Projects = () => {
    return (
        <>
        
        <div className="bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 ml-50 mr-50">
              <div className="project-card">
                <h3>Portfolio</h3>
                <img src="portfolio.png" alt="" />
                <p>Using MERN stack</p>
                <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="/Home" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
              </div>
              <div className="project-card">
                <h3>TrackMyMeal</h3>
                <img src="trackmymeal.png" alt="" />
                <p>Helps you to track your order inside the resturant.</p>
               <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="https://github.com/janmejay25/TrackMyMeal_2.0" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
              </div>
              <div className="project-card">
                <h3>Ai Nutrition Planner</h3>
                <img src="ainutrition.png" alt="" />
                <p>Plan your Diet using AI [Frontend].</p>
                <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="https://janmejay.tech/" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
              </div>
                <div className="project-card">
                    <h3>Rock Paper Sciessor [Python]</h3>
                    <img src="rockpaper.png" alt="" />
                    <p>Rock Paper Sciessor game using python in Command Line Terminal.</p>
                   <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="https://github.com/janmejay25/Rock_Paper_Sciessor_python" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
                </div>
                <div className="project-card">
                    <h3>ML Data science</h3>
                    <img src="cropyield.png" alt="" />
                    <p>Made Data Science Core with one min ML mode on Yield prediction.</p>
                   <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="https://github.com/janmejay25/AI_DATA_SCIENCE_SKILL4Future" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
                    </div>
                <div className="project-card">
                    <h3>Tic Tac Toe Game</h3>
                    <img src="tictactoe.png" alt="" />
                    <p>Tic-Tac-Toe game using Java in Command Line Terminal.</p>
                    <button className="bg-purple-700 text-white px-3 py-1 rounded-xl"><Link to="https://github.com/janmejay25/Tic_Tac_Toe_java" className="no-underline text-purple-700 text-white ">View Projects</Link></button>
                    </div>
            
       </div>
         </div>
        
        
        </>
    )

}
export default Projects;