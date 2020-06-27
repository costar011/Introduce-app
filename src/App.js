import React from "react";
import "./styles/app.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = { imgpath: " ", btnClick: false };
  }
  render() {
    const { imgpath, btnClick } = this.state;
    return (
      <div className="app">
        <div className="app__top">제목</div>

        <div className="app__middle">
          <div className="btn">
            <input
              type="button"
              value="img1"
              onClick={this._imgHandler1}
            ></input>

            <input
              type="button"
              value="img2"
              onClick={this._imgHandler2}
            ></input>

            <input
              type="button"
              value="img3"
              onClick={this._imgHandler3}
            ></input>

            <input
              type="button"
              value="img4"
              onClick={this._imgHandler4}
            ></input>
          </div>
        </div>

        <div className="sc">
          {btnClick ? <img src={imgpath} /> : <div>loading...</div>}
        </div>
      </div>
    );
  }

  _imgHandler1 = () => {
    this.setState({
      btnClickFlag: false,
    });

    setTimeout(() => {
      this.setState({
        btnClickFlag: true,
      });
    }, 2000);

    this.setState({
      imgPath: img1,
    });
  };
}

export default App;
