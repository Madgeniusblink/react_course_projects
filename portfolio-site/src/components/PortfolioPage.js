import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => (
    <div>
        <h1>My MadGeniusBlink Work</h1>
        <p>Checkout the folowing things I've done:</p>
        <ol>
            <Link to="/portfolio/1">Item One</Link><br/>
            <Link to="/portfolio/2">Item Two</Link>
        </ol>
    </div>
)



export { Portfolio as default }