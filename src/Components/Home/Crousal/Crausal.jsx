import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { NextArrow, PrevArrow } from "./Arrow"; // Adjust the import path if needed
import { useEffect, useState } from "react";

function Crausal() {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 767); // Show arrows on screens wider than 767px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: showArrows ? <NextArrow /> : null, // Conditional rendering of next arrow
    prevArrow: showArrows ? <PrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 422,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="px-8">
      <div className="mx-auto w-[100%] sm:w-[80%] px-2 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 font-[Outfit]">
            Best Selling
          </h2>

          <Slider {...settings}>
            <div className="group relative p-4">
              <Card />
            </div>
            <div className="group relative p-4">
              <Card />
            </div>
            <div className="group relative p-4">
              <Card />
            </div>
            <div className="group relative p-4">
              <Card />
            </div>
            <div className="group relative p-4">
              <Card />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Crausal;
