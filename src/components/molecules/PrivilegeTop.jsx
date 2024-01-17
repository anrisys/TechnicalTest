import SectionSubtitle from "../atoms/SectionSubtitle";
import SectionTitle from "../atoms/SectionTitle";

function PrivilegeTop() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <SectionTitle sectionName={"Privileges"} />
        <SectionSubtitle subtitle={"Keep discovering our promo and news"} />
      </div>
    </div>
  );
}

export default PrivilegeTop;
