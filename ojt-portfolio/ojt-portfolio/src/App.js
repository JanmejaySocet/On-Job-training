import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './component/Home';
import Navbar from './component/Navbar';
import Nopage from './component/Nopage';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Signup from './component/Signup';
import Login from './component/Login';
import './App.css';


const App= () => {
  return(
    <>
    <title>Portfolio | Janmejay Pandya</title>
    <head>
    <link rel="icon" href="profile-pic.png" type="image/png"></link>
    </head>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;