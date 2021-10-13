import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from './components/main'
import './Styles/styleSheet.css'
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById("root"));
