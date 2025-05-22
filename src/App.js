
// import Typed from 'react-typed';
import { FaEnvelope, FaGithub}from 'react-icons/fa';
import {FaLinkedin}from 'react-icons/fa';
import {FaInstagram}from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    
    <Navbar/>
  
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>

    <section id="contact">
      <div className="con">
        <h1>
          FIND ME ON 
        </h1>
        <p>
          Fell free to connect with me
        </p>
      </div>
      <div className="icon">
        <a href="https://github.com/ishikapoddar"><div class="ico"><FaGithub className="text-white"size={32}/></div></a>
        <a href="https://linkedin.com/in/ishika-poddar30"><div class="ico"><FaLinkedin className='text-white' size={32}/></div></a>
        <a href="https://www.instagram.com/ishika_poddar__/"><div class="ico"><FaInstagram className='text-white' size={32}/></div></a> 
        <a href="mailto:ishikapoddar30@gmail.com"><div class="ico"><FaEnvelope className='text-white' size={32}/></div></a>
      </div>

    </section>
    
    
    
   
      </>
    

  );
}

export default App;
