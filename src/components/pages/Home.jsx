import Hero from "../molecules/Hero";
import Header from "../organisms/Header";
import Level from "../organisms/Level";
import Locations from "../organisms/Locations";
import Menu from "../organisms/Menu";
import Point from "../organisms/Point";
import Privileges from "../organisms/Privileges";
import RedeemPoint from "../organisms/RedeemPoint";
import ReferAction from "../organisms/ReferAction";

function HomePage() {
  return (
    <div className="w-100">
      <Header />
      <Hero />
      <Level />
      <Point />
      <Menu />
      <ReferAction />
      <RedeemPoint />
      <Privileges />
      <Locations />
    </div>
  );
}

export default HomePage;
