import React from 'react'

export default function Footer(props) {
    return (
        <div className={props.darkMode ? "dark": ""}>
            <h2>Utvalgte prosjekter:</h2>
            <div className="projects">
                <a className={props.darkMode ? "dark": ""} href="https://arild-bm.github.io/Parallax-Website/" target="_blank">Stavanger<br />sentrum</a>
                <a className={props.darkMode ? "dark": ""} href="https://arild-bm.github.io/Stavanger/" target="_blank">Visit<br />Stavanger</a>
                <a className={props.darkMode ? "dark": ""} href="https://arild-bm.github.io/Solsystem/" target="_blank">Solar<br />System</a>
                <a className={props.darkMode ? "dark": ""} href="https://arild-bm.github.io/Rotating-pictures/" target="_blank">Rotating<br />Pictures</a>
                <a className={props.darkMode ? "dark": ""} href="https://arild-bm.github.io/christmas-task/" target="_blank">Christmas<br />Countdown</a>
            </div>
        </div>
    )
}