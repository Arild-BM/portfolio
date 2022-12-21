import React from 'react'
import Picture from '../../images/portrait.png'
import styles from './layout.module.css';

// Libraries
import { useContext, useState } from "react"

// Contexts
import MyContext from "../../contexts/MyContext"

export default function AboutMe() {
    const myData = useContext(MyContext);

    return (
            <div>
                <img className={styles.mainimage} src={Picture} alt="Portrait of me" />
                <h1>{myData.name}</h1>
                <p>{myData.pitch1}</p>
                <p>{myData.pitch2}</p>
                <p>{myData.pitch3}</p>
            </div>
    )
}