import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";
import banner from "../../assets/Images/bannercharnspars.jpeg";
import image from "../../assets/Images/templeimagekashi.jpeg";
import image2 from "../../assets/Images/templeimage.jpeg";
import image3 from "../../assets/Images/templeimg2.jpeg";
import image4 from "../../assets/Images/templeimage3.jpeg";
import image5 from "../../assets/Images/templeimage4.jpeg";
import image6 from "../../assets/Images/templeimage5.jpeg";
import { Link } from "react-router-dom";
function Templelist() {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);
  return (
    <>
      <div id="carouselExampleCaptions" className="relative">
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        ></div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={banner} className="block w-full" alt="..." />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto w-[80%] ">
            <div className="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl   tracking-tight font-bold text-[#FA8232] dark:text-white Montserrat-font ">
                Select your temple
              </h2>
            </div>
          </div>
        </section>
        <div className=" flex  flex-row  w-[80%] mx-auto  ">
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Kashi Vishwanath Temple
              </h3>

              <button
                type="button"
                className="py-2.5  rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image2}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Mahakaleshwar Temple
              </h3>

              <button
                type="button"
                className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center  w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" flex  flex-row  w-[80%] mx-auto  ">
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image3}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Omkareshwar Temple
              </h3>

              <button
                type="button"
                className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center  w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image4}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Somnath Temple
              </h3>

              <button
                type="button"
                className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center  w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" flex  flex-row  w-[80%] mx-auto  ">
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image5}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Kedarnath Temple
              </h3>

              <button
                type="button"
                className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center  w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
          <div className="bg-white  w-full max-w-md rounded-lg overflow-hidden mx-auto mt-4">
            <div className="min-h-[356px]">
              <img
                src={image6}
                className="w-full h-[620px] object-cover"
                alt="Kashi Vishwanath Temple"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-gray-800 text-xl font-bold text-center mb-4">
                Baidyanath Temple
              </h3>

              <button
                type="button"
                className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] items-center flex justify-center text-center  w-[25%] "
              >
                <Link to="/templedetais"> Visit Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400 py-4 flex justify-center items-center mx-auto pt-8">
          <button
            type="button"
            className="py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#F28330] flex justify-center text-center w-[10%]"
          >
            REED MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Templelist;
