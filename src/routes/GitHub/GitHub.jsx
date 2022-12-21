import React from 'react'

import { useContext } from "react"

// Contexts
import MyContext from "../../contexts/MyContext"

export default function GitHub() {
    const myData = useContext(MyContext);

    return (
        <div>
            <h1>GitHub for</h1>
            <h1>{myData.name}</h1>
        </div>
    )
}