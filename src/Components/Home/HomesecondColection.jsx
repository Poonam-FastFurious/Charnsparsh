import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Statecraft Collection
            </h2>
            <p className="  text-center  mb-16">
              From fashion-forward accessories to personalized home decor, the
              DIY possibilities are endless with Dritz cover buttons.
            </p>
            <Slider {...settings}>
              <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] h-[400px] p-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9540/06e8/15c7dc75f55a696353b53220d3b93364?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jbr-7d2k6lflWw8ET0w~NNaCuh0A50dKolPwN0LCDeeCTKyVFKS1Qc72BqhBeIlVQYN5jC5-HLQ3jAuFPYHCYjrrZZYbJRjIG3Yz3Aw7U9KXzF22M8hQJdQv2ohYFQ92UaC5DQRQqGhk0jFIK43aHRooVsSt-yjl9OwgQMyATNVVcpGqlEZS20NgWfk3yaE3oPODpLPhtbv-Dd5GwxCseYRcg8K0mF5IvCnGmlkMUntS9VcUrttZELocjQiWabwclCcZrVkNR-CIXzXFgpHHPh-522iDFu2UfGLvbQJOZgFbakipY9Fig-2Pojj~LOCmlIX~V9xsuB5K6h9QRkyfUg__"
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
                  src="https://s3-alpha-sig.figma.com/img/8fff/2569/13516ba78b994ebc3f07f10961859c46?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LLw9y5qgZCWzy9aFrR9KadyGlQ3-jV3OKdMv6fQozIUbuArA50~yjz0tdBJG3QiBlhgdoaExYVgPJDn-jDFH86sAhMe39WcP2mfPjNGoITXBZz1cPtkrR3RTszI3Jpo9GyyJpRtTDWbmIzjyem3Eld~IwzDFC~mTUlRvb9p-FdN0vAnosxu7XIRKJutoqXq1ZJwQADGda3eQpW29uFPoOrGTUlczadfS~IfbYjs3LSw6IT~zvBDumHpxaDLLy8PYMibNIa0-k9HEiZdYnGJjquXh7Of74AskTnD1gZZGSQC3Nn-rGTno9nQP2Lllv0nsTnxnVEU~sQnckPrxj8L5Rw__"
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
                  src="https://s3-alpha-sig.figma.com/img/8fff/2569/13516ba78b994ebc3f07f10961859c46?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LLw9y5qgZCWzy9aFrR9KadyGlQ3-jV3OKdMv6fQozIUbuArA50~yjz0tdBJG3QiBlhgdoaExYVgPJDn-jDFH86sAhMe39WcP2mfPjNGoITXBZz1cPtkrR3RTszI3Jpo9GyyJpRtTDWbmIzjyem3Eld~IwzDFC~mTUlRvb9p-FdN0vAnosxu7XIRKJutoqXq1ZJwQADGda3eQpW29uFPoOrGTUlczadfS~IfbYjs3LSw6IT~zvBDumHpxaDLLy8PYMibNIa0-k9HEiZdYnGJjquXh7Of74AskTnD1gZZGSQC3Nn-rGTno9nQP2Lllv0nsTnxnVEU~sQnckPrxj8L5Rw__"
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
