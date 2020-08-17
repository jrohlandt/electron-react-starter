// import { hot } from "react-hot-loader/root";
const { ipcRenderer } = window.require("electron");

import React from "react";

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
        <div>Hello Electron And React</div>
      </>
    );
  }
}

export default App;
