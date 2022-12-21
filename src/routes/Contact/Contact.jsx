import React from 'react'

import { useContext } from "react"

// Contexts
import MyContext from "../../contexts/MyContext"

export default function ContactPage() {
    const myData = useContext(MyContext);

    return (
        <div>
            <h1>Kontaktinfo for {myData.name}:</h1>
            <h3>Mob. tlf: {myData.tlf}</h3>
            <h3>E-mail: {myData.email}</h3>
        </div>
    )
}