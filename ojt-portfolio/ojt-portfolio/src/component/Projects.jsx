import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio",
      image: "portfolio.png",
      description: "Using MERN stack",
      link: "/Home",
    },
    {
      title: "TrackMyMeal",
      image: "trackmymeal.png",
      description: "Helps you to track your order inside the restaurant.",
      link: "https://github.com/janmejay25/TrackMyMeal_2.0",
    },
    {
      title: "AI Nutrition Planner",
      image: "ainutrition.png",
      description: "Plan your Diet using AI [Frontend].",
      link: "https://janmejay.tech/",
    },
    {
      title: "Rock Paper Scissors [Python]",
      image: "rockpaper.png",
      description: "Rock Paper Scissors game using Python in Terminal.",
      link: "https://github.com/janmejay25/Rock_Paper_Sciessor_python",
    },
    {
      title: "ML Data Science",
      image: "cropyield.png",
      description: "Yield prediction using ML. Built during Skill4Future.",
      link: "https://github.com/janmejay25/AI_DATA_SCIENCE_SKILL4Future",
    },
    {
      title: "Tic Tac Toe Game",
      image: "tictactoe.png",
      description: "Tic-Tac-Toe game using Java in Terminal.",
      link: "https://github.com/janmejay25/Tic_Tac_Toe_java",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link
                to={project.link}
                target={project.link.startsWith("http") ? "_blank" : "_self"}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
