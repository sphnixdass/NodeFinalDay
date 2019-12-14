import React from 'react'
import logoPath from '../assets/rbslogo.png'
import './Logo.css'
//fat arrow or lambda function
const rbslogo=()=>(
    <img src={logoPath} className="rbslogo"/>
)

export default rbslogo
