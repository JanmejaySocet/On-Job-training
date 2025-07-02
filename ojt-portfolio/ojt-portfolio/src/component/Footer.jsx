import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-1">
          &copy; {new Date().getFullYear()} Janmejay. All rights reserved.
        </p>
        <p className="text-sm mb-4">
          Made with ❤️ by Janmejay
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/janmejay-pandya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/janmejay25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
