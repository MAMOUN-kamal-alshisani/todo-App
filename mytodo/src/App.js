import React from 'react';
import './App.css'
// import ToDo from './components/toDO'
import Header from './components/header/header'
import ToDo from './components/toDO'
import SettingsProvider from "./components/context/settings";
// import SettingsContext from "./components//";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/auth";
import LoginProvider from "./components/context/context";
import Login from "./components/context/login";
export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
      <SettingsProvider>
        <Header/>
       {/* style={{ width: "75%", marginTop: "30px", marginLeft: "150px" }} */}
      <div>
        <ToDo />
      </div>
      {/* <Footer /> */}
    </SettingsProvider>
    </LoginProvider>
     
  );
}
}
  