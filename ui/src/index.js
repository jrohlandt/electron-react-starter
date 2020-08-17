const { ipcRenderer } = window.require("electron");
// import nav from "./nav";
// import { top, bottom } from "./footer";
// import { top as topc, bottom as bottomc } from "./footer-common";
// import Button from "./button";
// import "./nav.css";
// import "./button.css";
// import headerLogo from "../resources/img/webpack-header-logo.jpg";
// import headerLogoDark from "../resources/svg/webpack-header-logo-dark.svg";
// import makeImage from "./image.js";

import React from "react";
import ReactDOM from "react-dom";

// document.body.appendChild(makeImage(headerLogo, 300));
// document.body.appendChild(makeImage(headerLogoDark, 300, "auto", "black"));

// document.body.appendChild(Button("Happy button"));
// document.body.appendChild(nav());
class App extends React.Component {
  componentDidMount() {
    console.log("component did mount");
    ipcRenderer.on("testmain", (event, message) => {
      console.log("test from main", message);
    });
  }

  render() {
    return (
      <>
        <div>Hello</div>
      </>
    );
  }
}
// console.log(nav, top, bottom, topc, bottomc, "ddd");
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Jy" />;
ReactDOM.render(<App />, document.getElementById("app"));
