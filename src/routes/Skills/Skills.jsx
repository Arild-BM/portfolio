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
                <li>{myData.skill1}</li>
                <li>{myData.skill2}</li>
                <li>{myData.skill3}</li>
                <li>{myData.skill4}</li>
                <li>{myData.skill5}</li>
                <li>{myData.skill6}</li>
                <li>{myData.skill7}</li>
            </ul>
        </div>
    )
}