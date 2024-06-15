import banner from "../../assets/Images/banner.png";
function Secondbanner() {
  return (
    <div>
      <div className="bg-[#E7E6E4] font-[sans-serif] text-black p-6">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
          <div className="md:h-[400px]">
            <img src={banner} className="w-full h-full object-contain" />
          </div>
          <div className="max-md:text-center">
            <h3 className="md:text-3xl text-2xl md:leading-10">
              Gifts for all seasons
            </h3>
            <p className="mt-6 text-sm">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit.
            </p>
            <button
              type="button"
              className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondbanner;
