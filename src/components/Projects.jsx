import React, {useState, useContext, useEffect} from 'react'
import styles from '../styles/projects.module.css';
import Picture1 from '../images/Stavanger1.jpg'
import Picture2 from '../images/Stavanger2.jpg'
import Picture3 from '../images/Solarsystem.jpg'
import Picture4 from '../images/RotatingPictures.jpg'
import Picture5 from '../images/Christmas.jpg'

import MyContext from "../contexts/MyContext"

let i = 0;
let change = true;

setInterval(() => i++, 1500)

export default function Projects(props) {
    const myData = useContext(MyContext);
    const pictures = [Picture1, Picture2, Picture3, Picture4, Picture5]
    const text = [myData.project1, myData.project2, myData.project3, myData.project4, myData.project5]
    const [count, setCount] = useState(i)
    
    const [class2, setClass2] = useState("")
    const [picture, setPicture] = useState(pictures[0])
    const [projectText, setProjectText] = useState(text[0])
    
    useEffect(() => {
    setTimeout(() => {
        setCount(i%5);
        if (change) {
            setProjectText(text[count])
            setPicture(pictures[count])
        }
    }, 1500);
  }, [count]);

    function showImage(image, txt) {
        change = false;
        setClass2(`${styles.bold}`)
        setPicture(image)
        setProjectText(txt)
    }

    function hideImage() {
        change = true;
        setClass2(`${styles.normal}`)
        setPicture(pictures[count])
        setProjectText(text[count])
    }

    return (
        <div className={props.darkMode ? "dark": ""}>
            <h2>Utvalgte prosjekter:</h2>
            <div className={`${styles.projectsection}`}>
                <div className={`${styles.projects}`}>
                    <a 
                        onMouseEnter={() => showImage(Picture1, myData.project1)}
                        onTouchEnter={() => showImage(Picture1, myData.project1)}
                        onMouseLeave={() => hideImage()}
                        onTouchLeave={() => hideImage()}
                        className={props.darkMode ? `dark ${class2}`: `${class2}`}
                        href="https://arild-bm.github.io/Parallax-Website/"
                        rel="noreferrer"
                        target="_blank">Stavanger<br />sentrum
                    </a>
                    <a 
                        onMouseEnter={() => showImage(Picture2, myData.project2)}
                        onMouseLeave={() => hideImage()}
                        className={props.darkMode ? "dark": ""}
                        href="https://arild-bm.github.io/Stavanger/"
                        rel="noreferrer"
                        target="_blank">Visit<br />Stavanger
                    </a>
                    <a 
                        onMouseEnter={() => showImage(Picture3, myData.project3)}
                        onMouseLeave={() => hideImage()}
                        className={props.darkMode ? "dark": ""}
                        href="https://arild-bm.github.io/Solsystem/"
                        rel="noreferrer"
                        target="_blank">Solar<br />System
                    </a>
                    <a 
                        onMouseEnter={() => showImage(Picture4, myData.project4)}
                        onMouseLeave={() => hideImage()}
                        className={props.darkMode ? "dark": ""}
                        href="https://arild-bm.github.io/Rotating-pictures/"
                        rel="noreferrer"
                        target="_blank">Roterende<br />bilder
                    </a>
                    <a  
                        onMouseEnter={() => showImage(Picture5, myData.project5)}
                        onMouseLeave={() => hideImage()}
                        className={props.darkMode ? "dark": ""}
                        href="https://arild-bm.github.io/christmas-task/"
                        rel="noreferrer"
                        target="_blank">Nedtelling<br />til jul
                    </a>
                    
                </div>
                <div className={`${styles.pictureText}`}>
                    <img className={picture !== "" ? styles.image : ""} src={picture} alt="" />
                    <div className="projecttext">
                        <p>{projectText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}