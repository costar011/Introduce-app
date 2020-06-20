import React from "react";
import "./styles/app.css";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <div className="app__top">Test</div>
        <div className="app__line"></div>
        <div className="app__middle">Test1</div>
        <div className="app__line"></div>
        <div className="app__bottom">Test2</div>
        <div className="app__line"></div>
      </div>
    );
  }
}
export default App;
