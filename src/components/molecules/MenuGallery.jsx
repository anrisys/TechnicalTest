import {
  Bucket,
  Calender,
  ContactUs,
  Privilege,
  Redeem,
  Voucher,
} from "../../assets/Icons";
import MenuName from "../atoms/MenuName";

function MenuGallery() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
      <div className="flex items-center flex-col py-3">
        <Bucket />
        <MenuName name={"Order"} />
      </div>
      <div className="flex items-center flex-col py-3">
        <Redeem />
        <MenuName name={"Redeem"} />
      </div>
      <div className="flex items-center flex-col py-3">
        <Voucher />
        <MenuName name={"My Voucher"} />
      </div>
      <div className="flex items-center flex-col py-3">
        <Privilege />
        <MenuName name={"Privilege"} />
      </div>
      <div className="flex items-center flex-col py-3">
        <Calender />
        <MenuName name={"History"} />
      </div>
      <div className="flex items-center flex-col py-3">
        <ContactUs />
        <MenuName name={"Contact Us"} />
      </div>
    </div>
  );
}

export default MenuGallery;
