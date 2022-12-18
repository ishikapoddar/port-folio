
import Typed from 'react-typed';
import {FaGithub}from 'react-icons/fa';
import {FaLinkedin}from 'react-icons/fa';
import {FaInstagram}from 'react-icons/fa';


function App() {
  return (
    <>
    
    
   <header>
      <div class="container">
        <div class="nav">
       
          <div class="nav2">
          <div class="menu"><a href="/">Home</a></div>
            <div class="menu"><a href="#about">about</a></div>
            <div class="menu"><a href="#projects">projects</a></div>
           
             <div class="menu"><a href="#contact">contact</a></div>
          </div>
         </div>
      </div>
    </header>
   
    <div class="Mainbackground" id="home">
      <div class="topBackground"></div>
     
      <div class="container fluids">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="screenWords">
              <h1>Hello!! I'm Ishika Poddar.</h1>
              <p>
                <Typed
                
                strings={[
          " ", 
          "A Web Developer", 
          "Competitive Programmer", 
           
          "Or!", 
          '"a coder"', 
          " ", 
          " "]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
               
              </p>
            
            
</div>



          </div>
          <div class="col-md-12 col-lg-4">
            <div class="screenImage">
              <img src="./images/ish.jpg" alt="irene blog" />
            </div>
          </div>
        </div>
      </div>
      </div>

      
    <section id="about">
    <div className="about__container" id="about-me">
     <div>
      <img src="./images/about.png" alt="person icon"/>
     </div>
     
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>
       I am a Second year student pursuing B.Tech with majors in 
                    Computer Science and Engineering in NIT Rourkela. I am quite enthusiastic about 
                    learning new and emerging technologies, and always looks for 
                    something new to try out. Also a Competitive Programmer
                    
                  </p>
                  <p>
                  I enjoy creating things that live on the internet, whether
                    that be websites, applications or anything in between.
                     
                  </p>
     </div>
   
    </div>
    </section>

    <section id="projects">
      <div className="heading">
        <h1>My Recent Works</h1>
        <p>Some Projects on which I have worked recently.</p>
      </div>
      <div className="project__container">
        
      <a href="https://ishikapoddar.github.io/Project-Durga/"><div className="grow"> <img src="./images/durga.png" alt="icon" /></div></a>
      <a href="https://ishikapoddar.github.io/Portfolio/"> <div className="grow"><img src="./images/portfolio.png" alt="icon" /></div></a>
      <a href="https://todolistip.netlify.app/"><div className="grow"> <img src="./images/todo.png" alt="icon" /></div></a>
      </div>
      
    </section>

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
        <a href="https://github.com/ishikapoddar"><div class="ico"><FaGithub size={32}/></div></a>
        <a href="https://github.com/ishikapoddar"><div class="ico"><FaLinkedin size={32}/></div></a>
        <a href="https://github.com/ishikapoddar"><div class="ico"><FaInstagram size={32}/></div></a> 
      </div>

    </section>
    
    
    
   
      </>
    

  );
}

export default App;
