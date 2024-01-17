import MoreOption from "../atoms/MoreOption";
import SectionSubtitle from "../atoms/SectionSubtitle";
import SectionTitle from "../atoms/SectionTitle";

function RedeemTop() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <SectionTitle sectionName={"Redeem Your Points"} />
        <SectionSubtitle subtitle={"Earn more to get you rewards"} />
      </div>
      <MoreOption name={"SEE ALL"} />
    </div>
  );
}

export default RedeemTop;
