import Banner from "./Banner";

import Crausal from "./Crousal/Crausal";
import HomeColection from "./HomeColection";
import HomesecondColection from "./HomesecondColection";
import NewArrival from "./NewArrival";
import Offer from "./Offer";
import Secondbanner from "./Secondbanner";
import Testimonial from "./Testimonial";
import TrendingProduct from "./TrendingProduct";

function Home() {
  return (
    <>
      <Banner />

      <HomeColection />
      <HomesecondColection />
      <Crausal />
      <Secondbanner />
      <TrendingProduct />
      <NewArrival />
      <Testimonial />
      <Offer />
    </>
  );
}

export default Home;
