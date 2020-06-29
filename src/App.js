import React from "react";
import "./styles/app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../src/img/img1.jpg";
import img2 from "../src/img/img2.jpg";
import img3 from "../src/img/img3.jpg";
import img4 from "../src/img/img4.jpg";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = { imgpath: "", btnClick: false };
  }
  render() {
    const { imgpath, btnClick } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      afterChange: () => console.log("Screen"),
    };
    return (
      <div className="app">
        <Slider {...settings}>
          <div className="slick__box">
            <img src={img1} width="100%" height="100%" />
          </div>
          <div className="slick__box">
            <img src={img2} width="100%" height="100%" />
          </div>
          <div className="slick__box">
            <img src={img3} width="100%" height="100%" />
          </div>
          <div className="slick__box">
            <img src={img4} width="100%" height="100%" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
