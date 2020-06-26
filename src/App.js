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
    const { imgpath, btnClick } = this.state;
    return (
      <div className="app">
        <div className="app__top">제목</div>

        <div className="app__middle">
          <div className="btn">
            <input
              type="button"
              value="photo"
              onClick={this._potoHandler}
            ></input>

            <input
              type="button"
              value="photo1"
              onClick={this._potoHandler1}
            ></input>

            <input
              type="button"
              value="photo2"
              onClick={this._potoHandler2}
            ></input>

            <input
              type="button"
              value="photo3"
              onClick={this._potoHandler3}
            ></input>

            <input
              type="button"
              value="photo4"
              onClick={this._potoHandler4}
            ></input>
          </div>
        </div>

        <div className="loding">
          {btnClick ? <img src={imgpath} /> : <div>loding . . .</div>}
        </div>
      </div>
    );
  }
  _potoHandler = () => {
    this.setState({
      btnClickFlag: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 2000);

    this.setState({
      imgpath: img1,
    });
  };

  _potoHandler1 = () => {
    this.setState({
      btnClick: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 2000);

    this.setState({
      imgpath: img1,
    });

    _potoHandler2 = () => {
      this.setState({
        btnClickFlag: false,
      });

      setTimeout(() => {
        this.setState({
          btnClick: true,
        });
      }, 2000);

      this.setState({
        imgpath: img2,
      });
    };
    _potoHandler3 = () => {
      this.setState({
        btnClickFlag: false,
      });

      setTimeout(() => {
        this.setState({
          btnClick: true,
        });
      }, 2000);

      this.setState({
        imgpath: img3,
      });
    };

    _potoHandler4 = () => {
      this.setState({
        btnClickFlag: false,
      });

      setTimeout(() => {
        this.setState({
          btnClick: true,
        });
      }, 2000);

      this.setState({
        imgpath: img4,
      });
    };
  };
}

export default App;
