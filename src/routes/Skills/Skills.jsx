import React from 'react'

import { useContext } from "react"

// Contexts
import MyContext from "../../contexts/MyContext"

export default function Skills() {
    const myData = useContext(MyContext);

    return (
        <div>
            <h1>Mine ferdigheter:</h1>
            <ul>
                <li>{myData.skill01}</li>
                <li>{myData.skill02}</li>
                <li>{myData.skill03}</li>
                <li>{myData.skill04}</li>
                <li>{myData.skill05}</li>
                <li>{myData.skill06}</li>
                <li>{myData.skill07}</li>
                <li>{myData.skill08}</li>
                <li>{myData.skill09}</li>
                <li>{myData.skill10}</li>
                <li>{myData.skill11}</li>
                <li>{myData.skill12}</li>
                <li>{myData.skill13}</li>
            </ul>
        </div>
    )
}