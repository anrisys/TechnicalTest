import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[100%] pb-[30px] pt-3">
      <Slider {...settings}>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
