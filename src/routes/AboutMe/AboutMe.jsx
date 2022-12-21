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
                <h1>Litt informasjon om meg:</h1>
                <p>{myData.about1}</p>
                <p>{myData.about2}</p>
                <p>{myData.about3}</p>
                <p>{myData.about4}</p>
                <p>{myData.about5}</p>
            </div>
    )
}