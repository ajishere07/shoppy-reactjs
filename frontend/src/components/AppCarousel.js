import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AppCarousel({ img1, img2, img3 }) {
  return (
    <div className="mx-12 my-4">
      <Carousel showStatus={false} showThumbs={false} showArrows={true}>
        <div>
          <img className="rounded-2xl" src={img1} alt="img" />
        </div>
        <div>
          <img className="rounded-2xl" src={img2} alt="img" />
        </div>
        <div>
          <img className="rounded-2xl" src={img3} alt="img" />
        </div>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
