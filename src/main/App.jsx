/* eslint-disable import/no-anonymous-default-export */
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes"
import Logo from "../components/teamplate/Logo"
import Nav from "../components/teamplate/Nav"
import Footer from "../components/teamplate/Footer"



export default props => 
         
     <BrowserRouter>
          <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
          </div>
     </BrowserRouter>
 
