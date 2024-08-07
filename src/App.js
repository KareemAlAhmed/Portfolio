
import { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import ContactUs from './components/ContactUs/Contactus';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Project/Projects';
import Resume from './components/Resume/Resume';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    let nav=document.getElementById("navbar");
    if(currentScrollPos < 92){
      if(nav.classList.contains("navToBottom")){
        nav.classList.remove("navToBottom")
      }
    }
    if (prevScrollpos > currentScrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = `-${nav.offsetHeight +2}px`;
      nav.classList.add("navToBottom")
      
    }
    prevScrollpos = currentScrollPos;
  }
  

  return (
    <div className="App">
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
