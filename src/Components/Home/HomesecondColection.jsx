import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UttarPradesh from "../../assets/Images/Uttar Pradesh.png";
import MadhyaPradesh from "../../assets/Images/madhyapradesh.png";
import Rajasthan from "../../assets/Images/Rajasthan.png";
function HomesecondColection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="bg-[#F6E8DD] mt-8 ">
        <div className="mx-auto  w-[100%]  sm:w-[80%] px-2  sm:px-6 lg:px-16">
          <div className="mx-auto max-w-8xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-gray-900 text-center font-[Outfit]">
              Statecraft Collection
            </h2>
            <p className="  text-center  mb-16">
              From fashion-forward accessories to personalized home decor, the
              DIY possibilities are endless with Dritz cover buttons.
            </p>
            <Slider {...settings}>
              <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] h-[400px] p-4">
                <img
                  src={UttarPradesh}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Madhya Pradesh
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Know more
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] h-[400px] p-4">
                <img
                  src={MadhyaPradesh}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Uttar Pradesh
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Know more
                  </button>
                </div>
              </div>
              <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] h-[400px] p-4">
                <img
                  src={Rajasthan}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Uttar Pradesh
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Know more
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomesecondColection;
