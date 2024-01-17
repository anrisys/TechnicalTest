import { ShopLogo } from "../../assets/Icons";
import HeaderAction from "../molecules/HeaderAction";

function Header() {
  return (
    <div className="flex items-center justify-between mt-1 w-100">
      <ShopLogo />
      <HeaderAction />
    </div>
  );
}

export default Header;
