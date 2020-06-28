import React from "react";
import "./styles/app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class App extends React.Component {
  constructor(pros) {
    super(pros);

    this.state = { imgpath: " ", btnClick: false };
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
        <div className="app__top">
          <Slider {...settings}>
            <div className="slick__box">
              <h3 className="slick__box__1">test</h3>
            </div>
            <div className="slick__box">
              <h3 className="slick__box__2">test2</h3>
            </div>
            <div className="slick__box">
              <h3 className="slick__box__3">test3</h3>
            </div>
            <div className="slick__box">
              <h3 className="slick__box__4">test4</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
