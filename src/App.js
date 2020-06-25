import React from "react";
import "./styles/app.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = { imgpath: "" };
  }
  render() {
    const { imgpath } = this.state;
    return (
      <div className="app">
        <div className="app__top">제목</div>

        <div className="app__middle">사진and버튼</div>
        <div className="app__Btn">
          <input type="button" value="photo"></input>
        </div>

        <div className="app__bottom">설명</div>
      </div>
    );
  }
}
export default App;
