import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="shadow-md bg-white font-sans tracking-wide relative z-50">
        <section className="flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]">
          <div className="flex  lg:hidden">
            <button id="toggleOpen">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <Link to="/">
            <img
              src="https://s3-alpha-sig.figma.com/img/2ddd/0392/e2b2a36005d0c24f6c30448e415b97ed?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pv8rsM88BjuLwtB7EMbDFo~DvdrnfPWYbGW4-gYB2cygDbDKyXLTkuM40r5gCr6CtZsSxJpAOeGFQDqvBtpPTl1EiLaUMzEl3DrlCPQQhKyZPlOAI1w9i5rBBnSq8J8mc~z386atpzmDHkMlLiWFzD8WlBAbggKEvn3tPLGPRYM326uYMjz5mgWybgahlxS7h0vEmZR7ZU-BwKKCehJmJDSjuQrCZUBI1TV13ZZaKN38c3pWLrxoSY30EhJXuW0CFv5oqqOVlipw54BoPZ~oFeHqnMz6XGEqNmrnDRCCF9Dm6Xbip0W5jX06OCG9qeBSe67fDqxyoMHHuMYHWsYqBQ__"
              alt="logo"
              className="md:w-[170px] w-36"
            />
          </Link>
          <div className="space-x-6 md:absolute md:right-10 flex items-center max-md:ml-auto">
            <FaSearch />
            <Link to="/Cart">
              <FaCartArrowDown />
            </Link>

            <div className="inline-block border-gray-300 border-l-2 pl-6 cursor-pointer">
              <Link to="/Login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000" />
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap py-3.5 px-10 overflow-x-auto">
          <div
            id="collapseMenu"
            className="w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <Link to="#">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-[#007bff] font-bold text-[15px] block"
                >
                  Handloom
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Handicraft
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Eco-friendly
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  ArtAnd Painting
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Customized Products
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Gift Items
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Traditional
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  State Wise
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Aboutus
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  ContactUs
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to="#"
                  className="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
