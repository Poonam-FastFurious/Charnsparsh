import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Crousal/Arrow";
import Card from "./Crousal/Card";

function TrendingProduct() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <>
      <div className="px-8">
        <div className="mx-auto w-[100%] sm:w-[80%] px-2 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none ">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Trending Products
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
    </>
  );
}

export default TrendingProduct;
