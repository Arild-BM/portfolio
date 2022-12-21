import './App.css';
import Footer from './components/Footer';

// Libraries
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { useState } from 'react'

// Contexts
import MyContext from "./contexts/MyContext"

// Routes
import HomePage from './routes/HomePage/HomePage';
import ContactPage from './routes/Contact/Contact';
import AboutMe from './routes/AboutMe/AboutMe';
import Skills from './routes/Skills/Skills';
import GitHub from './routes/GitHub/GitHub';
// import Project1 from './routes/ProjectPage/Project1/Project1';

import userInfo from './data'

function App() {

  const [darkMode, setDarkMode] = useState(true)
  
  // Toggle between dark mode and light mode
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }

  return (
    // Wrapping the whole 
    <MyContext.Provider value={userInfo}>
      <Router>

        {/* Static elements */}
        <header className={darkMode ? "dark": ""}>
          <nav className={darkMode ? "dark": ""} >
            <Link className={`link ${darkMode ? "dark": ""}`} to='/'>Hjem</Link>
            <Link className={`link ${darkMode ? "dark": ""}`} to='/AboutMe'>Om meg</Link>
            <Link className={`link ${darkMode ? "dark": ""}`} to='/Skills'>Ferdigheter</Link>
            <Link className={`link ${darkMode ? "dark": ""}`} to='/Contact'>Kontakt</Link>
            <a className={darkMode ? "dark": ""} href="https://arild-bm.github.io/" target="_blank">GitHub</a>

            {/* Toggle switch in upper right corner */}
            <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={toggleDarkMode} >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
          </nav>
        </header>

        <main className={darkMode ? "dark": ""}>
          <div className="uppercorner">
          </div>
          <div className={`innerbox ${darkMode ? "dark": ""}`}>
          </div>
          <div className={`slantbox ${darkMode ? "dark": ""}`}>
          </div>
          <div className="maintext">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/AboutMe' element={<AboutMe />} />
              <Route path='/Skills' element={<Skills />} />
              <Route path='/GitHub' element={<GitHub />} />
              <Route path='/Contact' element={<ContactPage />} />
                          
              {/* Cathcing all the invalid URLs */}
              <Route path='*' element={<h1>404 Error</h1>} />
            </Routes>
          </div>
        </main>

        <footer className={darkMode ? "dark": ""}>
          <Footer darkMode={darkMode} />
        </footer>
      </Router>
    </MyContext.Provider>
  );
}

export default App;