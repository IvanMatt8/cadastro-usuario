/* eslint-disable import/no-anonymous-default-export */
import "./Logo.css"
import React from "react"
import Logo from "../../assets/imgs/logo.png.png"
import { Link } from "react-router-dom"


export default props => {
  return(
    
    <aside className="logo">
        <Link to="/" className="logo">
           <img src={Logo} alt="logo" width="300" height="150" />
        </Link>
    </aside>

  )
}

