import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/Images/dog4.webp";
import img2 from "../assets/Images/dog5.jpeg";
import img3 from "../assets/Images/third.jpg";
import img4 from "../assets/Images/dog2.jpg";

function Slider() {
  const sliderHeight = `calc(100vh - 16px)`;
  const imageStyles = {
    objectFit: "cover",
    width: "100%",
    height: sliderHeight,
  };
  return (
    <div
      className="w-full h-full overflow-hidden bg-black"
      style={{ height: sliderHeight }}
    >
      <Carousel
        autoFocus
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        //showIndicators={false}
        interval={3000}
        stopOnHover={false}
      >
        <div>
          <img src={img1} alt="Loading.." style={imageStyles} />
        </div>
        <div>
          <img src={img2} alt="Loading.." style={imageStyles} />
        </div>
        <div>
          <img src={img3} alt="Loading.." style={imageStyles} />
        </div>
        <div>
          <img src={img4} alt="Loading.." style={imageStyles} />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
