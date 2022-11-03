
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skill from './Components/Skill';
import Statistics from './Components/Statistics';
import Tool from './Components/Tool';


function App() {
  return (
    <div className="App">
   <Navbar />
    <Home/>
   <About/>
   <Projects/>
   <Skill/>
   <Tool/>
   <Statistics/>
   <Github/>
   <Contact/>
   <Footer/>
    </div>
  );
}


export default App;
