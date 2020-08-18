// import { hot } from "react-hot-loader/root";
const { ipcRenderer } = window.require("electron");

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHello: "",
    };
  }
  componentDidMount() {
    console.log("component did mount");
    ipcRenderer.on("testmain", (event, message) => {
      console.log("test from main", message);
      this.setState({ showHello: message });
    });
  }

  render() {
    return (
      <>
        <div>Hello Electron And React</div>

        <p>{this.state.showHello}</p>
      </>
    );
  }
}

export default App;
