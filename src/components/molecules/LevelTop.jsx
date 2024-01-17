import MoreOption from "../atoms/MoreOption";
import SectionTitle from "../atoms/SectionTitle";

function LevelTop() {
  return (
    <div className="flex items-center justify-between mx-1">
      <SectionTitle sectionName={"Your Level"} />
      <MoreOption name={"LEARN MORE"} />
    </div>
  );
}

export default LevelTop;
