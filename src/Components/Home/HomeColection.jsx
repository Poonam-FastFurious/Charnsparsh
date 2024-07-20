import ecofriendly from "../../assets/Images/demo.jpg";
import artandpainting from "../../assets/Images/Art and painting.jpeg";
import Handicraft from "../../assets/Images/homecollectionimage.jpeg";
import HandLoom from "../../assets/Images/HandLoom.jpeg";
import Traditional from "../../assets/Images/Traditional.jpeg";
import Customized from "../../assets/Images/Customized.jpeg";
import { Link } from "react-router-dom";
function HomeColection() {
  return (
    <>
      <div className="bg-white">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl ">
            <div className="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl text-center  sm:text-center md:text-center xl:text-center tracking-tight font-bold text-gray-900 dark:text-white">
                Collection
              </h2>
              <p className="text-center    ">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <Link to="/product" className="group">
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={Handicraft}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                Handcraft
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#F7A263]  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
            <Link to="/product" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={HandLoom}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                HandLoom
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
            <Link to="/product" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={ecofriendly}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                Eco-Friendly
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
            <Link to="/product" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={Traditional}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                Traditional
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
            <Link to="/product" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={Customized}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                Customized
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
            <Link to="/product" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={artandpainting}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h1 className="  mb-4  text-center text-2xl font-bold">
                Art & Painting
              </h1>
              <p className="mb-4 text-center text-wrap text-[10px] sm:text-[16px]">
                From fashion-forward accessories to personalized home decor, the
                DIY possibilities are endless with Dritz cover buttons.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="inline-block rounded-2xl   border-[#F7A263] border bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#F7A263]  transition duration-150 ease-in-out    focus:shadow-primary-2 focus:outline-none focus:ring-0  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeColection;
