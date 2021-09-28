import React from 'react';
import './App.css'
// import ToDo from './components/toDO'
import Header from './components/header/header'
import ToDo from './components/toDO'
import SettingsProvider from "./components/context/sittings";
// import SettingsContext from "./components//";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
       
      <div style={{ width: "75%", marginTop: "30px", marginLeft: "150px" }}>
        <ToDo />
      </div>
      {/* <Footer /> */}
    </SettingsProvider>
     
  );
}
}
  