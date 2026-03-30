
import About from './components/About/About.js';
import Skills from'./components/Skills/Skills.js';
import Certificates from'./components/Certificates/Certificates.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Skills/>
    <Certificates/>
    <Footer/> 
    </div>
  );
}

export default App;
