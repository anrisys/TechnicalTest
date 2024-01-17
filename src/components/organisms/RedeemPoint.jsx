import RedeemPointGallery from "../molecules/RedeemGallery";
import RedeemTop from "../molecules/RedeemTop";

function RedeemPoint() {
  return (
    <div className="p-2 mx-3 w-100">
      <RedeemTop />
      <RedeemPointGallery />
    </div>
  );
}

export default RedeemPoint;
