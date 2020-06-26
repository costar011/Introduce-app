import React from "react";
import "./styles/app.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = { imgpath: "", btnClick: false };
  }
  render() {
    const { imgpath } = this.state;
    return (
      <div className="app">
        <div className="app__top">제목</div>

        <div className="app__middle">
          <div className="btn">
            <input type="button" value="photo"></input>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
