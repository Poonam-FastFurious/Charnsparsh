function Wishlist() {
  return (
    <>
      <div className=" pt-12 lg:px-44 px-4">
        <ul className="flex items-center font-[sans-serif] space-x-4">
          <li className="text-gray-400 text-lg font-bold cursor-pointer">
            Home
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-gray-400 w-3.5 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </li>
          <li className="text-black text-lg font-bold cursor-pointer">
            WishList
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-gray-400 w-3.5 -rotate-90"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </li>
          <li className="text-[#333] text-lg font-bold cursor-pointer">Edit</li>
        </ul>
      </div>

      <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
        <div className="flex flex-col jusitfy-start items-start">
          <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-0    ">
            <div className="flex flex-col border">
              <div className="relative">
                <img
                  className="hidden lg:block"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-600 text-white "
                >
                  <svg
                    className="fil-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L13 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    Customized products
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-8"
              >
                <div className="mt-1 text-center">
                  <p className="tracking-tight  text-center text-base font-medium leading-4 text-gray-800 ">
                    Beige brown
                  </p>
                </div>

                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    rs1,000
                  </p>
                </div>
                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4  bg-[#FA8232]  border border-gray-800 ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border">
              <div className="relative">
                <img
                  className="hidden lg:block"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 text-white "
                >
                  <svg
                    className="fil-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L13 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    Customized products
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-8"
              >
                <div className="mt-1">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>

                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    rs1,000
                  </p>
                </div>
                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4  bg-[#FA8232]  border border-gray-800 ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col border">
              <div className="relative">
                <img
                  className="hidden lg:block"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                >
                  <svg
                    className="fil-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L13 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    Customized products
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-8"
              >
                <div className="mt-1">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>

                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    rs1,000
                  </p>
                </div>
                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4  bg-[#FA8232]  border border-gray-800 ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border">
              <div className="relative">
                <img
                  className="hidden lg:block"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="hidden sm:block lg:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <img
                  className="sm:hidden"
                  src="https://s3-alpha-sig.figma.com/img/8e15/da05/8e8c805d766f39967535246d75042838?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8tZJCaNyqvEyGAEB-v53nFysANy~XF1zHx-Z3HAE6QHdktv-kNWaLrvqSOfO5UMTNZ06eFUyuxunEZ-L4ippFUP9-6kvhRQxs4yoMka7lr4D3wdqGb2LD5PQrDEW0QTVbwpa9TRZzAIvZAp6DZPX-5L1Z0kg4bi0PLlUvLf27SSpZXXKuOwWcsgf09kglW6eucc8clQ3CePZeT9PuQfaeUYW45m1E7phBdLUvlW33TnjGNddR6ZR17wF1f3iXQMGestz1G2NPR3YDcHRqeCG~zA7YBcg1kKuMEArzfNY6qhuaCUyyWssmbCeYyWLmhMtEh2N3rk16tH45XQpjA~Vg__"
                  alt="bag"
                />
                <button
                  aria-label="close"
                  className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                >
                  <svg
                    className="fil-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L13 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                    Customized products
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    aria-label="show menu"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                  >
                    <svg
                      id="chevronUp1"
                      className="fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5L5 1L1 5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      id="chevronDown1"
                      className="hidden fill-stroke"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu1"
                className="flex flex-col jusitfy-start items-start mt-8"
              >
                <div className="mt-1">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    Beige brown
                  </p>
                </div>

                <div className="mt-6">
                  <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">
                    rs1,000
                  </p>
                </div>
                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                  <div className="w-full">
                    <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4  bg-[#FA8232] border border-gray-800 ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
