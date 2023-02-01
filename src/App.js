import Projects from './components/Projects';
import './index.css';
import './styles/toggler.css'
import MenuIconBlack from '../src/images/menuIconBlack.svg'
import MenuIconPurple from '../src/images/menuIconPurple.svg'
import MenuIconWhite from '../src/images/menuIconWhite.svg'

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
  const [menuPurple, setMenuPurple] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

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
            <div 
              onClick={() => setShowMenu(false)}
              onMouseLeave={() => setShowMenu(false)}
              className={showMenu ? `miniNavbar ${darkMode ? "dark": ""}` : "navbar"}>
              <Link className={`link ${darkMode ? "dark": ""}`} to='/'>Hjem</Link>
              <Link className={`link ${darkMode ? "dark": ""}`} to='/AboutMe'>Om meg</Link>
              <Link className={`link ${darkMode ? "dark": ""}`} to='/Skills'>Ferdigheter</Link>
              <Link className={`link ${darkMode ? "dark": ""}`} to='/Contact'>Kontakt</Link>
              <a className={darkMode ? "dark": ""} href="https://arild-bm.github.io/" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <div
            onMouseEnter={() => setMenuPurple(true)}
            onMouseLeave={() => setMenuPurple(false)}
            onClick={() => setShowMenu(prev => !prev)}
            >
              {!menuPurple && <img className="menuIcon" src={darkMode ? MenuIconWhite : MenuIconBlack} alt="Menu icon" />}
              {menuPurple && <img className="menuIconPurple" src={MenuIconPurple} alt="Menu icon" />}
            </div>

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
          <div className="corner corner1"></div>
          <div className={`innerbox innerbox1 ${darkMode ? "dark": ""}`}></div>
          <div className={`slantbox slantbox1 ${darkMode ? "dark": ""}`}></div>
          <div className="flex">
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
            <div className="border"><div className="corner"></div></div>
            <div className={darkMode ? "dark": ""}>
              <div className="projectpage">
              <Projects darkMode={darkMode} />
              </div>
            </div>
          </div>
          <div className="corner corner2"></div>
          <div className={`innerbox innerbox2 ${darkMode ? "dark": ""}`}></div>
          <div className={`slantbox slantbox2 ${darkMode ? "dark": ""}`}></div>
        </main>
      </Router>
    </MyContext.Provider>
  );
}

export default App;